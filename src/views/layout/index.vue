<template>
  <div id="app-layout">
    <div class="app-warpper">
      <app-header v-model:keyword="keyword" @handleSubmitSearch="goSearchPage" />
      <app-menu @handleRouterChange="(path)=>$router.push({path})"/>
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
import {nextTick, onMounted, ref} from 'vue'
import {useRouter,useRoute} from 'vue-router'
import AppHeader from "../../components/AppHeader.vue";
import AppMenu from "../../components/AppMenu.vue";
import AppMusicPlayer from "../../components/AppMusicPlayer.vue";
import AppView from "../../components/AppView.vue";
const route=useRoute()
const router=useRouter()
const appBackground = ref('#00BCD4')
const keyword=ref('')

onMounted(()=>{
  setTimeout(()=>{
    const {keyword:k} =route.query
    keyword.value=k
  },1000)
})
const goSearchPage=()=>{
  if(!keyword.value){return}
  if(router.currentRoute.value.path==='/searchResult'){
    router.replace({
      path:'/searchResult',
      query:{
        keyword:keyword.value
      }
    })
    return
  }
  router.push({
    path:'/searchResult',
    query:{
      keyword:keyword.value
    }
  })
}


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
