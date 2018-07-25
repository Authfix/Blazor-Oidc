import { BlazorType } from "./BlazorTypes";
import * as Oidc from "oidc-client";
import { UserManagerSettings } from "oidc-client";

export class BlazorUserManager {

    public static initialize() {
        const Blazor: BlazorType = window["Blazor"];

        Blazor.registerFunction('Authfix.Blazor.Extensions.Oidc.Init', (configuration: any) => {

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

        Blazor.registerFunction('Authfix.Blazor.Extensions.Oidc.ClearStaleState', () => {
            return window["BlazorExtensions"].UserManager.clearStaleState();
        });

        Blazor.registerFunction('Authfix.Blazor.Extensions.Oidc.GetUser', () => {
            return window["BlazorExtensions"].UserManager.getUser();
        });

        Blazor.registerFunction('Authfix.Blazor.Extensions.Oidc.StoreUser', (userToStore: Oidc.User) => {
            return window["BlazorExtensions"].UserManager.storeUser(userToStore);
        });

        Blazor.registerFunction('Authfix.Blazor.Extensions.Oidc.RemoveUser', () => {
            return window["BlazorExtensions"].UserManager.removeUser();
        });

        Blazor.registerFunction('Authfix.Blazor.Extensions.Oidc.SignInPopup', (args?: any) => {
            return window["BlazorExtensions"].UserManager.signinPopup(args);
        });

        Blazor.registerFunction('Authfix.Blazor.Extensions.Oidc.SignInPopupCallback', (url?: string) => {
            return window["BlazorExtensions"].UserManager.signinPopupCallback(url);
        });

        Blazor.registerFunction('Authfix.Blazor.Extensions.Oidc.SignInSilent', (args?: any) => {
            return window["BlazorExtensions"].UserManager.signinSilent(args);
        });

        Blazor.registerFunction('Authfix.Blazor.Extensions.Oidc.SignInSilentCallback', (url?: string) => {
            return window["BlazorExtensions"].UserManager.signinSilentCallback(url);
        });

        Blazor.registerFunction('Authfix.Blazor.Extensions.Oidc.SignInRedirect', (args?: any) => {
            return window["BlazorExtensions"].UserManager.signinRedirect(args);
        });

        Blazor.registerFunction('Authfix.Blazor.Extensions.Oidc.SignInRedirectCallback', (url?: string) => {
            console.log("Url : " + url);
            return window["BlazorExtensions"].UserManager.signinRedirectCallback(url);
        });

        Blazor.registerFunction('Authfix.Blazor.Extensions.Oidc.SignOutPopup', (args?: any) => {
            return window["BlazorExtensions"].UserManager.signoutPopup(args);
        });

        Blazor.registerFunction('Authfix.Blazor.Extensions.Oidc.SignOutPopupCallback', (url?: string, keepOpen?: boolean) => {
            return window["BlazorExtensions"].UserManager.signoutPopupCallback(url, keepOpen);
        });

        Blazor.registerFunction('Authfix.Blazor.Extensions.Oidc.QuerySessionStatus', (args?: any) => {
            return window["BlazorExtensions"].UserManager.querySessionStatus(args);
        });

        Blazor.registerFunction('Authfix.Blazor.Extensions.Oidc.RevokeAccessToken', () => {
            return window["BlazorExtensions"].UserManager.revokeAccessToken();
        });

        Blazor.registerFunction('Authfix.Blazor.Extensions.Oidc.StartSilentRenew', () => {
            return window["BlazorExtensions"].UserManager.startSilentRenew();
        });

        Blazor.registerFunction('Authfix.Blazor.Extensions.Oidc.StopSilentRenew', () => {
            return window["BlazorExtensions"].UserManager.stopSilentRenew();
        });
    }

}