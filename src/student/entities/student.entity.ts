import { Class } from "src/class/entities/class.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    Id: number

    @Column()
    Name: string

    @Column()
    Age: number

    @Column()
    Science: number

    @Column()
    Math: number

    @Column()
    Comp_Science: number

    @ManyToMany(() => Class)
    @JoinTable({ name: "Class"})
    public Class:Class[]
  
}
