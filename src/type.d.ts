type SidebarAction = {
  type: string;
  route?: any;
};

type SidebarState = {
  sidebarOpen: boolean;
};

type SidebarDispatchType = (args: SidebarAction) => SidebarAction;

type Broker = {
  id: string | number;
  name: string;
  address: string;
  contact: string;
};

type Insurer = {
  id: string | number;
  name: string;
  address: string;
  contact: string;
};
