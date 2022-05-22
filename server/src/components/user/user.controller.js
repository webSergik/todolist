import * as userService from './user.service.js';

async function getUserInfo(req, res, next) {
	try {
		const userData = await userService.getUserInfo(req.user.email);
		return res.status(200).json(userData);
	} catch (e) {
		next(e);
	}
}

export { getUserInfo };
