import { Apollo, ApolloModule } from "apollo-angular";
import { HttpLink } from "apollo-angular/http";
import { APP_INITIALIZER, NgModule } from "@angular/core";

import { GraphQLService } from "./graphql.service";
import { HttpClientModule } from "@angular/common/http";
import { AuthenticationService } from "@services/authentication.service";

export function createApollo(
	httpLink: HttpLink,
	graphQLService: GraphQLService,
	authService: AuthenticationService,
	apollo: Apollo
) {
	return () => graphQLService.createApolloClientOptions(httpLink, apollo);
}

@NgModule({
	exports: [HttpClientModule],
	providers: [
		Apollo,
		{
			provide: APP_INITIALIZER,
			useFactory: createApollo,
			deps: [HttpLink, GraphQLService, Apollo, AuthenticationService],
			multi: true,
		},
	],
})
export class GraphQLModule {}
