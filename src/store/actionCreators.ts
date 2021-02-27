import * as actionTypes from "./actionTypes";

export function openSubMenu() {
  const action: SidebarAction = {
    type: actionTypes.OPEN_SUB_MENU,
  };

  console.log("Hello");

  return (dispatch: SidebarDispatchType) => {
    dispatch(action);
  };
}
