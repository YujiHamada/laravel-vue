import Vue from "vue";
import VueRouter from "vue-router";
 
Vue.use(VueRouter);
 
import create from "./components/create.vue";
 
const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/thread/create",
            name: "add",
            component: create
        }
    ]
});
 
export default router;