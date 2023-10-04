export interface User {
	id?: string;
	firstName: string | null;
	lastName: string | null;
	username: string;
	email: string;
	phone: string | null;
	profileImage: string;
}
