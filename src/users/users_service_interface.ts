import { UserLoginDto } from './dto/user_login_dto';
import { UserRegisterDto } from './dto/user_register_dto';
import { User } from './user_entity';
import { UserModel } from '@prisma/client';

export interface IUserService {
	createUser: (dto: UserRegisterDto) => Promise<UserModel | null>;
	validateUser: (dto: UserLoginDto) => Promise<boolean>;
}
