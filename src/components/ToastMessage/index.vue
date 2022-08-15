<template>
  <div class="wjyyds-toast-message-container" v-show="state.messageList.length>0">
    <transition-group enter-active-class="animate__animated animate__zoomIn" leave-active-class="animate__animated animate__hinge">
      <div class="wjyyds-toast-message-item" :key="item.id" v-for="item in state.messageList" :style="{background:item.color||'rgba(255, 255, 255, 0.56'}">
        <div>{{item.content}} <span><heart-filled v-show="!item.autoClose" @click="removeMessage(item)" class="toast-message-close"/></span></div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>
<script setup>
import 'animate.css'
import {  HeartFilled } from '@ant-design/icons-vue';

import {reactive} from 'vue'
const state=reactive({
  messageList:[].reverse()
})

//content duration onClose  autoClose


const addMessage=(messageItem)=>{
  state.messageList.push(messageItem)
  const {autoClose,duration,onClose} =messageItem
  if(autoClose){
    setTimeout(()=>{
     let index= state.messageList.findIndex(v=>v.id==messageItem.id)
      state.messageList.splice(index,1)
      onClose()
    },duration)
  }

}

const removeMessage=(item)=>{
  const {id,onClose} =item
  let index = state.messageList.findIndex(v=>v.id==id)
  state.messageList.splice(index,1)
  onClose()

}

defineExpose({
  addMessage
})

</script>

<style scoped lang="less">
.wjyyds-toast-message-container{
  display:flex;
  flex-direction:column;
  max-height: 50vh;
  overflow:auto;
  .wjyyds-toast-message-item{
    text-align: center;
    min-width:200px;
    padding: 10px;
    backdrop-filter: blur(10px);
    margin:10px;
    box-shadow:@mainGray 0px 0px 5px;
    .toast-message-close{
      display: inline-block;
      padding: 0px 10px;
      color:@mainColor;
      cursor: pointer;
    }
  }
}

</style>

<style>
#wjyyds-toast-message-warp{
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%,0%);
}
</style>