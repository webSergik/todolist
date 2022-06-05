import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const todoSchema = new Schema({
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User',
	},
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	completed: {
		type: Boolean,
		default: false,
	},
	expires_date: {
		type: Date,
		default: null,
	},
	tags: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Tag',
		},
	],
	priority: {
		type: String,
		enum: ['high', 'medium', 'low'],
		default: 'medium',
	},
});

export default mongoose.model('Todo', todoSchema);
