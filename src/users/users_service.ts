import { inject, injectable } from 'inversify';
import { IConfigService } from '../config/config_service_interface';
import { TYPES } from '../types';
import { UserLoginDto } from './dto/user_login_dto';
import { UserRegisterDto } from './dto/user_register_dto';
import { IUserService } from './users_service_interface';
import { User } from './user_entity';

@injectable()
export class UserService implements IUserService {
	constructor(@inject(TYPES.ConfigService) private configService: IConfigService) {}
	async createUser({ email, name, password }: UserRegisterDto): Promise<User | null> {
		const newUser = new User(email, name);
		const salt = this.configService.get('SALT');
		await newUser.setPassword(password, Number(salt));
		return null;
	}

	async validateUser(dto: UserLoginDto): Promise<boolean> {
		return true;
	}
}
