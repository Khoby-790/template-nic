import * as actionTypes from "./actionTypes";

const initialState: SidebarState = {
  sidebarOpen: false,
};

const reducer = (state = initialState, action: SidebarAction): SidebarState => {
  switch (action.type) {
    case actionTypes.OPEN_SUB_MENU:
      return {
        ...state,
        sidebarOpen: true,
      };
    case actionTypes.CLOSE_SUB_MENU:
      return {
        ...state,
        sidebarOpen: false,
      };
    default:
      return state;
  }
};
