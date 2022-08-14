<template>
  <audio ref="audioRef"  controls>
    <source ref="sourceRef" >
    您的浏览器不支持 audio 元素。
  </audio>
</template>

<script>
export default {
  name: "index"
}
</script>
<script setup>
import {onMounted, ref} from 'vue'
import {useStore} from 'vuex'
import {checkSongValidity, getSongUrl} from "../../api/api";
const audioRef=ref(null)
const sourceRef=ref(null)
//const store = useStore()

const props =defineProps({
  store:{
    type:Object
  }
})
const {store} =props

const playMusic=async (id)=>{
  if(id){
    let res=await getSongUrl(id)
    let src=res.data[0].url
    sourceRef.value.src=src
    audioRef.value.load()
  }
  audioRef.value.play()
}

const pauseMusic=()=>{
  audioRef.value.pause()
}

onMounted(()=>{


  audioRef.value.addEventListener("ended",async function fn() {   //当播放完一首歌曲时也会触发
    let current = store.state.playerStore.playingMusic
    let list =store.state.playerStore.playlist
    //找到刚播放完的音乐在list中位置
    let index= list.findIndex(v=>v.id==current.id)
    //如果是最后一首，停止播放
    if(index==list.length-1){
      let payload={
        key:'isPlay',
        value:false
      }
      store.commit('playerStore/updateState',payload)
    }else{
      let next=list[index+1]
      let payload={
        key:'playingMusic',
        value:next
      }
      store.commit('playerStore/updateState',payload)

      playMusic(next.id)
    }
  });
})

defineExpose({
  playMusic,
  pauseMusic
})


</script>

<style scoped>

</style>