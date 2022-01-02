import http from '../utils/axios'
import global from '../../Global'

export async function login(params: unknown) {
    return await http.post(global.defaultPath + '/login', params)
}