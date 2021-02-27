type SidebarAction = {
  type: string;
  route?: any;
};

type SidebarState = {
  sidebarOpen: boolean;
};

type SidebarDispatchType = (args: SidebarAction) => SidebarAction;
