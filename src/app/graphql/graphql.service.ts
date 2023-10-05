import { Injectable } from "@angular/core";
import { HttpLink } from "apollo-angular/http";
import { ApolloLink, InMemoryCache } from "@apollo/client/core";
import { TokenService } from "@services/token.service";
import { setContext } from "@apollo/client/link/context";

import { environment } from "@environments/environment";
import { Apollo } from "apollo-angular";

@Injectable({
	providedIn: "root",
})
export class GraphQLService {
	private readonly uri: string = environment.graphql_uri;

	constructor(private tokenService: TokenService) {}

	async createApolloClientOptions(httpLink: HttpLink, apollo: Apollo) {
		const token = await this.tokenService.getToken();

		const basic = setContext((operation, context) => ({
			headers: {
				Accept: "charset=utf-8",
			},
		}));

		const auth = setContext((operation, context) => {
			return token === null
				? {}
				: {
						headers: {
							Authorization: `Bearer ${token}`,
						},
				  };
		});

		const link = ApolloLink.from([
			basic,
			auth,
			httpLink.create({ uri: this.uri }),
		]);

		apollo.create({
			link,
			cache: new InMemoryCache(),
		});
	}
}
