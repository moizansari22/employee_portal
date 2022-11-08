import { createRouter, createWebHistory } from "vue-router";
import EmployeePortal from "./components/EmployeePortal.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: '/portal',
    },
    {
        path: '/portal',
        component: EmployeePortal
    }
  ],
});
export default router;