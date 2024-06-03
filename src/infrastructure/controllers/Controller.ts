import {Context, TypedResponse} from "hono";
import {StatusCode} from "hono/dist/types/utils/http-status";

export interface IResponse {
    message: string
}

export interface Controller {
    run(c: Context): Promise<Response & TypedResponse<IResponse, StatusCode, "json">>
}