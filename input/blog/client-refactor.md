Title: Refactored the Client Libraries
Published: 2017-02-28
Category: Refactor
Author: Tim Seaward
---

There has been a pretty large refactor of the client libraries. As with any very early API it has taken some time using the library in the real
world to gain an understanding of what works and what doesn't. This has shown that the current API for registering your services required
a lot of boilerplate code. Also if you wanted to change a single setting it required you to set a lot of settings you would like to leave it as
the defaults.

We also realised that is was becoming difficult to test various parts of the system and when you only wanted to use a single part (say you 
wanted to find services but you didn't have a service to register yourself) you still required all of the parts.

Currently the new API is complete for the Registration/Discovery part however we won't be doing an official release yet as we have some work
to do on the configuration. When the release is done we will likely move the client to 2.0.

As a final part of the refactor we may move the API router out to a seperate repo and have it on its own path. This has yet to be confirmed.
Dean is also working on a SPA Gui to manage and view data and statistics from the API Router.