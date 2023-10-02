export interface SignUpModel {
	firstName: string | null;
	lastName: string | null;
	username: string | null;
	email: string | null;
	password: string | null;
}

export interface RecoverPasswordModel {
	code: string | null;
	username: string | null;
	password: string | null;
}
