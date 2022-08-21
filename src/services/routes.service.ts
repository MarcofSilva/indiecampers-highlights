import { AppDataSource } from "../data-source";
import { Route } from "../models-entities/Route";

const routesRepository = AppDataSource.getRepository(Route);

/**
 * 
 * @returns All Routes
 */
export async function getRoutes() {
    return await routesRepository.find({
        relations: {
            highlights: true,
        }
    });
}

/**
 * 
 * @param start Origin point
 * @param end Destination point
 * @returns Routes starting and ending on the specified points
 */
export async function getRoutesByOriginDestination(start: string, end: string) {
    return await routesRepository.find({
        where: {
            start: start,
            end: end
        },
        relations: {
            highlights: true,
        }
    });
}