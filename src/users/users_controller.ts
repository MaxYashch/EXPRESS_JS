import { Request, Response, NextFunction } from 'express';
import { inject, injectable } from 'inversify';
import { BaseController } from '../common/base_controller';
import { HTTPError } from '../errors/http_error';
import { ILogger } from '../logger/logger_interface';
import { TYPES } from '../types';
import 'reflect-metadata';
import { IUserController } from './users_controller_interface';
import { UserLoginDto } from './dto/user_login_dto';
import { UserRegisterDto } from './dto/user_register_dto';

@injectable()
export class UserController extends BaseController implements IUserController {
	constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
		super(loggerService);
		this.bindRoutes([
			{ path: '/register', method: 'post', func: this.register },
			{ path: '/login', method: 'post', func: this.login },
		]);
	}

	login(req: Request<{}, {}, UserLoginDto>, res: Response, next: NextFunction): void {
		next(new HTTPError(401, 'Autorization Error', 'login'));
	}

	register(req: Request<{}, {}, UserRegisterDto>, res: Response, next: NextFunction): void {
		this.ok(res, 'register');
	}
}
