import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const app = () => import('../components/App')
const urlPage = () => import('../components/urlPage')
const forbidden = () => import('../components/403')
const notFound = () => import('../components/404')

const routes = [
    {
        path: "/",
        name: "home",
        component: app,
        meta: { requiresAuth: false }
    },
    {
        path: "/login*",
        name: "home",
        component: app,
        meta: { requiresAuth: false }
    },
    {
        path: "/url",
        name: "url",
        component: urlPage,
        meta: { requiresAuth: true }
    },
    { path: "403", name: "403", component: forbidden },
    { path: "*", name: "404", component: notFound }
]

const router = new VueRouter({
    routes
})

export default router;