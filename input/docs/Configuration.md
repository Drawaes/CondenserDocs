Description: How to load config into a simple dictionary.
---

## Example for configuration

Configuration follows a LIFO policy, in that the last configuration item registered will "win" and override the same keys from a previous registration. Both static and dynamic registrations will override each other. To access values you call

``` csharp
var configValue = serviceManager.Config["MyKey"];
```
If the key doesn't exist it will throw an exception. You can access it with the normal tryget pattern as well
``` csharp
string configValue;
if(serviceManager.Config.TryGetValue("MyKey", out configValue))
{
	//do something with the key
}
```

### Static configuration

To register a static set of keys you call the following
``` csharp
var result = await ServiceManager.Config.AddStaticKeyPathAsync("my/keys/path");
```
result will be false if the key bucket or key was not found otherwise it will return true and add all of the child keys recursively. Keys will be in the format keyPath:keyPath:Key in the config after that to comply with the ASP.Net configuration. It will not include the path prefix that you used in adding the configuraiton (in this case "my/key/path")

### Dynamic configuration

You can register a key path for dynamic configuration. This will watch consul for any changes in a a callback fashion. It uses async long polling so it should react instantly and without causing undue network traffic or system load.
Below is how you register a key space that you want the library to watch until disposal.

``` csharp
var manager = new ServiceManager("TestService");
    await manager.Config.AddUpdatingPathAsync("org/test5/");
```

You can also register a callback to alert you if a specific key is updated or if any key in the config is updated. The any key might be triggered even if there is no actual effective update (due to an override) so applications will need to check if their information has actually been updated.
The single key watch will check for an actual update and only return if that key has changed.

``` csharp
var singleCallBack = manager.Config.AddWatchOnSingleKey("test1", () => Console.Writeline("Key Changed!");
```

If you want any update to trigger your callback just do

``` csharp
var multipleCallBack = manager.Config.AddWatchOnEntireConfig(
    () => Console.Writeline("Some key changed, or multiple keys changed, or maybe none?");
```