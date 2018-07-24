using Microsoft.AspNetCore.Blazor.Browser.Interop;
using System.Threading.Tasks;

namespace Accolades.Blazor.Extensions.Oidc
{
    public class UserManager
    {
        public UserManager(IdentityConfiguration identityConfiguration)
        {
            RegisteredFunction.Invoke<object>("Accolades.Blazor.Extensions.Oidc.Init", identityConfiguration);
        }

        public Task<IdentityUser> GetUser()
        {
            return RegisteredFunction.InvokeAsync<IdentityUser>("Accolades.Blazor.Extensions.Oidc.GetUser");
        }

        public Task SignIn()
        {
            return RegisteredFunction.InvokeAsync<object>("Accolades.Blazor.Extensions.Oidc.SignIn");
        }

        public Task SignInRedirectCallback()
        {
            return RegisteredFunction.InvokeAsync<object>("Accolades.Blazor.Extensions.Oidc.SignInRedirectCallback");
        }
    }
}
