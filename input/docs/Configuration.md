Description: How to load config into a simple dictionary.
---

## Example for configuration

Configuration follows a LIFO policy, in that the last configuration item registered will "win" and override the same keys from a previous registration. Both static and dynamic registrations will override each other. To access values you call

``` csharp
var configValue = configRegistry["MyKey"];
```
If the key doesn't exist it will throw an exception. You can access it with the normal tryget pattern as well
``` csharp
if(configRegistry.TryGetValue("MyKey", out string configValue))
{
	//do something with the key
}
```

Keys are flattened in the same pattern that ASP.NET Core uses such that

``` json
{
    "Parent":
    {
        "ChildKey" : "Value"
    }
}
```

Can be accessed by

``` csharp
var configValue = configRegistry["Parent:ChildKey"];
```

### Static configuration

To register a static set of keys you call the following
``` csharp
var result = await configRegistry.AddStaticKeyPathAsync("my/keys/path");
```
result will be false if the key bucket or key was not found otherwise it will return true and add all of the child keys recursively. Keys will be in the format keyPath:keyPath:Key in the config after that to comply with the ASP.Net configuration. It will not include the path prefix that you used in adding the configuraiton (in this case "my/key/path")

### Dynamic configuration

You can register a key path for dynamic configuration. This will watch consul for any changes in a a callback fashion. It uses async long polling so it should react instantly and without causing undue network traffic or system load.
Below is how you register a key space that you want the library to watch until disposal.

``` csharp
var registry = new ConsulRegistry();
    await registry.AddUpdatingPathAsync("org/test5/");
```

You can also register a callback to alert you if a specific key is updated or if any key in the config is updated. The any key might be triggered even if there is no actual effective update (due to an override) so applications will need to check if their information has actually been updated.
The single key watch will check for an actual update and only return if that key has changed.

``` csharp
var singleCallBack = registry.AddWatchOnSingleKey("test1", () => Console.Writeline("Key Changed!");
```

If you want any update to trigger your callback just do

``` csharp
var multipleCallBack = registry.AddWatchOnEntireConfig(
    () => Console.Writeline("Some key changed, or multiple keys changed, or maybe none?");
```