import React from 'react'
import { Outlet } from 'react-router-dom'

export const DashboardLayout = () => {
    return (
        <div id="dashboardLayout">
            <Outlet />
        </div>
    )
}