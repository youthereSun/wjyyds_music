<template>
  <div id="app-layout">
    <div class="app-warpper">
      <app-header/>
      <app-menu/>
      <app-view/>
      <app-music-player/>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
}
</script>
<script setup>
import {ref} from 'vue'
import AppHeader from "../../components/AppHeader.vue";
import AppMenu from "../../components/AppMenu.vue";
import AppMusicPlayer from "../../components/AppMusicPlayer.vue";
import AppView from "../../components/AppView.vue";

const appBackground = ref('#00BCD4')

</script>

<style scoped lang="less">
#app-layout {
  width: 100vw;
  height: 100vh;
  min-width: 1080px;
  background: v-bind(appBackground);
  position: relative;

  .app-warpper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 95%;
    height: 90%;
    border-radius: 20px;
    overflow: hidden;
  }
}

</style>
