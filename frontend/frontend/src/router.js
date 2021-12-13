import { createRouter, createWebHistory } from 'vue-router'
import App from './App';
import LogIn from "./components/LogIn";
import SingUp from "./components/SingUp";

const routes = [
    {
        path: '/',
        name: 'root',
        component: App
    },
    {
        path: '/logIn',
        name: 'logIn',
        component: LogIn
    },
    {
        path: '/register',
        name: 'register',
        component: SingUp
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
