import { $account } from "../http";

export default class AuthService {
    static async login(authData) {
        let method = 'login'
        const { login, password } = authData
        if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(login)) {
            method = 'email'
        }
        return $account.post('/login', {
            login, password, method
        })
    }
    static async register(regData) {
        const { name, login, email, password } = regData
        return $account.post('/register', name, login, email, password)
    }
    static async logout() {
        return $account.post('/logout')
    }
    static async checkAuth(setUser) {
        const userData = $account.get('/refresh')
        setUser(userData)
    }
}