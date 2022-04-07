import { DB_URL, PORT } from "./config";

interface Config {
    db_uri: string;
    server_port: number;
}

const config: Config = {
    db_uri: DB_URL,
    server_port: PORT
}

export default config;