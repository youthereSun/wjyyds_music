import {createApp} from 'vue'
import AnimateLoading from './index.vue'
let vNode
let div
const animateLoading={
    show:(el)=>{
        vNode=createApp(AnimateLoading)
        div=document.createElement('div')
        div.id='app-animate-loading-warp'
        el.appendChild(div)
        vNode.mount(div)
    },
    hide:()=>{
        div.remove()
        vNode.unmount()
    }
}

export default animateLoading