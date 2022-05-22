// TODO сделать валидацию всех входных данных
export const signUp = {
	email: {
		errorMessage: 'Please enter a valid email address',
		isEmail: true,
		trim: true,
	},
	password: {
		errorMessage: 'Password should be at least 7 chars long',
		isLength: {
			options: { min: 7, max: 32 },
		},
	},
};
