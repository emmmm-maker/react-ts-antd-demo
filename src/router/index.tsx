import {RouteObject} from 'react-router-dom'
import Layout from "@/components/Layout";
import Login from "@/pages/Login";

const router: RouteObject[] = [
    {
        path: '/',
        element: <Layout/>
    },
    {
        path: '/login',
        element: <Login></Login>
    }
]

export default router
