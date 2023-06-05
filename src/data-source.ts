import "reflect-metadata"
import { DataSource } from "typeorm"
import { Product } from "./entities/Product"
import { dbConfig } from "./config/database";

export const AppDataSource = new DataSource({
    ...dbConfig,
    type: "mysql",
    synchronize: false,
    logging: false,
    entities: [Product],
    migrations: [],
    subscribers: [],
})
