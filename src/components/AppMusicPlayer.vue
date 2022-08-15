<template>
  <div class="app-music-player">
    <div class="song-pic">
      <img v-if="!$store.state.playerStore.playingMusic.musicCover" style="border-radius: 10px"
           src="../assets/images/none.png">
      <img @click="toastMusicInfo" v-else :src="$store.state.playerStore.playingMusic.musicCover">
      <!--      <div class="app-music-info">-->
      <!--        <p>{{$store.state.playerStore.playingMusic.musicName}}</p>-->
      <!--       <p> {{$store.state.playerStore.playingMusic.singer}}</p>-->
      <!--      </div>-->
    </div>
    <div class="music-control-container">
      <backward-outlined @click="playPrv" class="control-button-icon"/>
      <img @click="continuePlay" v-show="!$store.state.playerStore.isPlay" class="control-button"
           src="../assets/images/play.png"/>
      <img @click="pauseMusic" v-show="$store.state.playerStore.isPlay" class="control-button"
           src="../assets/images/pause.png"/>

      <forward-outlined @click="playNext" class="control-button-icon"/>
    </div>
    <div>
      <a-popover v-model:visible="showHistory" trigger="click">
        <template #content>
          <history-list/>
        </template>
        <clock-circle-outlined class="app-music-playlist"/>
      </a-popover>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppMusicPlayer",
}
</script>
<script setup>
import {ref, getCurrentInstance} from 'vue'
import {useStore} from 'vuex'
import HistoryList from "./HistoryList.vue";
import {BackwardOutlined, ForwardOutlined, ClockCircleOutlined} from '@ant-design/icons-vue';
import {getSongUrl} from "../api/api";

const store = useStore()
const {proxy} = getCurrentInstance()

const showHistory = ref(false)

const toastMusicInfo=()=>{
  const {musicName,singer,id}= store.state.playerStore.playingMusic
  proxy.$toastMessage.show({
    content:`[${musicName}],sing by:[${singer}]`,
    duration:5000,
    autoClose:true,
    onClose:()=>{
      getSongUrl(id).then(res=>{
        console.log('下载地址:',res.data[0].url)
      })
      //console.log('callback:autoClosed')
    }
  })
}

const continuePlay = () => {
  if (!store.state.playerStore.playingMusic.musicName) {
    proxy.$toastMessage.show({
      content:`播放列表还没有歌曲，先选个歌`,
      duration:5000,
      color:'#607D8B',
      autoClose:true,
      onClose:()=>{}
    })
    return
  }
  const payload = {
    key: 'isPlay',
    value: true
  }
  store.commit('playerStore/updateState', payload)
  proxy.$audioPlayer.play()
}

//暂停
const pauseMusic = () => {
  const payload = {
    key: 'isPlay',
    value: false
  }
  store.commit('playerStore/updateState', payload)
  proxy.$audioPlayer.pause()
}

//上一首
const playNext = () => {
  let current = store.state.playerStore.playingMusic
  let list = store.state.playerStore.playlist
  if (list.length == 0) {
    proxy.$toastMessage.show({
      content:`播放列表还没有歌曲，先选个歌`,
      duration:5000,
      color:'#607D8B',
      autoClose:true,
      onClose:()=>{}
    })
    return
  }
  //找到刚播放完的音乐在list中位置
  let index = list.findIndex(v => v.id == current.id)
  let next
  //如果是最后一首，重新播放最后一首
  if (index == list.length - 1) {
    // audioRef.value.pause()
    next = current
  } else {
    next = list[index + 1]
  }
  let payload = {
    key: 'playingMusic',
    value: next
  }
  store.commit('playerStore/updateState', payload)
  const payload1 = {
    key: 'isPlay',
    value: true
  }
  store.commit('playerStore/updateState', payload1)
  proxy.$audioPlayer.play(next.id)
}

//下一首
const playPrv = () => {
  let current = store.state.playerStore.playingMusic
  let list = store.state.playerStore.playlist
  if (list.length == 0) {
    proxy.$toastMessage.show({
      content:`播放列表还没有歌曲，先选个歌`,
      duration:5000,
      color:'#607D8B',
      autoClose:true,
      onClose:()=>{}
    })
    return
  }
  //找到刚播放完的音乐在list中位置
  let index = list.findIndex(v => v.id == current.id)
  let prv
  //如果是最后一首，默认播放第一首
  if (index == 0) {
    // audioRef.value.pause()
    prv = list[0]
  } else {
    prv = list[index - 1]
  }
  let payload = {
    key: 'playingMusic',
    value: prv
  }
  const payload1 = {
    key: 'isPlay',
    value: true
  }
  store.commit('playerStore/updateState', payload1)
  store.commit('playerStore/updateState', payload)
  proxy.$audioPlayer.play(prv.id)
}

</script>

<style scoped lang="less">
.app-music-player {
  height: 80px;
  width: 80%;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);

  .song-pic {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: end;
    justify-content: space-between;

    .app-music-info {
      flex: 1;
      font-size: 12px;
      color: slategray;
    }

    img {
      height: inherit;
      width: 50px;
    }
  }

  .music-control-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 20%;
  }

  .control-button-icon {
    font-size: 30px;
    color: @mainColor;
  }

  .app-music-playlist {
    font-size: 20px;
    color: @mainColor;
  }

  .control-button {

    width: 40px;
    height: 40px;
  }
}

</style>