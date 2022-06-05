import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const tagSchema = new Schema({
	name: {
		type: String,
		unique: true,
	},
});

export default mongoose.model('Tag', tagSchema);
