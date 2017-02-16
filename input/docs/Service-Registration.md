Description: Service Registration.
---

## Example use to register a service

``` csharp
var serviceManager = new ServiceManager("TestService");
    await serviceManager.AddHttpHealthCheck("health",10)
        .AddApiUrl("/api/someObject")
        .AddApiUrl("/api/someOtherObject")
        .RegisterServiceAsync();
```