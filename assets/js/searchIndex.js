
var camelCaseTokenizer = function (obj) {
    var previous = '';
    return obj.toString().trim().split(/[\s\-]+|(?=[A-Z])/).reduce(function(acc, cur) {
        var current = cur.toLowerCase();
        if(acc.length === 0) {
            previous = current;
            return acc.concat(current);
        }
        previous = previous.concat(current);
        return acc.concat([current, previous]);
    }, []);
}
lunr.tokenizer.registerFunction(camelCaseTokenizer, 'camelCaseTokenizer')
var searchModule = function() {
    var idMap = [];
    function y(e) { 
        idMap.push(e); 
    }
    var idx = lunr(function() {
        this.field('title', { boost: 10 });
        this.field('content');
        this.field('description', { boost: 5 });
        this.field('tags', { boost: 50 });
        this.ref('id');
        this.tokenizer(camelCaseTokenizer);

        this.pipeline.remove(lunr.stopWordFilter);
        this.pipeline.remove(lunr.stemmer);
    });
    function a(e) { 
        idx.add(e); 
    }

    a({
        id:0,
        title:"AuthenticationConnectionFilter",
        content:"AuthenticationConnectionFilter",
        description:'',
        tags:''
    });

    a({
        id:1,
        title:"IConsulService",
        content:"IConsulService",
        description:'',
        tags:''
    });

    a({
        id:2,
        title:"RoundRobinRoutingStrategy",
        content:"RoundRobinRoutingStrategy",
        description:'',
        tags:''
    });

    a({
        id:3,
        title:"ServerStats",
        content:"ServerStats",
        description:'',
        tags:''
    });

    a({
        id:4,
        title:"ILeaderWatcher",
        content:"ILeaderWatcher",
        description:'',
        tags:''
    });

    a({
        id:5,
        title:"InformationNode",
        content:"InformationNode",
        description:'',
        tags:''
    });

    a({
        id:6,
        title:"RadixTree",
        content:"RadixTree",
        description:'',
        tags:''
    });

    a({
        id:7,
        title:"RouteSummary",
        content:"RouteSummary",
        description:'',
        tags:''
    });

    a({
        id:8,
        title:"IServiceRegistry",
        content:"IServiceRegistry",
        description:'',
        tags:''
    });

    a({
        id:9,
        title:"LeaderWatcher",
        content:"LeaderWatcher",
        description:'',
        tags:''
    });

    a({
        id:10,
        title:"ServiceCollectionExtensions",
        content:"ServiceCollectionExtensions",
        description:'',
        tags:''
    });

    a({
        id:11,
        title:"ServiceManagerConfig",
        content:"ServiceManagerConfig",
        description:'',
        tags:''
    });

    a({
        id:12,
        title:"IHealthConfig",
        content:"IHealthConfig",
        description:'',
        tags:''
    });

    a({
        id:13,
        title:"WindowsAuthStreamWrapper",
        content:"WindowsAuthStreamWrapper",
        description:'',
        tags:''
    });

    a({
        id:14,
        title:"CustomRouter",
        content:"CustomRouter",
        description:'',
        tags:''
    });

    a({
        id:15,
        title:"IConfigurationBuilder",
        content:"IConfigurationBuilder",
        description:'',
        tags:''
    });

    a({
        id:16,
        title:"HttpResponseExtensions",
        content:"HttpResponseExtensions",
        description:'',
        tags:''
    });

    a({
        id:17,
        title:"IKeyParser",
        content:"IKeyParser",
        description:'',
        tags:''
    });

    a({
        id:18,
        title:"ConfigurationRegistryExtensions",
        content:"ConfigurationRegistryExtensions",
        description:'',
        tags:''
    });

    a({
        id:19,
        title:"CurrentState Summary",
        content:"CurrentState Summary",
        description:'',
        tags:''
    });

    a({
        id:20,
        title:"RoutingHost",
        content:"RoutingHost",
        description:'',
        tags:''
    });

    a({
        id:21,
        title:"ConfigurationRegistryProvider",
        content:"ConfigurationRegistryProvider",
        description:'',
        tags:''
    });

    a({
        id:22,
        title:"WebsocketMiddleware",
        content:"WebsocketMiddleware",
        description:'',
        tags:''
    });

    a({
        id:23,
        title:"HttpResponseHelper",
        content:"HttpResponseHelper",
        description:'',
        tags:''
    });

    a({
        id:24,
        title:"SessionCreate",
        content:"SessionCreate",
        description:'',
        tags:''
    });

    a({
        id:25,
        title:"ConsulRegistryConfig",
        content:"ConsulRegistryConfig",
        description:'',
        tags:''
    });

    a({
        id:26,
        title:"LeaderRegistry",
        content:"LeaderRegistry",
        description:'',
        tags:''
    });

    a({
        id:27,
        title:"CondenserRoutes",
        content:"CondenserRoutes",
        description:'',
        tags:''
    });

    a({
        id:28,
        title:"HealthCheck",
        content:"HealthCheck",
        description:'',
        tags:''
    });

    a({
        id:29,
        title:"CondenserConfiguration",
        content:"CondenserConfiguration",
        description:'',
        tags:''
    });

    a({
        id:30,
        title:"ConfigurationRegistrySource",
        content:"ConfigurationRegistrySource",
        description:'',
        tags:''
    });

    a({
        id:31,
        title:"Node",
        content:"Node",
        description:'',
        tags:''
    });

    a({
        id:32,
        title:"WindowsAuthenticationMiddleware",
        content:"WindowsAuthenticationMiddleware",
        description:'',
        tags:''
    });

    a({
        id:33,
        title:"KeyValue",
        content:"KeyValue",
        description:'',
        tags:''
    });

    a({
        id:34,
        title:"ServiceCollectionExtensions",
        content:"ServiceCollectionExtensions",
        description:'',
        tags:''
    });

    a({
        id:35,
        title:"HttpRequestHelper",
        content:"HttpRequestHelper",
        description:'',
        tags:''
    });

    a({
        id:36,
        title:"RoutingData",
        content:"RoutingData",
        description:'',
        tags:''
    });

    a({
        id:37,
        title:"HealthResponse",
        content:"HealthResponse",
        description:'',
        tags:''
    });

    a({
        id:38,
        title:"DefaultRouting",
        content:"DefaultRouting",
        description:'',
        tags:''
    });

    a({
        id:39,
        title:"ServiceManager",
        content:"ServiceManager",
        description:'',
        tags:''
    });

    a({
        id:40,
        title:"RouteStrategy",
        content:"RouteStrategy",
        description:'',
        tags:''
    });

    a({
        id:41,
        title:"Service",
        content:"Service",
        description:'',
        tags:''
    });

    a({
        id:42,
        title:"ServiceRegistry",
        content:"ServiceRegistry",
        description:'',
        tags:''
    });

    a({
        id:43,
        title:"WindowsAuthFeature",
        content:"WindowsAuthFeature",
        description:'',
        tags:''
    });

    a({
        id:44,
        title:"TreeRouter",
        content:"TreeRouter",
        description:'',
        tags:''
    });

    a({
        id:45,
        title:"ChangeRoutingStrategy",
        content:"ChangeRoutingStrategy",
        description:'',
        tags:''
    });

    a({
        id:46,
        title:"IUsageInfo",
        content:"IUsageInfo",
        description:'',
        tags:''
    });

    a({
        id:47,
        title:"InformationCheck",
        content:"InformationCheck",
        description:'',
        tags:''
    });

    a({
        id:48,
        title:"ITtlCheck",
        content:"ITtlCheck",
        description:'',
        tags:''
    });

    a({
        id:49,
        title:"ConfigurationBuilder",
        content:"ConfigurationBuilder",
        description:'',
        tags:''
    });

    a({
        id:50,
        title:"RandomRoutingStrategy",
        content:"RandomRoutingStrategy",
        description:'',
        tags:''
    });

    a({
        id:51,
        title:"IService",
        content:"IService",
        description:'',
        tags:''
    });

    a({
        id:52,
        title:"HealthCheckStatus",
        content:"HealthCheckStatus",
        description:'',
        tags:''
    });

    a({
        id:53,
        title:"InformationServiceSet",
        content:"InformationServiceSet",
        description:'',
        tags:''
    });

    a({
        id:54,
        title:"ServiceBase",
        content:"ServiceBase",
        description:'',
        tags:''
    });

    a({
        id:55,
        title:"ChildContainer",
        content:"ChildContainer",
        description:'',
        tags:''
    });

    a({
        id:56,
        title:"IHttpClientConfig",
        content:"IHttpClientConfig",
        description:'',
        tags:''
    });

    a({
        id:57,
        title:"WindowsAuthHandshakeCache",
        content:"WindowsAuthHandshakeCache",
        description:'',
        tags:''
    });

    a({
        id:58,
        title:"InformationService",
        content:"InformationService",
        description:'',
        tags:''
    });

    a({
        id:59,
        title:"AsyncManualResetEvent",
        content:"AsyncManualResetEvent",
        description:'',
        tags:''
    });

    a({
        id:60,
        title:"HttpUtils",
        content:"HttpUtils",
        description:'',
        tags:''
    });

    a({
        id:61,
        title:"HealthCheck",
        content:"HealthCheck",
        description:'',
        tags:''
    });

    a({
        id:62,
        title:"RegistrationExtensions",
        content:"RegistrationExtensions",
        description:'',
        tags:''
    });

    a({
        id:63,
        title:"ServiceInstance",
        content:"ServiceInstance",
        description:'',
        tags:''
    });

    a({
        id:64,
        title:"TtlCheck",
        content:"TtlCheck",
        description:'',
        tags:''
    });

    a({
        id:65,
        title:"NodeComparer",
        content:"NodeComparer",
        description:'',
        tags:''
    });

    a({
        id:66,
        title:"ServiceCollectionExtensions",
        content:"ServiceCollectionExtensions",
        description:'',
        tags:''
    });

    a({
        id:67,
        title:"Node",
        content:"Node",
        description:'',
        tags:''
    });

    a({
        id:68,
        title:"ServiceUtils",
        content:"ServiceUtils",
        description:'',
        tags:''
    });

    a({
        id:69,
        title:"WindowsAuthenticationExtensions",
        content:"WindowsAuthenticationExtensions",
        description:'',
        tags:''
    });

    a({
        id:70,
        title:"CurrentState",
        content:"CurrentState",
        description:'',
        tags:''
    });

    a({
        id:71,
        title:"IRoutingStrategy",
        content:"IRoutingStrategy",
        description:'',
        tags:''
    });

    a({
        id:72,
        title:"HealthRouter",
        content:"HealthRouter",
        description:'',
        tags:''
    });

    a({
        id:73,
        title:"ConsulRegistry",
        content:"ConsulRegistry",
        description:'',
        tags:''
    });

    a({
        id:74,
        title:"WindowsHandshake",
        content:"WindowsHandshake",
        description:'',
        tags:''
    });

    a({
        id:75,
        title:"ServiceWithCustomClient",
        content:"ServiceWithCustomClient",
        description:'',
        tags:''
    });

    a({
        id:76,
        title:"IDefaultRouting",
        content:"IDefaultRouting",
        description:'',
        tags:''
    });

    a({
        id:77,
        title:"JsonKeyValueParser",
        content:"JsonKeyValueParser",
        description:'',
        tags:''
    });

    a({
        id:78,
        title:"IRoutingConfig",
        content:"IRoutingConfig",
        description:'',
        tags:''
    });

    a({
        id:79,
        title:"ILeaderRegistry",
        content:"ILeaderRegistry",
        description:'',
        tags:''
    });

    a({
        id:80,
        title:"Service",
        content:"Service",
        description:'',
        tags:''
    });

    a({
        id:81,
        title:"RoutingMiddleware",
        content:"RoutingMiddleware",
        description:'',
        tags:''
    });

    a({
        id:82,
        title:"ServerStatsRoute",
        content:"ServerStatsRoute",
        description:'',
        tags:''
    });

    a({
        id:83,
        title:"ServiceCallMiddleware",
        content:"ServiceCallMiddleware",
        description:'',
        tags:''
    });

    a({
        id:84,
        title:"HttpConsts",
        content:"HttpConsts",
        description:'',
        tags:''
    });

    a({
        id:85,
        title:"IConfigurationRegistry",
        content:"IConfigurationRegistry",
        description:'',
        tags:''
    });

    a({
        id:86,
        title:"ConfigurationBuilderExtensions",
        content:"ConfigurationBuilderExtensions",
        description:'',
        tags:''
    });

    a({
        id:87,
        title:"NodeContainer",
        content:"NodeContainer",
        description:'',
        tags:''
    });

    a({
        id:88,
        title:"SessionCreateResponse",
        content:"SessionCreateResponse",
        description:'',
        tags:''
    });

    a({
        id:89,
        title:"ApplicationBuilderExtensions",
        content:"ApplicationBuilderExtensions",
        description:'',
        tags:''
    });

    a({
        id:90,
        title:"IServiceManager",
        content:"IServiceManager",
        description:'',
        tags:''
    });

    a({
        id:91,
        title:"KeyValue",
        content:"KeyValue",
        description:'',
        tags:''
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server.WindowsAuthentication/AuthenticationConnectionFilter',
        title:"AuthenticationConnectionFilter",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server/IConsulService',
        title:"IConsulService",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Core.Routing/RoundRobinRoutingStrategy_1',
        title:"RoundRobinRoutingStrategy<T>",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server.DataContracts/ServerStats',
        title:"ServerStats",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Client.Leadership/ILeaderWatcher',
        title:"ILeaderWatcher",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Core.DataContracts/InformationNode',
        title:"InformationNode",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server.RoutingTrie/RadixTree_1',
        title:"RadixTree<T>",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server.Routes/RouteSummary',
        title:"RouteSummary",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Client.Services/IServiceRegistry',
        title:"IServiceRegistry",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Client.Leadership/LeaderWatcher',
        title:"LeaderWatcher",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Client/ServiceCollectionExtensions',
        title:"ServiceCollectionExtensions",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Client/ServiceManagerConfig',
        title:"ServiceManagerConfig",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server.Builder/IHealthConfig',
        title:"IHealthConfig",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server.WindowsAuthentication/WindowsAuthStreamWrapper',
        title:"WindowsAuthStreamWrapper",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server/CustomRouter',
        title:"CustomRouter",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server/IConfigurationBuilder',
        title:"IConfigurationBuilder",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server.Extensions/HttpResponseExtensions',
        title:"HttpResponseExtensions",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Configuration.Consul/IKeyParser',
        title:"IKeyParser",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Configuration/ConfigurationRegistryExtensions',
        title:"ConfigurationRegistryExtensions",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server/Summary',
        title:"CurrentState.Summary",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server/RoutingHost',
        title:"RoutingHost",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Configuration/ConfigurationRegistryProvider',
        title:"ConfigurationRegistryProvider",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server.Websockets/WebsocketMiddleware',
        title:"WebsocketMiddleware",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server.HttpPipelineClient/HttpResponseHelper',
        title:"HttpResponseHelper",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Client.DataContracts/SessionCreate',
        title:"SessionCreate",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Configuration.Consul/ConsulRegistryConfig',
        title:"ConsulRegistryConfig",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Client.Leadership/LeaderRegistry',
        title:"LeaderRegistry",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server.Routes/CondenserRoutes',
        title:"CondenserRoutes",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Client.DataContracts/HealthCheck',
        title:"HealthCheck",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server/CondenserConfiguration',
        title:"CondenserConfiguration",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Configuration/ConfigurationRegistrySource',
        title:"ConfigurationRegistrySource",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server.DataContracts/Node',
        title:"Node",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server.WindowsAuthentication/WindowsAuthenticationMiddleware',
        title:"WindowsAuthenticationMiddleware",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Configuration.Consul/KeyValue',
        title:"KeyValue",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Configuration/ServiceCollectionExtensions',
        title:"ServiceCollectionExtensions",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server.HttpPipelineClient/HttpRequestHelper',
        title:"HttpRequestHelper",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server/RoutingData',
        title:"RoutingData",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server.Routes/HealthResponse',
        title:"HealthResponse",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Core.Routing/DefaultRouting_1',
        title:"DefaultRouting<T>",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Client/ServiceManager',
        title:"ServiceManager",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Core.Routing/RouteStrategy',
        title:"RouteStrategy",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Client.DataContracts/Service',
        title:"Service",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Client.Services/ServiceRegistry',
        title:"ServiceRegistry",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server.WindowsAuthentication/WindowsAuthFeature',
        title:"WindowsAuthFeature",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server.Routes/TreeRouter',
        title:"TreeRouter",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server.Routes/ChangeRoutingStrategy',
        title:"ChangeRoutingStrategy",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server/IUsageInfo',
        title:"IUsageInfo",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Core.DataContracts/InformationCheck',
        title:"InformationCheck",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Client/ITtlCheck',
        title:"ITtlCheck",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server/ConfigurationBuilder',
        title:"ConfigurationBuilder",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Core.Routing/RandomRoutingStrategy_1',
        title:"RandomRoutingStrategy<T>",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server/IService',
        title:"IService",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server.DataContracts/HealthCheckStatus',
        title:"HealthCheckStatus",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Core.DataContracts/InformationServiceSet',
        title:"InformationServiceSet",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server/ServiceBase',
        title:"ServiceBase",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server.RoutingTrie/ChildContainer_1',
        title:"ChildContainer<T>",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server/IHttpClientConfig',
        title:"IHttpClientConfig",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server.WindowsAuthentication/WindowsAuthHandshakeCache',
        title:"WindowsAuthHandshakeCache",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Core.DataContracts/InformationService',
        title:"InformationService",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Core/AsyncManualResetEvent_1',
        title:"AsyncManualResetEvent<T>",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Core/HttpUtils',
        title:"HttpUtils",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server.DataContracts/HealthCheck',
        title:"HealthCheck",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Client/RegistrationExtensions',
        title:"RegistrationExtensions",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server.DataContracts/ServiceInstance',
        title:"ServiceInstance",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Client/TtlCheck',
        title:"TtlCheck",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server.RoutingTrie/NodeComparer',
        title:"NodeComparer",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server/ServiceCollectionExtensions',
        title:"ServiceCollectionExtensions",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server.RoutingTrie/Node_1',
        title:"Node<T>",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Core/ServiceUtils',
        title:"ServiceUtils",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server.WindowsAuthentication/WindowsAuthenticationExtensions',
        title:"WindowsAuthenticationExtensions",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server/CurrentState',
        title:"CurrentState",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Core.Routing/IRoutingStrategy_1',
        title:"IRoutingStrategy<T>",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server.Routes/HealthRouter',
        title:"HealthRouter",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Configuration.Consul/ConsulRegistry',
        title:"ConsulRegistry",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server.WindowsAuthentication/WindowsHandshake',
        title:"WindowsHandshake",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server.HttpPipelineClient/ServiceWithCustomClient',
        title:"ServiceWithCustomClient",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Core.Routing/IDefaultRouting_1',
        title:"IDefaultRouting<T>",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Configuration.Consul/JsonKeyValueParser',
        title:"JsonKeyValueParser",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Core.Routing/IRoutingConfig',
        title:"IRoutingConfig",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Client.Leadership/ILeaderRegistry',
        title:"ILeaderRegistry",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server/Service',
        title:"Service",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server/RoutingMiddleware',
        title:"RoutingMiddleware",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server.Routes/ServerStatsRoute',
        title:"ServerStatsRoute",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server/ServiceCallMiddleware',
        title:"ServiceCallMiddleware",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server.HttpPipelineClient/HttpConsts',
        title:"HttpConsts",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Configuration/IConfigurationRegistry',
        title:"IConfigurationRegistry",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Configuration/ConfigurationBuilderExtensions',
        title:"ConfigurationBuilderExtensions",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server.RoutingTrie/NodeContainer_1',
        title:"NodeContainer<T>",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Client.DataContracts/SessionCreateResponse',
        title:"SessionCreateResponse",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Server/ApplicationBuilderExtensions',
        title:"ApplicationBuilderExtensions",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Client/IServiceManager',
        title:"IServiceManager",
        description:""
    });

    y({
        url:'/CondenserDocs/CondenserDocs/api/CondenserDotNet.Core.Consul/KeyValue',
        title:"KeyValue",
        description:""
    });

    return {
        search: function(q) {
            return idx.search(q).map(function(i) {
                return idMap[i.ref];
            });
        }
    };
}();
