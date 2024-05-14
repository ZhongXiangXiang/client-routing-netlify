// vue v3.2.13+ 内置了@vue/compiler-sfc，编译sfc。所以不需要另外安装之前的vue-template-compiler
import { createApp } from 'vue';
import App from './App';
import router from './router/index';

const app = createApp(App).use(router).mount('#app');
