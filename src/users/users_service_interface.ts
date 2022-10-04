import { UserLoginDto } from './dto/user_login_dto';
import { UserRegisterDto } from './dto/user_register_dto';
import { User } from './user_entity';

export interface IUserService {
	createUser: (dto: UserRegisterDto) => Promise<User | null>;
	validateUser: (dto: UserLoginDto) => Promise<boolean>;
}
