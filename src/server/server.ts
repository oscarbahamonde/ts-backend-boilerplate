import config from "../config";
import express from "express";
import mongoose from "mongoose";

interface Server {
    app: express.Application;
    config: object;
    models: Array<mongoose.Model<mongoose.Document>>;
    db: () => void;
    start: () => void;
}

const App = express();
const Config = config;
const Models:Array<mongoose.Model<mongoose.Document>> = [];

const server: Server = {
    app: App,
    config: Config,
    models: Models,
    db: () => {
        try {
            mongoose.connect(Config.db_uri, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Connected to MongoDB");
                }
            }
            );
        } catch (err) {
            console.log(err);
        }
    },
    start: () => {
        App.set("port", Config.server_port);
        App.use(express.json());
        App.use(express.urlencoded({ extended: false }));

        App.listen(App.get("port") | Config.server_port | 8080, () => {
            console.log(`Server listening on http://localhost:${Config.server_port}`);
        }
        );
    }
}

export default server;