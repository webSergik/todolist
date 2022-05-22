import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
	firstName: { type: String, required: false },
	lastName: { type: String, required: false },
	email: { type: String, unique: true, required: true },
	password: { type: String, required: true },
	isActivated: { type: Boolean, default: false },
	acivationLink: { type: String },
});

export default mongoose.model('User', userSchema);
