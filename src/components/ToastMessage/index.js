import ToastMessage from './index.vue'
import {createVNode,render} from 'vue'

let container
let vNode
const toastMessage={
    show:(item)=>{
        if(!container){
            container=document.createElement('div')
            container.id='wjyyds-toast-message-warp'
            const initOption={}
            vNode = createVNode(ToastMessage,initOption)
            render(vNode,container)
            document.body.appendChild(container)
        }
        const id=new Date().getTime()
        vNode.component.exposed.addMessage({...item,id})
    }
}

export default toastMessage

// toastMessage.show({
//     content:`内容`,
//     duration:5000,
//     color:'white',
//     autoClose:true,
//     onClose:()=>{
//         console.log('callback:autoClosed')
//     }
// })