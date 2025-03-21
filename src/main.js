import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import VueApexCharts from "vue3-apexcharts";

// Create the app instance first
const app = createApp(App);

// Then use plugins and libraries
app.use(VueApexCharts); // Add VueApexCharts plugin
app.use(router); // Use Vue Router

// Finally, mount the app
app.mount("#app");
