import { createApp } from 'vue'
import './styles/common.less'
import App from './App.vue'
import 'ant-design-vue/dist/antd.less';
import { Button, message,Input,Popover } from 'ant-design-vue';
import AlbumTitle from './components/AlbumTitle'
import router from './router'
import AudioPlayer from './components/AudioPlayer'
import store from './store'
const app=createApp(App)
app.use(Button).use(Input).use(Popover)
app.use(router).use(store)
app.use(AlbumTitle).use(AudioPlayer)

app.mount('#app')

