import axios from 'axios'

const service = axios.create({
    timeout: 10000,
})

const http = {
    post: (path: string, params: unknown) => {
        return service.post(path, params)
    }
}

export default http


