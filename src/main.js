import { createApp } from 'vue'
import './styles/common.less'
import App from './App.vue'
import 'ant-design-vue/dist/antd.less';
import { Button, message } from 'ant-design-vue';
import router from './router'
const app=createApp(App)
app.use(Button)
app.use(router)
app.mount('#app')

