import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createWebHashHistory, createRouter } from "vue-router";
import liu from "./components/liu.vue";
import liu2 from "./components/liu2.vue";
const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: liu },
    { path: "/xxx", component: liu2 },
  ],
});
createApp(App).use(router).mount("#app");
