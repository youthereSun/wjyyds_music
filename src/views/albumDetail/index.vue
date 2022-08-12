<template>
  <div class="app-album-detail">
    <AlbumCover :coverInfo="state.albumInfo" />
    <div class="app-album-song-list" >
      <song-card :info="item" v-for="item in state.playList" />
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
import {onMounted, reactive} from "vue";
import {getPlayListDetail,getPlayListTrackAll} from "../../api/api";
import SongCard from "./components/SongCard.vue";
import AlbumCover from "./components/AlbumCover.vue";
const route = useRoute()

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