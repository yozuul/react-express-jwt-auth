import React, { useState, useEffect, useContext, createContext } from 'react'
import AuthService from '../services/AuthService'

const authContext = createContext()

const useProvideAuth = () => {
    const [user, setUser] = useState(false)
    const [error, setError] = useState('')

    const login = async (authData) => {
        try {
            const response = await AuthService.login(authData)
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            setUser(response.data.user)
            return true
        } catch (err) {
            const errMessage = err.response?.data?.message
            console.log(errMessage)
            setError(errMessage)
        }
    }

    const register = async (regData) => {
        try {
            const response = await AuthService.register(regData)
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            setUser(response.data.user)
        } catch (err) {
            const errMessage = err.response?.data?.message
            console.log(errMessage)
            setError(errMessage)
        }
    }

    const logout = () => {
        AuthService.logout()
    }

    const checkAuth = (email) => {
        console.log(email)
    }

    const confirmEmail = (code, password) => {
        console.log(code)
    }

    const confirmPasswordReset = (code, password) => {
        console.log(code)
    }

    useEffect(() => {
        const token = localStorage.getItem('toke')
        if(token) AuthService.checkAuth(setUser)
    }, [])

    return {
        login, register, logout, checkAuth, confirmEmail, confirmPasswordReset, user, error
    }
}

const ProvideAuth = ({ children }) => {
    const auth = useProvideAuth()
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}
const useAuth = () => {
    return useContext(authContext)
}

export { ProvideAuth, useAuth }