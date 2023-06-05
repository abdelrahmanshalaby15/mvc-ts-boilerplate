import { AppDataSource } from "../data-source";
import * as dotenv from "dotenv";
import * as express from "express"
import * as bodyParser from "body-parser";
// import controllers from "./controllers";
dotenv.config();
const app = express();
app.use(bodyParser.json());
AppDataSource.initialize().then(async () => {

    // console.log("Inserting a new user into the database...")
    // const user = new User()
    // user.firstName = "Timber"
    // user.lastName = "Saw"
    // user.age = 25
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)

    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(User)
    // console.log("Loaded users: ", users)

    // console.log("Here you can setup and run express / fastify / any other framework.")
    
    // controllers.map((controller, index) => app[controller.method](controller.path, controller.callback));

    app.get('/', (req, res) => {
        res.send('SERVER IS RUNNING').status(200);
    })
    app.use('/products')
    // app.listen(port, () => console.log(`server listening on port ${port}`))
}).catch(error => console.log("DB-ERR", error))