import { Injectable } from "@angular/core";
import { CreditCard, User } from "@models/user.interface";
import { Apollo } from "apollo-angular";

import {
	ADD_CREDIT_CARD,
	GET_CREDIT_CARDS,
	PROFILE_QUERY,
	UPDATE_PROFILE,
} from "src/app/graphql/users.graphql";
import { LoaderService } from "./loader.service";
import { BehaviorSubject, finalize, tap } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class UserService {
	public user$ = new BehaviorSubject<User | null | undefined>(null);

	constructor(private apollo: Apollo, private loaderService: LoaderService) {}

	public getSubscribeProfile() {
		return this.apollo
			.watchQuery<User>({
				query: PROFILE_QUERY,
			})
			.valueChanges.pipe(
				tap((response) => {
					this.user$.next(response.data);
				})
			);
	}

	public getProfile() {
		return this.apollo
			.query<User>({
				query: PROFILE_QUERY,
			})
			.pipe(
				tap((response) => {
					this.user$.next(response?.data);
				})
			);
	}

	public updateProfile(user: User) {
		this.loaderService.present();
		return this.apollo
			.mutate<User>({
				mutation: UPDATE_PROFILE,
				variables: {
					firstName: user.firstName,
					lastName: user.lastName,
					phone: user.phone,
					profileImage: user.profileImage,
				},
			})
			.pipe(
				tap((response) => {
					this.user$.next(response.data);
				}),
				finalize(() => this.loaderService.dismiss())
			);
	}

	public getCreditCards() {
		this.loaderService.present();
		return this.apollo
			.query<CreditCard[]>({
				query: GET_CREDIT_CARDS,
			})
			.pipe(finalize(() => this.loaderService.dismiss()));
	}

	public addCreditCard(creditCard: CreditCard) {
		this.loaderService.present();
		return this.apollo
			.mutate<CreditCard>({
				mutation: ADD_CREDIT_CARD,
				variables: {
					...creditCard,
				},
			})
			.pipe(
				finalize(() => {
					this.loaderService.dismiss();
				})
			);
	}
}
