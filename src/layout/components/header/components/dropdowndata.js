export default {
  code: 20000,
  data: [
    [
      { name: "模块一", code: "01" },
      {
        name: "配置中心",
        code: "01",
        checked: false,
        data: [
          {
            name: "应用管理",
            template: "applicationManagement",
            src: "applicationManagement"
          },
          {
            name: "环境管理",
            template: "environmentalManagement",
            src: "environmentalManagement"
          },
          {
            name: "配置管理",
            template: "configurationManagement",
            src: "configurationManagement"
          }
        ]
      },
      {
        checked: false,
        name: "流程编排",
        code: "02",
        style: "paperclip",
        color: "red",
        data: [
          {
            name: "开发态",
            template: "developmentStatus",
            meta: { title: "开发态", icon: "user" },
            data: [
              {
                name: "字典管理",
                template: "dictionary",
                src: "dictionary"
              },
              {
                name: "系统配置",
                template: "systemConfiguration",
                src: "systemConfiguration"
              },
              {
                name: "模块配置",
                template: "moduleConfiguration",
                src: "moduleConfiguration"
              },
              {
                name: "组件配置",
                template: "componentConfiguration",
                src: "componentConfiguration"
              },
              {
                name: "应用配置",
                template: "applicationConfiguration",
                src: "applicationConfiguration"
              },
              {
                name: "模块服务编排",
                template: "moduleServiceOrchestration",
                src: "moduleServiceOrchestration"
              },
              {
                name: "应用服务编排",
                template: "applicationServiceOrchestration",
                src: "applicationServiceOrchestration"
              },
              {
                name: "打包发布配置",
                template: "packagingReleaseConfiguration",
                src: "packagingReleaseConfiguration"
              }
            ]
          },
          {
            name: "运行态",
            template: "runningState",
            src: "Temporary",
            meta: { title: "运行态", icon: "user" },
            data: [
              {
                name: "节点运行状态",
                template: "nodeRunningStatus",
                src: "nodeRunningStatus"
              },
              {
                name: "节点流量状态",
                template: "nodeTrafficStatus",
                src: "nodeTrafficStatus"
              },
              {
                name: "服务调用排行",
                template: "serviceCallRanking",
                src: "serviceCallRanking"
              },
              {
                name: "链路调用日志",
                template: "linkCallLog",
                src: "linkCallLog"
              },
              {
                name: "流程发起调用",
                template: "processInvocation",
                src: "processInvocation"
              }
            ]
          }
        ]
      },
      {
        checked: false,
        name: "序列管理",
        code: "03",
        data: [
          {
            name: "参数配置",
            template: "parameterConfiguration",
            src: "Temporary"
          },
          {
            name: "规则配置",
            template: "ruleConfiguration",
            src: "Temporary"
          }
        ]
      },
      {
        checked: false,
        name: "缓存管理",
        code: "04",
        data: [
          {
            name: "机器管理",
            template: "machineManagement",
            src: "Temporary"
          },
          {
            name: "实例管理",
            template: "instanceManagement",
            src: "Temporary"
          },
          {
            name: "机器实例",
            template: "machineInstance",
            src: "Temporary"
          },
          {
            name: "创建集群",
            template: "createACluster",
            src: "Temporary"
          },
          {
            name: "发现集群",
            template: "discoveryCluster",
            src: "Temporary"
          },
          {
            name: "集群监控",
            template: "clusterMonitoring",
            src: "Temporary"
          },
          {
            name: "任务管理",
            template: "taskManagement",
            src: "Temporary"
          },
          {
            name: "控制台",
            template: "Console",
            src: "Temporary"
          },
          {
            checked: false,
            name: "维护",
            template: "maintain",
            meta: { title: "维护", icon: "user" },
            data: [
              { name: "应用管理", template: "applicationManagement" },
              { name: "基础参数", template: "basicParameters" },
              { name: "租户管理", template: "tenantManagement" }
            ]
          }
        ]
      },
      {
        checked: false,
        name: "消息管理",
        code: "05",
        data: [
          { name: "机器管理", template: "machineManagement", checked: false },
          { name: "集群管理", template: "clusterManagement", checked: false },
          { name: "实例管理", template: "instanceManagement", checked: false },
          { name: "主题管理", template: "themeManagement", checked: false },
          { name: "消息查询", template: "messageQuery", checked: false }
        ]
      }
    ],
    [
      { name: "模块二", code: "06", checked: false },
      { name: "服务治理", code: "06", checked: false },
      { name: "自动化部署", code: "07", checked: false },
      { name: "微服务网关", code: "08", checked: false },
      { name: "系统管理", code: "09", checked: false },
      { name: "开发工具", code: "10", checked: false }
    ]
  ]
};
