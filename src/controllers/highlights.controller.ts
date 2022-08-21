import { NextFunction, Request, Response } from "express";
import * as highlightsService from "../services/highlights.service";
import { stringIsNumber } from "../utils/validationHelper";

export async function getHighlights(req: Request, resp: Response, next: NextFunction) {
    try {
        resp.json(await highlightsService.getHighlights());
    } catch (error) {
        next(error);
    }
}

export async function getHighlightsByOriginDestination(req: Request, resp: Response, next: NextFunction) {
    try {
        const start: string = req.params.start;
        const end: string = req.params.end;

        resp.json(await highlightsService.getHighlightsByOriginDestination(start, end));
    } catch (error) {
        next(error);
    }
}

export async function getCloserHighlight(req: Request, resp: Response, next: NextFunction) {
    try {
        const latitude: string = req.params.latitude;
        const longitude: string = req.params.longitude;

        if(!stringIsNumber(latitude) || !stringIsNumber(longitude))
            throw new Error("Invalid coordinates format");

        resp.json(await highlightsService.getCloserHighlight(Number(latitude), Number(longitude)));
    } catch (error) {
        next(error);
    }
}
