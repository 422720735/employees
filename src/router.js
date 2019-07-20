import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Index/index.vue";
import Login from './views/Login/index.vue';
import Register from './views/Register/index.vue';
import Staff from './views/Staff/index.vue';
Vue.use(Router);
export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/reg",
            name: "reg",
            component: Register
        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
        },
        {
            path: "/staff",
            name: "staff",
            component: Staff
        },
        {
            path: "/login",
            name: "login",
            component: Login
        }
    ]
});
//# sourceMappingURL=router.js.map