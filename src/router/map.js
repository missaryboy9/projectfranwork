exports.asynvmap_ = {
  applicationManagement: () =>
    import("@/views/configurationCenter/applicationManagement"),
  environmentalManagement: () =>
    import("@/views/configurationCenter/environmentalManagement"),
  configurationManagement: () =>
    import("@/views/configurationCenter/configurationManagement"),
  dictionary: () =>
    import("@/views/ProcessChoreographer/developstate/dectionmain"),
  systemConfiguration: () =>
    import("@/views/ProcessChoreographer/developstate/systemConfiguration"),
  moduleConfiguration: () =>
    import("@/views/ProcessChoreographer/developstate/moduleConfiguration"),
  componentConfiguration: () =>
    import("@/views/ProcessChoreographer/developstate/componentConfiguration"),
  applicationConfiguration: () =>
    import(
      "@/views/ProcessChoreographer/developstate/applicationConfiguration"
    ),
  moduleServiceOrchestration: () =>
    import(
      "@/views/ProcessChoreographer/developstate/moduleServiceOrchestration"
    ),
  applicationServiceOrchestration: () =>
    import(
      "@/views/ProcessChoreographer/developstate/applicationServiceOrchestration"
    ),
  packagingReleaseConfiguration: () =>
    import(
      "@/views/ProcessChoreographer/developstate/packagingReleaseConfiguration"
    ),
  nodeRunningStatus: () =>
    import("@/views/ProcessChoreographer/runningstate/nodeRunningStatus"),
  nodeTrafficStatus: () =>
    import("@/views/ProcessChoreographer/runningstate/nodeTrafficStatus"),
  serviceCallRanking: () =>
    import("@/views/ProcessChoreographer/runningstate/serviceCallRanking"),
  linkCallLog: () =>
    import("@/views/ProcessChoreographer/runningstate/linkCallLog"),
  processInvocation: () =>
    import("@/views/ProcessChoreographer/runningstate/processInvocation")
};
