using Microsoft.AspNetCore.Blazor.Browser.Interop;
using System.Threading.Tasks;

namespace Authfix.Blazor.Extensions.Oidc
{
    public class UserManager
    {
        public UserManager(IdentityConfiguration identityConfiguration)
        {
            RegisteredFunction.Invoke<object>("Authfix.Blazor.Extensions.Oidc.Init", identityConfiguration);
        }

        public Task<IdentityUser> GetUser()
        {
            return RegisteredFunction.InvokeAsync<IdentityUser>("Authfix.Blazor.Extensions.Oidc.GetUser");
        }

        public Task SignIn()
        {
            return RegisteredFunction.InvokeAsync<object>("Authfix.Blazor.Extensions.Oidc.SignIn");
        }

        public Task SignInRedirectCallback()
        {
            return RegisteredFunction.InvokeAsync<object>("Authfix.Blazor.Extensions.Oidc.SignInRedirectCallback");
        }
    }
}
