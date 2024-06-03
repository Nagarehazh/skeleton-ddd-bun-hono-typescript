import container from "../configs/dependency-injection/inversify";
import HealthCheckController from "../controllers/HealthCheckController";
import {TYPES} from "../configs/dependency-injection/types.inversify";
import {Hono} from "hono";

export const register = (app: Hono): void => {
    const healthCheckController = container.get<HealthCheckController>(TYPES.HealthCheckController);

    app.get('/health-check', (c) => healthCheckController.run(c))
}