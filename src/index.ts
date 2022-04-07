import server from "./server";

(async () => {
    await server.db();
    server.start();
}
)();