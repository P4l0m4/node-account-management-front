import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AccountCreated from "@/views/AccountCreated.vue";
import MyAccount from "@/views/MyAccount";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home-page",
    component: HomeView,
  },
  {
    path: "/account-created",
    name: "account-created",
    component: AccountCreated,
  },
  {
    path: "/my-account",
    name: "my-account",
    component: MyAccount,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
