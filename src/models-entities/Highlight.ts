import { Entity, PrimaryGeneratedColumn, Column, ManyToMany} from "typeorm"
import { Route } from "./Route"

@Entity()
export class Highlight {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column("text")
    description: string

    @Column("float")
    latitude: number

    @Column("float")
    longitude: number

    @ManyToMany(() => Route, (route) => route.highlights)
    routes: Route[];
}
