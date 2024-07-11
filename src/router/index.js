// router.js
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import TariffsView from "@/views/TariffsView.vue";
import PaymentView from "@/views/PaymentView.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/personal_information",
    name: "personal_information",
    component: TariffsView,
  },
  {
    path: "/payment",
    name: "payment_view",
    component: PaymentView,
    params: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
