import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import {createRouter, createWebHistory} from 'vue-router'
import Login from "./components/Login.vue";
import AddRes from "./components/AddRes.vue";
import UpdateRes from "./components/UpdateRes.vue";

const routes=[
    {
        name: "Home",
        component: Home,
        path:"/"
    },
    {
        name:"SignUp",
        component: SignUp,
        path:"/sign-up"
    },
    {
        name:"Login",
        component: Login,
        path: "/login"
    },
    {
        name:"AddRestaurant",
        component: AddRes,
        path: "/Add"
    },
    {
        name:"UpdateRestaurnat",
        component: UpdateRes,
        path: "/Update/:id"
    }
];

const router= createRouter({
    history: createWebHistory(),
    routes,
});

export default router;