export interface User {
	id?: string;
	firstName: string | null;
	lastName: string | null;
	username: string;
	email: string;
	phone: string | null;
	profileImage: string;
	creditCards?: CreditCard[];
}

export interface CreditCard {
	id?: string;
	cardNumber: string | null;
	expirationDate: string | null;
	cvv: string | null;
	firstName: string | null;
	lastName: string | null;
	company?: string;
	default?: boolean;
}
