import { UserModel } from '@prisma/client';
import { User } from './user_entity';

export interface IUsersRepository {
	create: (user: User) => Promise<UserModel>;
	find: (email: string) => Promise<UserModel | null>;
}
