import { Injectable } from "@angular/core";
import { User } from "@models/user.interface";
import { Apollo } from "apollo-angular";
import {
	PROFILE_QUERY,
	UPDATE_PROFILE,
} from "src/app/graphql/users/users.graphql";

@Injectable({
	providedIn: "root",
})
export class UserService {
	constructor(private apollo: Apollo) {}

	public getSubscribeProfile() {
		return this.apollo.watchQuery<User>({
			query: PROFILE_QUERY,
		}).valueChanges;
	}

	public getProfile() {
		return this.apollo.query<User>({
			query: PROFILE_QUERY,
		});
	}

	public updateProfile(user: User) {
		return this.apollo.mutate<User>({
			mutation: UPDATE_PROFILE,
			variables: {
				firstName: user.firstName,
				lastName: user.lastName,
				phone: user.phone,
				profileImage: user.profileImage,
			},
		});
	}
}
