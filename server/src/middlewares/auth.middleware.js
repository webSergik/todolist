import { APIError } from '../errors/api.errors.js';
import * as tokenService from '../components/token/token.service.js';

export default function (req, res, next) {
	try {
		const accessToken = req.headers.authorization.split(' ')[1];
		if (!accessToken) {
			return next(APIError.UnathorizedError());
		}
		const userData = tokenService.validateAccessToken(accessToken);
		if (!userData) {
			return next(APIError.UnathorizedError());
		}
		req.user = userData;
		next();
	} catch (e) {
		return next(APIError.UnathorizedError());
	}
}
