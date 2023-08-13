import { createApp } from "vue";
import "@/style.scss";
import App from "@/App.vue";
import router from "@/router/route.js";
import store from "@/store/store.js";

const app = createApp(App);
app.use(store).use(router).mount("#app");
