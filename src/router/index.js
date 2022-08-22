import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import About from "../views/AboutView.vue";
import Tasks from "../views/Tasks.vue";
import TaskDetails from "../views/TaskDetails.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
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
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
