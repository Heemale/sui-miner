import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 100000,
})

instance.interceptors.response.use(
    (res) => {
        if (res.status === 200 || res.status === 201) {
            return res?.data?.result;
        }
        return Promise.reject(res.data);
    },
    (err) => {
        return Promise.reject(err);
    }
)

export default instance;