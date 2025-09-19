import { createBrowserRouter, RouteObject } from 'react-router-dom';

import Home from './Home/Home'
import Login from './Login/Login'
import Trial from './Trial/Trial'

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/trial',
        element: <Trial />,
    },
]

const AppRouter = createBrowserRouter(routes)

export default AppRouter;