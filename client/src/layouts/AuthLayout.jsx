import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/use-auth'

export const AuthLayout = () => {
    const auth = useAuth()
    return (
        <div id="authPage">
            { !auth?.user && (<Outlet />) }
            {  auth?.user && <Navigate to="/dashboard/panel" replace /> }
        </div>
    )
}