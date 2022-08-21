import { HighlightDTO } from "../dtos/response/highlight.dto";
import { Highlight } from "../models-entities/Highlight";

export class EntityToDTO {

    public static highlightToDTO(highlight: Highlight) : HighlightDTO {
        const highlightDTO: HighlightDTO = new HighlightDTO;
        highlightDTO.id             = highlight.id;
        highlightDTO.name           = highlight.name;
        highlightDTO.description    = highlight.description;
        highlightDTO.latitude       = highlight.latitude;
        highlightDTO.longitude      = highlight.longitude;

        return highlightDTO;
    }
}
