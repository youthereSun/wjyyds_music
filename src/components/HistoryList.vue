<template>
  <div class="app-history-list-warpper">
    <div class="app-history-list-item"  @click="playHistoryMusic(item)" v-for="item in $store.state.playerStore.playlist" :key="item.id">
      <div class="app-history-name">{{item. musicName }}
        <fire-outlined class="playing" v-show="item.id==$store.state.playerStore.playingMusic.id"/>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: "HistoryList"
}
</script>
<script setup>
import {FireOutlined} from '@ant-design/icons-vue';

import {useStore} from 'vuex'
import {getCurrentInstance} from 'vue'

const store = useStore()
const {proxy} =getCurrentInstance()

const playHistoryMusic=(item)=>{
  const c=store.state.playerStore.playingMusic
  const s=store.state.playerStore.isPlay
  //当前正在播放，不作处理
  if(item.id==c.id&&s==true) return
  let payload={
    key:'playingMusic',
    value:item
  }
  store.commit('playerStore/updateState',payload)
  const payload1 = {
    key: 'isPlay',
    value: true
  }
  store.commit('playerStore/updateState', payload1)
  let src=`https://music.163.com/song/media/outer/url?id=${item.id}.mp3`
  proxy.$audioPlayer.play(src)

}
</script>

<style scoped lang="less">
.app-history-list-warpper {
  max-height: 200px;
  width: 100%;
  cursor: pointer;
  overflow: scroll;

  .app-history-list-item {
    img {
      width: 20px;
      height: 20px;
    }

    display: flex;
    align-items: end;
  }

  .app-history-name {
    width: 100%;
    font-size: 12px;
    padding: 5px 0;
    border-bottom: 1px solid @mainColor;

    .playing {
      color: #FF5722;
    }
  }
}

</style>