Description: How to get an instance of a service and call it.
---

## Example to get an instance of a service to connect to

The following gets an instance of a service to call. If you recall the method you will get randomly rotated around the instances and they will be updated in the background based on the health changing

``` csharp
var serviceInstance = await manager.Services.GetServiceInstanceAsync("ServiceLookup");
if(serviceInsance == null)
{
	//you need to handle no service instance available
}
//connect to service via your method
var serverUrl = $"http://{serviceInstance.Address}:{serviceInsance.Port}";

serviceInstance2 = await manager.Services.GetServiceInstanceAsync("ServiceLookup");
```

