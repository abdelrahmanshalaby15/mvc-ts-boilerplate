import * as dotenv from "dotenv";

const envReady = dotenv.config()

if (!envReady) {
    throw "ENV file not found"
}
export const config = {
    port: process.env.PORT
}