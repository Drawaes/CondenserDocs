Title: Catching up, from being a bit slack
Published: 2017-08-12
Category: Communications
Author: Tim Seaward
---

I haven't blogged about releases in a while. For that I am sorry, there have been releases on going, including patches and more features like maintaince mode, de-registration and many more that I have forgotten. There are release notes for them all. 


I have improved the testing coverage of the things that are important a lot and have been working with some people using it in large environments to iron out some bugs. But now things are looking good. I have some plans, minor enhancements that I have added issues for but the reverse proxy is where there will be a lot of focus coming.


If anyone wants to dig in and help that would be awesome, any area is welcome but especially these

1. Another provider other than consul, zookeeper or redis? This will help prove out and find now issues around abstracting the provider
1. General help on the reverse proxy, I plan to change to doing this with ASP.NET Core 2.0 and then quickly moving to the abstractions they are building out there. 
1. A json comparison engine for Swagger docs for doing API change validation and rules.


Anyway keep hanging around, bring the bug reports, and PR's are always welcome.


Cheers

Tim