type SidebarAction = {
  type: string;
  route?: any;
};

type SidebarDispatchType = (args: SidebarAction) => SidebarAction;
