<template>
    <div class="app-album-cover">
      <img class="app-play-album-all" @click="playCurrentAlbum" src="../../../assets/images/play.png">
      <img class="app-album-cover-img" :src="coverInfo.coverImgUrl">
      <div class="app-album-cover-dec">
        <div class="app-album-cover-name">{{coverInfo.name}}</div>
        <div class="app-album-cover-bottom">{{coverInfo.description}}</div>
      </div>
    </div>
</template>

<script>
export default {
  name: "AlbumCover"
}
</script>
<script setup>
defineProps({
  coverInfo:{
    type:Object,
    default:()=>{}
  }
})

const emits=defineEmits(['handlePlayAll'])
const playCurrentAlbum=()=> {
  emits('handlePlayAll')
}
</script>

<style scoped lang="less">
.app-album-cover{
  height: 200px;
  display: flex;
  margin-bottom: 20px;
  padding: 10px;
  position: relative;

  .app-play-album-all{
    position:absolute;
    width:40px;
    height: 40px;
    left: 20px;
    bottom: 0;
  }
  .app-album-cover-img{
    width: 200px;
    height: 200px;
  }

  .app-album-cover-dec{
    position:relative;
    height: 200px;
    flex: 1;
    background: #72a8a8;
    padding:20px;
    .app-album-cover-name{
      font-weight: bold;
      font-size: 20px;
    }
    .app-album-cover-bottom{
      position:absolute;
      bottom:20px;
    }
  }
}

</style>