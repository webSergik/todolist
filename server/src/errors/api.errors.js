export class APIError extends Error {
	status;
	errors;

	constructor(status, message, errors) {
		super(message);
		this.status = status;
		this.errors = errors;
	}

	static BadRequest(message, errors = []) {
		return new APIError(400, message, errors);
	}

	static UnathorizedError() {
		return new APIError(401, 'User not authorized');
	}
}
