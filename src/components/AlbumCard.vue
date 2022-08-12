<template>
  <div class="app-album-card">
    <img class="app-album-card-pic" ref="lazyImg" :lazy_src="albumInfo.picUrl">
    <p class="app-album-card-name">{{ albumInfo.name }}</p>
    <!--      <p>{{albumInfo.playCount}}</p>-->
    <!--      <p>{{albumInfo.id}}</p>-->
  </div>
</template>

<script>
export default {
  name: "AlbumCard"
}
</script>
<script setup>
import { ref} from 'vue'
import {useLazyLoadImg} from "../hooks";

defineProps({
  albumInfo: {
    type: Object,
    default: () => {}
  }
})

const lazyImg = ref(null)
useLazyLoadImg(lazyImg)

</script>

<style scoped lang="less">
.app-album-card {
  display: inline-block;
  width: 200px;
  margin: 10px;
  cursor: pointer;

  .app-album-card-pic {
    width: 200px;
    height: 200px
  }

  .app-album-card-name {
    color: @mainGray;
    font-size: 12px;
    padding: 10px 0;
  }
}

</style>