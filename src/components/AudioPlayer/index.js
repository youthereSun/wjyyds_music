import AudioPlayer from './index.vue'
import store from '../../store'

import {createVNode,render} from 'vue'
export  default {
    install(app){
        //因为这个组件是挂载在body上，而store是挂载在#app上，所以直接在组件内使用useStore是不行的
        //通过在外部把store传进去就可以了
        const vNode=createVNode(AudioPlayer,{store})
        let audioDom =document.createElement('div')
        const {APP_SHOW_AUDIO_PLAYER} =import.meta.env
        if(!APP_SHOW_AUDIO_PLAYER){
            audioDom.style.display='none'
        }

        document.body.appendChild(audioDom)
        render(vNode,audioDom)
        console.log(vNode)
        app.config.globalProperties.$audioPlayer={
            play:(id)=>{
                vNode.component.exposed.playMusic(id)
            },
            pause:()=>{
                vNode.component.exposed.pauseMusic()
            }
        }
    }
}