import state from '@/store/index';
export function getToken(): string {
  const token = state.state.token || JSON.parse(sessionStorage.getItem('store')!).token;
  return token;
}
