import jwt from 'jsonwebtoken';

import TokenModel from './token.model.js';

export const generateTokens = (payload) => {
	const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_TOKEN_SECRET, {
		expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN,
	});
	const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_TOKEN_SECRET, {
		expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN,
	});
	return {
		accessToken,
		refreshToken,
	};
};

// TODO может все же saveRefreshToken?
export const saveToken = async (userId, refreshToken) => {
	const tokenData = await TokenModel.findOne({ userId }); //TODO Токен только для одного устройства
	if (tokenData) {
		tokenData.refreshToken = refreshToken;
		return tokenData.save();
	} else {
		const token = await TokenModel.create({ userId, refreshToken });
		return token;
	}
};

// TODO может все же removeRefreshToken?
export const removeToken = async (refreshToken) => {
	const tokenData = await TokenModel.deleteOne({ refreshToken }); // TODO Надо глянуть что возвращает deleteOne
	return tokenData;
};

export const validateAccessToken = (token) => {
	try {
		const userData = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET);
		return userData;
	} catch (e) {
		return null;
	}
};

export const validateRefreshToken = (token) => {
	try {
		const userData = jwt.verify(token, process.env.JWT_REFRESH_TOKEN_SECRET);
		return userData;
	} catch (e) {
		return null;
	}
};
// TODO может все же findRefreshToken?
export const findToken = async (refreshToken) => {
	const tokenData = await TokenModel.findOne({ refreshToken });
	return tokenData;
};
