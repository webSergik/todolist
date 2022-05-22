import { APIError } from '../../errors/api.errors.js';
import { UserDto } from './user.dto.js';
import UserModel from './user.model.js';

export const getUserInfo = async (email) => {
	const user = await UserModel.findOne({ email });
	if (!user) {
		throw APIError.BadRequest(`User not found!`);
	} else {
		const userDto = new UserDto(user);
		return { user: userDto };
	}
};
