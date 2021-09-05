import React  from 'react'
import { BrowserRouter, Routes, Route, Link, useRoutes } from 'react-router-dom';

import { AuthLayout, DashboardLayout } from './layouts'
import { LoginPage, RegisterPage } from './pages'
import Navbar from './components/dashboard/Navbar'

const Router = () => {
    return useRoutes([
        {
            path: '/',
            element: <AuthLayout />,
            children: [
                { path: '/', element: <LoginPage /> },
                { path: 'login', element: <LoginPage /> },
                { path: 'register', element: <RegisterPage /> },
            ]
        },
        {
            path: '/dashboard',
            element: <DashboardLayout />,
            children: [
                { path: '/panel', element: <Navbar /> },
            ]

        }
    ])
}

export default Router