<template>
  <div class="app-history-list-warpper">
    <div class="app-history-list-item" v-for="{musicName,id,singer,musicCover} in $store.state.playerStore.playlist" :key="id" >
    <div class="app-history-name">{{ musicName }} <fire-outlined class="playing" v-show="id==$store.state.playerStore.playingMusic.id"/></div>
    </div>
  </div>

</template>

<script>

export default {
  name: "HistoryList"
}
</script>
<script setup>
import {FireOutlined } from '@ant-design/icons-vue';

import {useStore} from 'vuex'
const store=useStore()
</script>

<style scoped lang="less">
.app-history-list-warpper{
  max-height: 200px;
  width: 100%;
  cursor: pointer;
  .app-history-list-item{
    img{
      width: 20px;
      height: 20px;
    }
    display:flex;
    align-items: end;
  }
  .app-history-name{
    width: 100%;
    font-size: 12px;
    padding: 5px 0;
    border-bottom: 1px solid @mainColor;
    .playing{
      color: @mainColor;
    }
  }
}

</style>