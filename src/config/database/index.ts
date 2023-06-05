import * as dotenv from "dotenv";

const dotenvFound = dotenv.config();

if (!dotenvFound) {
    throw (".env file not found");
}

export const dbConfig = {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
}