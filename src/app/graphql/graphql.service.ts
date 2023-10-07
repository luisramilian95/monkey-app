import { Injectable } from "@angular/core";
import { HttpLink } from "apollo-angular/http";
import { ApolloLink, InMemoryCache } from "@apollo/client/core";
import { TokenService } from "@services/token.service";
import { setContext } from "@apollo/client/link/context";

import { environment } from "@environments/environment";
import { Apollo } from "apollo-angular";
import { onError } from "@apollo/client/link/error";
import { AuthenticationService } from "@services/authentication.service";
@Injectable({
	providedIn: "root",
})
export class GraphQLService {
	private readonly uri: string = environment.graphql_uri;

	constructor(
		private tokenService: TokenService,
		private authService: AuthenticationService
	) {}

	async createApolloClientOptions(httpLink: HttpLink, apollo: Apollo) {
		const auth = setContext(async (operation, context) => {
			const token = await this.tokenService.getToken();

			return token == null
				? {}
				: {
						headers: {
							Authorization: `Bearer ${token}`,
						},
				  };
		});

		const linkError = onError(
			({ forward, graphQLErrors, networkError, operation }) => {
				console.log(networkError);

				const error = { ...networkError };
				console.log(error);

				if (networkError) {
					let error: any = JSON.parse(JSON.stringify(networkError));
					if (error.status === 401) {
						this.authService.refreshToken().subscribe(() => {
							return forward(operation);
						});
					}
				}

				if (graphQLErrors) {
					graphQLErrors.map(({ message, locations, path }) => {
						console.log(graphQLErrors);
						if (message.toLowerCase() === "unauthorized") {
							this.authService.refreshToken().subscribe(() => {
								return forward(operation);
							});
						}
					});
				}
			}
		);

		const link = ApolloLink.from([
			auth,
			httpLink.create({ uri: this.uri }),
		]);

		apollo.create({
			link: linkError.concat(link),
			cache: new InMemoryCache(),
		});
	}
}
