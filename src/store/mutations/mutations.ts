import { MenuInter, UserInfoInter } from '@/interface/state';

// 存入userInfo
function SET_USERINFO(state: any, userInfo: UserInfoInter): void {
  state.userInfo = JSON.parse(JSON.stringify(userInfo));
}

// 存入menu
function SET_MENU(state: any, menu: MenuInter): void {
  state.menu.forEach((item: MenuInter) => {
    item['menu_type'] = '';
  });
  menu['menu_type'] = 'success';

  if (!state.menu || !state.menu.length) {
    state.menu.push(menu);
  }

  const index = state.menu.findIndex((item: MenuInter) => item.menu_id === menu.menu_id);
  if (index === -1) {
    state.menu.push(menu);
  } else {
    state.menu.splice(index, 1, menu);
  }
}

// 删除menu
function DELETE_MENU(state: any, menu: MenuInter): void {
  const index = state.menu.findIndex((item: MenuInter) => item.menu_id === menu.menu_id);
  if (index !== -1) {
    state.menu.splice(index, 1);
  }
}

export default { SET_USERINFO, SET_MENU, DELETE_MENU };
