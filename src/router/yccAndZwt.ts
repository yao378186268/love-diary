/*
 * @Author: 姚成成
 * @Date: 2022-01-16 15:48:54
 * @LastEditors: 姚成成
 * @LastEditTime: 2022-04-07 09:55:00
 * @FilePath: /love-diary-client/src/router/yccandzwt.ts
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
const Ycc = () => import('../views/yccAndZwt/ycc/index.vue');
const Zwt = () => import('../views/yccAndZwt/zwt/index.vue');
const Xdd = () => import('../views/yccAndZwt/xdd/index.vue');

export const yccAndZwt = [
  { path: 'ycc', name: 'ycc', component: Ycc },
  { path: 'zwt', name: 'zwt', component: Zwt },
  { path: 'xdd', name: 'xdd', component: Xdd }
];
