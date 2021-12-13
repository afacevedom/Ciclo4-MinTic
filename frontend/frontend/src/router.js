import { createRouter, createWebHistory } from 'vue-router'
import App from './App';
import LogIn from "./components/LogIn";
import SingUp from "./components/SingUp";
import HomeUser from "./components/HomeUser";
import HomeDoc from "./components/HomeDoc";

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
    },
    {
        path: '/user',
        name: 'userView',
        component: HomeUser
    },
    {
        path: '/doctor',
        name: 'doctorView',
        component: HomeDoc
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
