<template>
  <div class="app-search-result" ref="searchResult">
    <album-title>
      <template #text> 搜索结果</template>
      <template #action>
        <play-circle-outlined   @click="playAll"/>
      </template>
    </album-title>
    <div class="app-search-song-list" ref="playListContainer">
      <song-card @click="startPlay(item)" v-for="item in state.playList" :key="item.id" :info="item" />
    </div>
  </div>
</template>

<script>
export default {
  name: "searchResult",
}
</script>
<script setup>
import { PlayCircleOutlined } from '@ant-design/icons-vue';
import {getCurrentInstance, onMounted, reactive, ref, watch} from 'vue'
import {useRoute,useRouter} from 'vue-router'
import {checkSongValidity, searchByKeyword} from "../../api/api";
import SongCard from "./components/SongCard.vue";
import animateLoading from "../../components/AnimateLoading";
import {useStore} from "vuex";
const store = useStore()
const route=useRoute()
const {proxy} = getCurrentInstance()

const keyword=ref('')
const state=reactive({
  playList:[]
})
const searchResult=ref(null)
onMounted(()=>{
  const {keyword:s} =route.query
  keyword.value=s
  getResult()
})

watch(route,(oldVal,newVal)=>{
  const {keyword:s} =route.query
  keyword.value=s
  getResult()

})

const getResult=async ()=>{
  animateLoading.show(searchResult.value)
  let res=await searchByKeyword(keyword.value)
  animateLoading.hide()
  state.playList=res.result?.songs
}

const playAll=()=>{
  //将当前歌单加入playList
    if (state.playList.length == 0) return
    let newList = []
    state.playList.forEach(item => {
      const {id} = item
      const musicName = item?.name
      const musicCover = item?.al?.picUrl
      const singer = item?.ar[0]?.name
      newList.push({id, musicCover, musicName, singer})
    })
    let payload = {
      key: 'playlist',
      value: newList
    }
    store.commit('playerStore/updateState', payload)

    let payload1 = {
      key: 'isPlay',
      value: true
    }
    store.commit('playerStore/updateState', payload1)
    let payload2 = {
      key: 'playingMusic',
      value: newList[0]
    }
    store.commit('playerStore/updateState', payload2)
    proxy.$audioPlayer.play(newList[0].id)

}

const startPlay = async (item) => {
  const {id} = item
  const musicName = item?.name
  const musicCover = item?.al?.picUrl
  const singer = item?.ar[0]?.name


  const res = await checkSongValidity(id)
  if (res.success) {
    //更新当前播放信息
    const payload = {key: "playingMusic", value: {musicName, musicCover, singer, id}}
    store.commit('playerStore/updateState', payload)
    //更新播放状态
    let payload1 = {key: 'isPlay', value: true}
    store.commit('playerStore/updateState', payload1)
    //加入历史记录,需要判重
    let music = {musicName, musicCover, singer, id}
    store.commit('playerStore/addToPlaylist', music)

    proxy.$audioPlayer.pause()
    proxy.$audioPlayer.play(id)
  }else {
    console.log('Error：',res.message)
  }
}
</script>

<style scoped lang="less">
.app-search-result{

  .app-search-song-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

}

</style>