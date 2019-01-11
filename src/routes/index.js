import Home from '@pages/Home'
import PollPage from '@pages/PollPage'
import ErrorPage from '@pages/404'
import AuthPage from '@pages/AuthPage'

export const routePaths = {
    home: '/',
    poll: '/poll',
    auth: '/auth'
}

export default [
    {
        path: routePaths.poll,
        name: 'poll',
        exact: true,
        component: PollPage
    },
    {
        path: routePaths.auth,
        name: 'auth',
        exact: true,
        component: AuthPage
    },
    {
        path: routePaths.home,
        name: 'home',
        exact: true,
        component: Home
    },
    {
        path: '*',
        name: 'error_page',
        component: ErrorPage
    },
]
