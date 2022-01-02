import http from '../utils/axios'

export async function login(params: unknown) {
    return await http.post('/lovediary/login', params)
}