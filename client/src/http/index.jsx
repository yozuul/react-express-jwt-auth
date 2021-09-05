import axios from 'axios'

const BASE_URL='http://localhost:5000'

const $account = axios.create({
    withCredentials: true,
    baseURL: `${BASE_URL}/account`
})
const $api = axios.create({
    withCredentials: true,
    baseURL: `${BASE_URL}/api`
})

$account.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})
$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

export { $account, $api }