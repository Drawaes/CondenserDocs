Title: Patch 2.0.2
Published: 2017-03-06
Category: Patch
Author: Tim Seaward
---

The first issue is the stripping of trailing names from the executing assembly should now be fixed with ".Host", ".Library" and 
so on all removed by default. You can configure the suffixes you would like removed through the ServiceManagerConfig object.

Next the server is going through a decent refactor with the useful middleware being brought into a single package and the
middleware that contains experimental links (mostly to pipelines) being put into a seperate package for those that don't 
want to live on the bleeding edge.

Some benchmarking has been done on the experimental client and the overhead of calling out is about 1/2 of the current overhead
so I look forward to doing some more work around that and setting up a proper benchmark scripted environment to allow the results
to be published in a continuous way.

I am interested to hear your feedback, problems or feature requests so email me at seawardtim at gmail or file an issue and tell
me the good the bad or just what you would like.

P.S. Dean is making some progress on a new "status" viewer for the proxy, and I am working on a packaged server so
if you have features you think would be great or samples/use cases you want covered please do shout out we are taking requests.

Cheers

Tim