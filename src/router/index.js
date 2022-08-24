import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import NotFound from "../views/NotFound.vue";
import Tasks from "../views/Tasks.vue";
import TaskDetails from "../views/TaskDetails.vue";
import AssetInsert from "../views/AssetInsert.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: Home,
  },
  {
    path: "/tasks",
    name: "Tasks",
    component: Tasks,
  },
  {
    path: "/tasks/:id",
    name: "TaskDetails",
    component: TaskDetails,
    props: true,
  },
  // 404 catchall
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/AssetInsert",
    name: "AssetInsert",
    component: AssetInsert,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
