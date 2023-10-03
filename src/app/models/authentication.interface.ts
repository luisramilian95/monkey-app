export interface SignUpRequestModel {
	firstName: string | null;
	lastName: string | null;
	username: string | null;
	email: string | null;
	password: string | null;
}

export interface RecoverPasswordRequestModel {
	code: string | null;
	username: string | null;
	password: string | null;
}

export interface SignInResponseModel {
	accessToken: string;
	refreshToken: string;
	expiresIn: number;
}
