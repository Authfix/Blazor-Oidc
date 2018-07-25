namespace Authfix.Blazor.Extensions.Oidc
{
    public class IdentityUser
    {
        /// <summary>
        /// Gets or sets the identity user scope
        /// </summary>
        public string Scope { get; set; }

        /// <summary>
        /// Gets or sets the user access token
        /// </summary>
        public string Access_Token { get; set; }

        /// <summary>
        /// Gets or sets the user identifier token
        /// </summary>
        public string Id_Token { get; set; }

        /// <summary>
        /// Gets or sets the user token type
        /// </summary>
        public string Token_Type { get; set; }
    }
}
