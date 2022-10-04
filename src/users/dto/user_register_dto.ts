import { IsEmail, IsString } from 'class-validator';

export class UserRegisterDto {
	@IsEmail({}, { message: 'Wrong email' })
	email: string;

	@IsString({ message: 'Check password' })
	password: string;

	@IsString({ message: 'Check name' })
	name: string;
}
