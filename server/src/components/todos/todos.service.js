import TodoModel from './todos.model.js';

export const create = async (body, owner) => {
	const todo = await TodoModel.create({ ...body, owner });
	return todo;
};
