import { MenuInter, UserInfoInter } from '@/interface/state';
import { state as defaultState } from '../state/state';

// 存入userInfo
function SET_USERINFO(state: any, userInfo: UserInfoInter): void {
  state.userInfo = JSON.parse(JSON.stringify(userInfo));
}

// 存入menu
function SET_MENU(state: any, menu: MenuInter): void {
  if (menu['menu_name'] === '首页') {
    return;
  }

  if (!state.menu || !state.menu.length) {
    state.menu.push(menu);
  }

  const index = state.menu.findIndex((item: MenuInter) => item.menu_id === menu.menu_id);
  if (index === -1) {
    state.menu.push(menu);
  }
}

// 删除menu
function DELETE_MENU(state: any, menu: MenuInter): void {
  const index = state.menu.findIndex((item: MenuInter) => item.menu_id === menu.menu_id);
  if (index !== -1) {
    state.menu.splice(index, 1);
  }
}

// logout清空vuex
function CLEARLOGOUT(state: any) {
  Object.assign(state, defaultState);
}

export default { SET_USERINFO, SET_MENU, DELETE_MENU, CLEARLOGOUT };
