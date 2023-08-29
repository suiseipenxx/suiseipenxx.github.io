import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    userName: string

    @Column()
    password: string

    @Column()
    number: number

}

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    menuName: string

    @Column()
    number: number

    @Column()
    cost:   number
}