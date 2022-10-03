import { Request, Response, NextFunction } from "express";
import { inject, injectable } from "inversify";
import { BaseController } from "../common/base_controller";
import { HTTPError } from "../errors/http_error";
import { ILogger } from "../logger/logger_interface";
import { TYPES } from "../types";
import 'reflect-metadata';

@injectable()
export class UserController extends BaseController {
    constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
        super(loggerService);
        this.bindRoutes([
            { path: '/register', method: 'post', func: this.register },
            { path: '/login', method: 'post', func: this.login }
        ])
    }

    login(req: Request, res: Response, next: NextFunction) {
        return next(new HTTPError(401, 'Autorization Error', 'login'));
    }

    register(req: Request, res: Response, next: NextFunction) {
        this.ok(res, 'register');
    }
}