import { Hono } from 'hono';
import {glob} from 'glob';
import path from 'path';

export function registerRoutes(app: Hono): void {
    const routes = glob.sync(`${__dirname}/**/*.route.*`);
    routes.map(route => register(route, app));
}

function register(routePath: string, app: Hono) {
    const absolutePath = path.resolve(routePath);
    const { register } = require(absolutePath) as { register: (app: Hono) => void };
    register(app);
}
