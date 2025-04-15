import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import CarbonComponentsVue from '@carbon/vue';
import './assets/main.css';
import 'carbon-components/css/carbon-components.css';

const app = createApp(App);
app.use(CarbonComponentsVue);
app.use(router);
app.mount('#app');
