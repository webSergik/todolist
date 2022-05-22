import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const tokenSchema = new Schema({
	userId: { type: Schema.Types.ObjectId, ref: 'User' },
	refreshToken: { type: String, required: true },
});

export default mongoose.model('Token', tokenSchema);
