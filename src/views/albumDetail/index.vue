<template>
  <div class="app-album-detail">
    <AlbumCover @handlePlayAll="addAlbumToList" :coverInfo="state.albumInfo"  />
    <div class="app-album-song-list" >
      <song-card @click="startPlay(item)" :info="item" v-for="item in state.playList" />
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
}
</script>
<script setup>
import {useRoute} from 'vue-router'
import {onMounted, reactive,getCurrentInstance} from "vue";
import {getPlayListDetail,getPlayListTrackAll,checkSongValidity} from "../../api/api";
import SongCard from "./components/SongCard.vue";
import AlbumCover from "./components/AlbumCover.vue";
import {useStore} from 'vuex'
 const route = useRoute()
const store=useStore()
const {proxy} =getCurrentInstance()

const state = reactive({
  playList: [],
  albumInfo:{}
})

onMounted(() => {
  const {id} = route.query
  getDetail(id)
  getTrackAll(id)
})

const getDetail = async (id) => {
  let res = await getPlayListDetail(id)
  state.albumInfo = res.playlist
}

const getTrackAll=async (id)=>{
  let res=await getPlayListTrackAll(id)
  state.playList=res.songs

}


//将当前歌单加入playList
const addAlbumToList=()=>{
  if(state.playList.length==0) return
  let newList=[]
  state.playList.forEach(item=>{
    const {id} =item
    const musicName = item?.al?.name
    const musicCover=item?.al?.picUrl
    const singer=item?.ar[0]?.name
    newList.push({id,musicCover,musicName,singer})
  })
  let payload={
    key:'playlist',
    value:newList
  }
  store.commit('playerStore/updateState',payload)

  let payload1={
    key:'isPlay',
    value:true
  }
  store.commit('playerStore/updateState',payload1)
  let payload2={
    key:'playingMusic',
    value:newList[0]
  }
  store.commit('playerStore/updateState',payload2)
  let src=`https://music.163.com/song/media/outer/url?id=${newList[0].id}.mp3`
  proxy.$audioPlayer.play(src)
}

const startPlay=async (item)=>{
  const {id} =item
  const musicName = item?.al?.name
  const musicCover=item?.al?.picUrl
  const singer=item?.ar[0]?.name


  const res=await checkSongValidity(id)
  if(res.success){
    //更新当前播放信息
    const payload={key:"playingMusic",value:{musicName,musicCover,singer,id}}
    store.commit('playerStore/updateState',payload)
    //更新播放状态
    let payload1={key:'isPlay',value:true}
    store.commit('playerStore/updateState',payload1)
    //加入历史记录,需要判重
    let music={musicName,musicCover,singer,id}
    store.commit('playerStore/addToPlaylist',music)

    proxy.$audioPlayer.pause()
    let src=`https://music.163.com/song/media/outer/url?id=${id}.mp3`
    proxy.$audioPlayer.play(src)
  }

}

</script>

<style scoped lang="less">
.app-album-detail{
  .app-album-song-list{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

}

</style>