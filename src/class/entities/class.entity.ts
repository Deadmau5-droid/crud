import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Class {
    @PrimaryGeneratedColumn()
    Id: number

    @Column()
    Name:string
}
