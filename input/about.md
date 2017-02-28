Title: About Condenser
---
API Condenser / Reverse Proxy using Kestrel and Consul, Including light weight consul lib

The solution is really three major components

1. Consul Client Libraries including service registry, discovery and configuration
2. A reverse proxy that finds your services using consul to discover the services to route to
3. An interactive UI to see the statistics and information about the proxy as well as manage consul

