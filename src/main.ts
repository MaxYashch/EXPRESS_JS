import { Container } from "inversify";
import { App } from "./app";
import { ExeptionFilter } from "./errors/exeption_filter";
import { LoggerService } from './logger/logger_service';
import { TYPES } from "./types";
import { UserController } from "./users/users_controller";
import { IExeptionFilter } from './errors/exeption_filter_interface';
import { ILogger } from "./logger/logger_interface";

const appContainer = new Container();
appContainer.bind<ILogger>(TYPES.ILogger).to(LoggerService);
appContainer.bind<IExeptionFilter>(TYPES.ExeptionFilter).to(ExeptionFilter);
appContainer.bind<UserController>(TYPES.UserController).to(UserController);
appContainer.bind<App>(TYPES.Application).to(App);

const app = appContainer.get<App>(TYPES.Application);
app.init();

export { app, appContainer };