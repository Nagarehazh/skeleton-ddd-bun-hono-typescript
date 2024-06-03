import {Context, TypedResponse} from "hono";
import httpStatus from "http-status"
import {StatusCode} from "hono/dist/types/utils/http-status";

import {Controller, IResponse} from "./Controller";
import {injectable} from "inversify";

@injectable()
export default class HealthCheckController implements Controller {
    async run(c: Context<any, any, {}>): Promise<Response & TypedResponse<IResponse, StatusCode, "json">> {
        return c.json({ message: "ok" }, httpStatus.OK ) }
}