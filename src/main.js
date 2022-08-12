import { createApp } from 'vue'
import './styles/common.less'
import App from './App.vue'
import 'ant-design-vue/dist/antd.less';
import { Button, message,Input } from 'ant-design-vue';
import AlbumTitle from './components/AlbumTitle'
import router from './router'
const app=createApp(App)
app.use(Button).use(Input)
app.use(AlbumTitle)
app.use(router)
app.mount('#app')

