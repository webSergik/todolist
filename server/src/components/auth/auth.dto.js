export class AuthDto {
	constructor(model) {
		this.accessToken = model.accessToken;
		this.user = {
			email: model.user.email,
			id: model.user.id,
			isActivated: model.user.isActivated,
		};
	}
}
