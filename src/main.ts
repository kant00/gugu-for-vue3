import "./lib/gulu.scss";
import "./index.scss";
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import "github-markdown-css";
import Markdown from "./components/Markdown.vue";
createApp(App).use(router).mount("#app");
App.component("Markdown", Markdown);
