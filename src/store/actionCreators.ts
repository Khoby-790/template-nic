import * as actionTypes from "./actionTypes";

export function openSubMenu() {
  const action: SidebarAction = {
    type: actionTypes.OPEN_SUB_MENU,
  };

  return (dispatch: SidebarDispatchType) => {
    dispatch(action);
  };
}
