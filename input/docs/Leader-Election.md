Description: Leader Election and the Global Mutex.
---

### Leader Election

You can participate in leader election using the consul sessions. You simply ask for a LeaderWatcher based on a predefined key for your application.

``` csharp
var watcher1 = manager.Leaders.GetLeaderWatcher(leadershipKey);
```

You can then await on this object until a leader is elected and it will return when someone is elected and tell you who it is.

``` csharp
var leader = await watcher1.GetCurrentLeaderAsync();
```

If you would like to get the leadership you can do so, the GetLeadershipAsync will return once you have become leader. You can call this over and over to ensure that you haven't lost the leadership
``` csharp
while(true)
{
  await watcher1.GetLeadershipAsync();
  //Do some work that only the leader should do
  //then loop back to do the next bit of work
  //but check that we are still the leader
}
```