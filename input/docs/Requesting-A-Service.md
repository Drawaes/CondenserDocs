Description: How to get an instance of a service and call it.
---

## Example to get an instance of a service to connect to

The following gets an instance of a service to call. If you recall the method you will get randomly rotated around the instances and they will be updated in the background based on the health changing

``` csharp
var serviceInstance = await serviceRegistry.GetServiceInstanceAsync("ServiceLookup");
if(serviceInsance == null)
{
	//you need to handle no service instance available
}
//connect to service via your method
var serverUrl = $"http://{serviceInstance.Address}:{serviceInsance.Port}";

//your method for calling servers
```

After your first request you will then have an auto updating list of live servers in the background. If at any point
Consul is failing the previous list will be kept which will allow you to maintain a list even if the registry goes down.

Subsequent calls to the GetServiceInstanceAsync method will return instantly and will return you an instance based on your
chosen routing method. The default routing method will randomly chose a service out of the available list

``` csharp
serviceInstance2 = await manager.Services.GetServiceInstanceAsync("ServiceLookup");
```

