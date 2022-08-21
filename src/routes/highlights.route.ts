import * as express from "express";
import * as highlightsController from "../controllers/highlights.controller";

export const highlightsRouter = express.Router();

/* GET all Highlights. */
highlightsRouter.get('/', highlightsController.getHighlights);

/* GET Highlights by origin and destination points. */
highlightsRouter.get('/:start/:end', highlightsController.getHighlightsByOriginDestination);

/* GET Highlight closer to given location. */
highlightsRouter.get('/closer/:latitude/:longitude', highlightsController.getCloserHighlight);
