[![Build status](https://ci.appveyor.com/api/projects/status/km14r54xibbhok8a?svg=true)](https://ci.appveyor.com/project/Authfix/blazor-oidc)
[![Package Version](https://img.shields.io/nuget/v/Authfix.Blazor.Extensions.Oidc.svg)](https://www.nuget.org/packages/Authfix.Blazor.Extensions.Oidc)

# Oidc Blazor Extensions Oidc

This package adds a [Oidc-client](https://github.com/IdentityModel/oidc-client-js) library for [Microsoft ASP.NET Blazor](https://github.com/aspnet/Blazor).

The package aims to add the possibility to use oidc-client javascript library inside a Blazor project by using Blazor's interop capabilities.

# Features

This package *does not* implements all public features of the oidc-client library.

> Note: Only basic authentication is available for now.

# Sample usage

The following snippet shows how to setup the oidc client and allow authentication.

On the page where we want to begin the authentication process

```c#
var config = new IdentityConfiguration
{
    Authority = "http://localhost:50000",
    ClientId = "js",
    PostLogoutRedirectUri = "http://localhost:50001/index.html",
    RedirectUri = "http://localhost:50001/callback",
    ResponseType = "id_token token",
    Scope = "openid profile api1"
};

var manager = new UserManager(config);
var user = await manager.GetUser();

if(user == null)
{
    await manager.SignIn();
}
else
{
    // do anything
}
```

And on the callback page

```c#
var manager = new UserManager(config);
await manager.SignInRedirectCallback();
```

# Contributions and feedback

Please feel free to use the component, open issues, fix bugs or provide feedback.

# Contributors

The following people are the maintainers of the project:

- [Thomas Bailly](https://github.com/authfix)