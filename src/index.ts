import { AppDataSource } from "./data-source";
import * as express from "express";
import * as cors from 'cors';
import { Request, Response, NextFunction } from "express";
import * as logger from "morgan";
import { routesRouter } from "./routes/routes.route";
import { highlightsRouter } from './routes/highlights.route';
import { Repository } from "typeorm";
import { Route } from "./models-entities/Route";
import { Highlight } from "./models-entities/Highlight";

// Datasource initialization
AppDataSource.initialize().then(async () => {
    // Set mock data into the database

    console.log("Inserting a mock data for routes and highlights into the database...");

    const routesRepository: Repository<Route> = AppDataSource.getRepository(Route);
    const highlightsRepository: Repository<Highlight> = AppDataSource.getRepository(Highlight);

    console.log("Creating database schema from scratch...");
    await AppDataSource.synchronize(true);
    
    console.log("Database seeding with dummy routes and highlights...");
    const highlight1 = new Highlight();
    highlight1.name = "highlight 1"; highlight1.description = "highlight description 1"; highlight1.latitude = 39.98239159489074; highlight1.longitude = -6.154486018401318;
    await highlightsRepository.save(highlight1);
    const highlight2 = new Highlight();
    highlight2.name = "highlight 2"; highlight2.description = "highlight description 2"; highlight2.latitude = 46.705044775671524; highlight2.longitude = 1.87505644832081;
    await highlightsRepository.save(highlight2);
    const highlight3 = new Highlight();
    highlight3.name = "highlight 3"; highlight3.description = "highlight description 3"; highlight3.latitude = 39.12044032439212; highlight3.longitude = -5.330428626699228;
    await highlightsRepository.save(highlight3);
    const highlight4 = new Highlight();
    highlight4.name = "highlight 4"; highlight4.description = "highlight description 4"; highlight4.latitude = 38.731189585275345; highlight4.longitude = -9.188670771742895;
    await highlightsRepository.save(highlight4);
    const highlight5 = new Highlight();
    highlight5.name = "highlight 5"; highlight5.description = "highlight description 5"; highlight5.latitude = 37.88814573059609; highlight5.longitude = -4.783593948811073;
    await highlightsRepository.save(highlight5);
    const highlight6 = new Highlight();
    highlight6.name = "highlight 6"; highlight6.description = "highlight description 6"; highlight6.latitude = 45.42684582414596; highlight6.longitude = 0.1906156805408895;
    await highlightsRepository.save(highlight6);
    const highlight7 = new Highlight();
    highlight7.name = "highlight 7"; highlight7.description = "highlight description 7"; highlight7.latitude = 40.21988790183374; highlight7.longitude = -8.414452570510107;
    await highlightsRepository.save(highlight7);
    const highlight8 = new Highlight();
    highlight8.name = "highlight 8"; highlight8.description = "highlight description 8"; highlight8.latitude = 44.86065486986204; highlight8.longitude = 3.283143652636841;
    await highlightsRepository.save(highlight8);
    const highlight9 = new Highlight();
    highlight9.name = "highlight 9"; highlight9.description = "highlight description 9"; highlight9.latitude = 41.179402375391156; highlight9.longitude = -8.622315759743362;
    await highlightsRepository.save(highlight9);
    const highlight10 = new Highlight();
    highlight10.name = "highlight 10"; highlight10.description = "highlight description 10"; highlight10.latitude = 47.918414283565134; highlight10.longitude = 3.5989762965955765;
    await highlightsRepository.save(highlight10);

    var route = new Route();
    route.name = "Route 1"; route.description = "Route description 1"; route.start = "start1"; route.end = "end1"; route.highlights = [highlight1, highlight3];
    await routesRepository.save(route);
    route = new Route();
    route.name = "Route 2"; route.description = "Route description 2"; route.start = "start2"; route.end = "end2"; route.highlights = [highlight2, highlight10];
    await routesRepository.save(route);
    route = new Route();
    route.name = "Route 3"; route.description = "Route description 3"; route.start = "start2"; route.end = "end2"; route.highlights = [highlight2, highlight8, highlight6];
    await routesRepository.save(route);
    route = new Route();
    route.name = "Route 4"; route.description = "Route description 4"; route.start = "start1"; route.end = "end1"; route.highlights = [highlight3, highlight5];
    await routesRepository.save(route);
    route = new Route();
    route.name = "Route 5"; route.description = "Route description 5"; route.start = "start3"; route.end = "end3"; route.highlights = [highlight4, highlight7, highlight9];
    await routesRepository.save(route);

    console.log("Database ready");

}).catch(error => console.log(error))

// Express server
const app : express.Application = express();
const port: number = 3000;


// Add logger middleware
app.use(logger('dev'));

// Parse incoming request
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Enable all CORS request
app.use(cors());

// Add routes
app.get("/", (req: Request, resp: Response) => {
    resp.json({'message': 'Hi there fellow traveller!'});
  })
app.use('/api/routes', routesRouter);
app.use('/api/highlights', highlightsRouter);

/* Error handler middleware */
app.use((err: any, req: Request, resp: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    resp.status(statusCode).json({'message': err.message});
    
    return;
  });

app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });
