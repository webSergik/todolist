import { APIError } from '../errors/api.errors.js';

// eslint-disable-next-line no-unused-vars
export const errorsMiddleware = (err, req, res, next) => {
	if (err instanceof APIError) {
		return res
			.status(err.status)
			.json({ message: err.message, errors: err.errors });
	}
	return res.status(500).json({ message: 'Something went wrong' });
};
