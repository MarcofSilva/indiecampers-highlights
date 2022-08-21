import * as express from "express";
import * as routesController from "../controllers/routes.controller";

export const routesRouter = express.Router();

/* GET all Routes. */
routesRouter.get('/', routesController.getRoutes);

/* GET all Routes. */
routesRouter.get('/:start/:end', routesController.getRoutesByOriginDestination);
