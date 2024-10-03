import { createApp } from "vue";
import "./scss/main.scss";
import App from "./App.vue";
import store from "@/shared/store/store";

const app = createApp(App);
app.use(store);
app.mount("#app");
