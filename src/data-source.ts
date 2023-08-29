import "reflect-metadata"
import { DataSource } from "typeorm"
import { Order,User } from "./entity/User"

export const UserDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})

export const OrderDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [Order],
    migrations: [],
    subscribers: [],
})