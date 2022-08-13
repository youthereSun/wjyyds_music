<template>
  <div id="app-home">
    <personalized @handleClickAlbum="goAlbumDetailPage" :albums="state.personalized" />


  </div>
</template>

<script>
export default {
  name: "index",
}
</script>
<script setup>
import {onMounted, reactive} from "vue";
import {getPersonalized} from '../../api/api'
import {useRouter} from 'vue-router'
import Personalized from "./components/Personalized.vue";
const router=useRouter()
const state = reactive({
  personalized: []
})

onMounted(() => {
  getPersonal()
})

const getPersonal = async () => {
  const res = await getPersonalized()
  const {result} = res
  state.personalized = result

}

//进入歌单详情页面，封面和歌曲列表
const goAlbumDetailPage=(id)=>{
  router.push({
    path:'/albumDetail',
    query:{
      id
    }
  })
}


</script>

<style scoped lang="less">
#app-home {

}

</style>