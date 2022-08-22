import {createApp} from 'vue';
import App from './App.vue';

import SundayUI from '../src/entry';

const app = createApp(App);

app.use(SundayUI);

app.mount('#app');