import "reflect-metadata";
import { Hono } from "hono";
import { logger } from "hono/logger"
import { cors } from "hono/cors"
import {registerRoutes} from "./infrastructure/routes";
import { enviroments } from "./utils/enviroments";
import {AppDataSource} from "./infrastructure/configs/database/db";

const app = new Hono().basePath("/v1")

AppDataSource.initialize()
    .then(() => {
        console.log('🎲Database connected')
    })
    .catch((error) => {
        console.log('Database connection error', error)
    });

app.use('*', logger())
app.use('/*', cors({
    origin: enviroments.ORIGIN_BASE_URL,
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization'],
    maxAge: 3600,
}));

registerRoutes(app);

export default app
