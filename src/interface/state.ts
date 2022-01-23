// vuex中使用的接口

// 菜单对象接口
interface MenuInter {
  children?: MenuInter;
  menu_id: number;
  menu_level?: string;
  menu_name: string;
  menu_parent_id?: number;
  menu_path: string;
  menu_type: string | null;
}

// 用户信息
interface UserInfoInter {
  createTime: string | null;
  createUser: string | null;
  id: number;
  password: string;
  updateTime: string | null;
  updateUser: string | null;
  username: string;
}

export { MenuInter, UserInfoInter };
