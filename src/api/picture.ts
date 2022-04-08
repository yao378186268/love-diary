/*
 * @Author: 姚成成
 * @Date: 2022-04-07 11:45:33
 * @LastEditors: 姚成成
 * @LastEditTime: 2022-04-07 11:47:47
 * @FilePath: /love-diary-client/src/api/picture.ts
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import http from '../utils/axios';
import global from '../global/global';

export async function getPicture(params: { author: string }) {
  return await http.get(global.defaultPath + '/picture', params);
}

export async function getVideo(params: any) {
  return await http.get(global.defaultPath + '/video', params);
}
