import crypto from 'crypto';
import bcrypt from 'bcrypt';

import { APIError } from '../../errors/api.errors.js';
import * as tokenService from '../token/token.service.js';
import * as mailService from '../../common/mail.service.js';
import UserModel from '../user/user.model.js';
import { UserDto } from '../user/user.dto.js';

const createAuthResponse = async (user) => {
	const userDto = new UserDto(user);
	const tokens = tokenService.generateTokens({ ...userDto });
	await tokenService.saveToken(userDto.id, tokens.refreshToken);

	return { ...tokens, user: userDto };
};

export const createUser = async ({ email, password }) => {
	const candidate = await UserModel.findOne({ email });
	if (candidate) {
		throw APIError.BadRequest(`User already exist!`);
	}
	const hashPassword = await bcrypt.hash(
		password,
		Number(process.env.BCRYPT_SALT_ROUNDS)
	);

	const activationLink = crypto.randomUUID();
	//TODO Может все же ActivationCode вида {code: "12345", expires_in: "дата протухания коды активации"}

	const user = await UserModel.create({
		email,
		password: hashPassword,
		activationLink,
	});

	await mailService.sendActivationMail(
		email,
		`${process.env.API_URL}/v1/auth/activate/${activationLink}`
	);

	return createAuthResponse(user);
};

export const loginUser = async ({ email, password }) => {
	const user = await UserModel.findOne({ email });
	if (!user) {
		throw APIError.BadRequest(`User with this email address not found!`);
	}
	const isValidPass = await bcrypt.compare(password, user.password);
	if (!isValidPass) {
		throw APIError.BadRequest(`Password is invalid!`);
	}

	return createAuthResponse(user);
};

export const userLogout = async (refreshToken) => {
	const token = tokenService.removeToken(refreshToken);
	return token;
};

export const refresh = async (refreshToken) => {
	if (!refreshToken) {
		throw APIError.UnathorizedError();
	}
	console.log('refresh', refreshToken);
	const userData = tokenService.validateRefreshToken(refreshToken);
	const tokenFromDb = await tokenService.findToken(refreshToken);

	if (!userData || !tokenFromDb) {
		throw APIError.UnathorizedError();
	}
	const user = await UserModel.findById(userData.id);
	return createAuthResponse(user);
};

export const activateUser = async (activationLink) => {
	const user = await UserModel.findOne({ activationLink });
	if (!user) {
		throw APIError.BadRequest('Invalid activation link!');
	}
	user.isActivated = true;
	await user.save();
};
