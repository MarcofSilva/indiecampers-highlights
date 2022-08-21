import { AppDataSource } from "../data-source";
import { Highlight } from "../models-entities/Highlight";
import { EntityToDTO } from "../utils/entityToDTO";
import { distanceBetweenCoords } from "../utils/locationsHelper";

const highlightsRepository = AppDataSource.getRepository(Highlight);

/**
 * 
 * @returns all Highliths
 */
export async function getHighlights() {
    return await highlightsRepository.find();
}

/**
 *
 * @param start Starting point / Origin
 * @param end Ending Point /Origin
 * @returns Highlights belonging to routes for the given starting and ending points
 */
export async function getHighlightsByOriginDestination(start: string, end: string) {
    const highligths: Highlight[] = await highlightsRepository
    .createQueryBuilder("highlight")
    .leftJoinAndSelect("highlight.routes", "route")
    .where("route.start = :start", {start: start})
    .andWhere("route.end = :end", {end: end})
    .getMany();

    return highligths.map(EntityToDTO.highlightToDTO)
}

/**
 * 
 * @param latitude 
 * @param longitude 
 * @returns highlight closer to location represented by the latitude and longitude
 */
export async function getCloserHighlight(latitude: number, longitude: number) {
    const highlights: Highlight[] = await getHighlights();
    // Not a good idea to load all the highlights to memory, but fastest way to implement right now
    const highlightsDistances: number[] = highlights.map((highlight) => distanceBetweenCoords(latitude, longitude, highlight.latitude, highlight.longitude));
    
    var minInd = highlightsDistances.indexOf(Math.min(...highlightsDistances));
    return highlights[minInd];
}