import "reflect-metadata"
import { DataSource } from "typeorm"
import { Route } from "./models-entities/Route"
import { Highlight } from "./models-entities/Highlight"
import { root } from "./utils/paths"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: `${root}/data/routesDB.sqlite`,
    //synchronize: true,
    logging: false,
    entities: [Route, Highlight],
})
