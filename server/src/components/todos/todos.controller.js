import * as todoService from './todos.service.js';

export const createTodo = async (req, res, next) => {
	try {
		const todo = await todoService.create(req.body, req.user.id);

		return res.status(201).json(todo);
	} catch (e) {
		next(e);
	}
};
