Description: How to register your service with the service registry.
---

## Example to configure Kestrel on a dynamic port

``` csharp
var host = new WebHostBuilder()
    .UseKestrel()
    .UseUrls($"http://*:{serviceManager.ServicePort}")
    .UseStartup<Startup>()
    .Build();

host.Run();
```

The first available port in the dynamic range for windows is allocated by default. You can override this if you have a specific port you would like to use.  

``` csharp
serviceManager.ServicePort = 5000;
```

You should assign this before registering or call RegisterServiceAsync() again if you change the details to send the new configuration to Consul.