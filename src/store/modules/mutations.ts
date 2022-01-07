export function SET_USERINFO(state: { [proptoty: string]: any }, userInfo: { [proptoty: string]: any }): void {
  state.userInfo = JSON.parse(JSON.stringify(userInfo));
}
