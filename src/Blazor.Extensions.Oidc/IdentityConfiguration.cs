#define SIMPLE_JSON_DATACONTRACT

using System.Runtime.Serialization;

namespace Accolades.Blazor.Extensions.Oidc
{
    [DataContract]
    public class IdentityConfiguration
    {
        public string Authority { get; set; }

        [DataMember(Name = "client_id")]
        public string ClientId { get; set; }

        public string RedirectUri { get; set; }

        public string ResponseType { get; set; }

        public string Scope { get; set; }

        public string PostLogoutRedirectUri { get; set; }
    }
}
