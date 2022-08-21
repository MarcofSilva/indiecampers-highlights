import { NextFunction, Request, Response } from "express";
import * as routesService from "../services/routes.service";

export async function getRoutes(req: Request, resp: Response, next: NextFunction) {
    try {
        resp.json(await routesService.getRoutes());
    } catch (error) {
        next(error);
    }
}

export async function getRoutesByOriginDestination(req: Request, resp: Response, next: NextFunction) {
    try {
        const start: string = req.params.start;
        const end: string = req.params.end;

        resp.json(await routesService.getRoutesByOriginDestination(start, end));
    } catch (error) {
        next(error);
    }
}
