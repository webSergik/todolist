import { validationResult } from 'express-validator';

import * as authService from './auth.service.js';
import { APIError } from '../../errors/api.errors.js';
import { AuthDto } from './auth.dto.js';

const createCookieRefreshToken = (res, refreshToken) => {
	res.cookie('refreshToken', refreshToken, {
		maxAge: 30 * 24 * 60 * 60 * 1000,
		httpOnly: true,
	});
};

async function signUp(req, res, next) {
	try {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			throw APIError.BadRequest('Schema validation error', errors.array());
		}
		const authData = await authService.createUser(req.body);
		createCookieRefreshToken(res, authData.refreshToken);
		const authResponse = new AuthDto(authData);

		return res.status(201).json(authResponse);
	} catch (e) {
		next(e);
	}
}

async function signIn(req, res, next) {
	try {
		const authData = await authService.loginUser(req.body);
		createCookieRefreshToken(res, authData.refreshToken);
		const authResponse = new AuthDto(authData);

		return res.status(200).json(authResponse);
	} catch (e) {
		next(e);
	}
}

async function logout(req, res, next) {
	try {
		const { refreshToken } = req.cookies;
		const token = await authService.userLogout(refreshToken);
		res.clearCookie('refreshToken');
		return res.json(token); //TODO зачем токен возвращять? Может лучше 200 код?
	} catch (e) {
		next(e);
	}
}

async function activate(req, res, next) {
	try {
		const activationLink = req.params.link; // TODO может все же код?
		await authService.activateUser(activationLink);
		return res.redirect(process.env.CLIENT_URL);
	} catch (e) {
		next(e);
	}
}

async function refresh(req, res, next) {
	try {
		const { refreshToken } = req.cookies;
		const authData = await authService.refresh(refreshToken);
		console.log('refresh', authData);
		createCookieRefreshToken(res, authData.refreshToken);
		const authResponse = new AuthDto(authData);

		return res.json(authResponse);
	} catch (e) {
		next(e);
	}
}

export { signUp, signIn, logout, activate, refresh };
