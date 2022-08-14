<template>
  <div class="app-song-card">
    <img class="app-song-card-img" ref="lazyImg" :lazy_src="info.al.picUrl"/>
    <div class="app-song-name">
      <p>{{ info.name }}</p>
      <p>{{ info.ar[0].name }}</p>
    </div>
    <!--    <p> {{ info.id }}</p>-->
  </div>
</template>

<script>
export default {
  name: "SongCard"
}
</script>
<script setup>
import {useLazyLoadImg} from "../../../hooks";
import {ref} from "vue";

const lazyImg = ref(null)
useLazyLoadImg(lazyImg)
defineProps({
  info: {
    type: Object,
    default: {}
  }
})
</script>
<style scoped lang="less">
.app-song-card {
  position: relative;
  margin-bottom: 20px;
  cursor: pointer;

  .app-song-card-img {
    width: 200px;
    height: 200px;
  }

  .app-song-name {
    position: absolute;
    bottom: 0;
    width: 100%;
    backdrop-filter: blur(10px);
    color: white;
    padding: 10px 10px;
  }

}

</style>