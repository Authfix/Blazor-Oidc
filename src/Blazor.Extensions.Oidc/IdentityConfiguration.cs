namespace Authfix.Blazor.Extensions.Oidc
{
    public class IdentityConfiguration
    {
        public string Authority { get; set; }

        public string ClientId { get; set; }

        public string RedirectUri { get; set; }

        public string ResponseType { get; set; }

        public string Scope { get; set; }

        public string PostLogoutRedirectUri { get; set; }
    }
}
