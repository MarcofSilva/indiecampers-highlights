import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm"
import { Highlight } from "./Highlight"

@Entity()
export class Route {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column("text")
    description: string

    @Column()
    start: string

    @Column()
    end: string

    @ManyToMany(() => Highlight, (highlight) => highlight.routes)
    @JoinTable()
    highlights: Highlight[];
}
