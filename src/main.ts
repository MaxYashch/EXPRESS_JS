import { Container, ContainerModule, interfaces } from 'inversify';
import { App } from './app';
import { ExeptionFilter } from './errors/exeption_filter';
import { LoggerService } from './logger/logger_service';
import { TYPES } from './types';
import { UserController } from './users/users_controller';
import { IExeptionFilter } from './errors/exeption_filter_interface';
import { ILogger } from './logger/logger_interface';
import { IUserController } from './users/users_controller_interface';
import { IUserService } from './users/users_service_interface';
import { UserService } from './users/users_service';
import { ConfigService } from './config/config_service';
import { IConfigService } from './config/config_service_interface';
import { PrismaService } from './database/prisma_service';
import { UsersRepository } from './users/users_repository';
import { IUsersRepository } from './users/users_repository_interface';

export interface IBootstrapReturn {
	appContainer: Container;
	app: App;
}

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<ILogger>(TYPES.ILogger).to(LoggerService).inSingletonScope();
	bind<IExeptionFilter>(TYPES.ExeptionFilter).to(ExeptionFilter);
	bind<IUserService>(TYPES.UserService).to(UserService);
	bind<IUserController>(TYPES.UserController).to(UserController);
	bind<IConfigService>(TYPES.ConfigService).to(ConfigService).inSingletonScope();
	bind<PrismaService>(TYPES.PrismaService).to(PrismaService).inSingletonScope();
	bind<IUsersRepository>(TYPES.UsersRepository).to(UsersRepository).inSingletonScope();
	bind<App>(TYPES.Application).to(App);
});

function bootstrap(): IBootstrapReturn {
	const appContainer = new Container();
	appContainer.load(appBindings);
	const app = appContainer.get<App>(TYPES.Application);
	app.init();
	return { app, appContainer };
}

export const { app, appContainer } = bootstrap();
