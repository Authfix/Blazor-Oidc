import { BlazorType } from "./BlazorTypes";
import * as Oidc from "oidc-client";
import { UserManagerSettings } from "oidc-client";

export class BlazorUserManager {

    public static initialize() {
        const Blazor: BlazorType = window["Blazor"];

        Blazor.registerFunction('Accolades.Blazor.Extensions.Oidc.Init', (configuration: any) => {

            var localConfiguration: UserManagerSettings =
            {
                authority: configuration.authority,
                client_id: configuration.clientId,
                redirect_uri: configuration.redirectUri,
                response_type: configuration.responseType,
                scope: configuration.scope,
                post_logout_redirect_uri: configuration.postLogoutRedirectUri
            }

            window["BlazorExtensions"].UserManager = new Oidc.UserManager(localConfiguration);
        });

        Blazor.registerFunction('Accolades.Blazor.Extensions.Oidc.GetUser', () => {
            return window["BlazorExtensions"].UserManager.getUser();
        });

        Blazor.registerFunction('Accolades.Blazor.Extensions.Oidc.SignIn', () => {
            return window["BlazorExtensions"].UserManager.signinRedirect();
        });

        Blazor.registerFunction('Accolades.Blazor.Extensions.Oidc.SignInRedirectCallback', () => {
            return window["BlazorExtensions"].UserManager.signinRedirectCallback();
        });
    }

}