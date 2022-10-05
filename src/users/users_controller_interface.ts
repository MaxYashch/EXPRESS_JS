import { Request, Response, NextFunction } from 'express';

export interface IUserController {
	[x: string]: RequestHandler<{}, any, any, ParsedQs, Record<string, any>>;
	login: (req: Request, res: Response, next: NextFunction) => void;
	register: (req: Request, res: Response, next: NextFunction) => void;
}
