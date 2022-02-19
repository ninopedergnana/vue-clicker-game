import { createApp } from 'vue'
import './index.css'
import FontAwesomeIcon from "./icons";
import router from "./router"
import store from './store'
import App from './App.vue'

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(store);
app.use(router);
app.mount('#app');

