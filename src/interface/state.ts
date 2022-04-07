/*
 * @Author: 姚成成
 * @Date: 2022-01-16 13:29:43
 * @LastEditors: 姚成成
 * @LastEditTime: 2022-04-07 12:03:13
 * @FilePath: /love-diary-client/src/interface/state.ts
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
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

// 展示图片
interface ImgInter {
  author: string;
  url: string;
  id: string;
}

export { MenuInter, UserInfoInter, ImgInter };
