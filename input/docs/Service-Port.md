Description: Service Ports.
---

When using dynamic services that have a central registry it is often desirable to have the service simply start on an 
available port rather than one fixed from configuration or code. 

To help you the library provides a simple method to get an available port.

## Example to configure Kestrel on a dynamic port

``` csharp
var host = new WebHostBuilder()
    .UseKestrel()
    .UseUrls($"http://*:{ServiceManagerOptions.GetNextAvailablePort()}")
    .UseStartup<Startup>()
    .Build();

host.Run();
```

*The port is not actually "Reserved" when you get it. However the Linux and Windows stack allocate the ports in a rotating list
so the port should not be reallocated unless you are starting and stopping thousands of socket listeners in a few minutes which
is unlikely.*