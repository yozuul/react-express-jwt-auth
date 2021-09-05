import React from 'react'
import { useAuth } from '../hooks/use-auth'
import './styles/auth-form.scss'

export const RegisterPage = () => {
    const auth = useAuth()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const { login, password } = e.target
        auth.login({
            login: login.value,
            password: password.value
        })
    }
    return (
        <form id='auth_form' onSubmit={handleSubmit}>
            <h5>Регистрация</h5>
            <input
                type='login'
                name='login'
                placeholder={'Логин или email'}
                autoComplete={''}
            />
            <input
                type='password'
                name='password'
                placeholder={'Пароль'}
                autoComplete={''}
            />
            <button className='btn btn-primary' type='submit'>Войти</button>
            <div className="erroMessage">{auth?.error}</div>
        </form>
    )
}