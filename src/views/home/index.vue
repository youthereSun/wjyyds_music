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
  getHot()
})

const getHot = async () => {
  const res = await getPersonalized()
  const {result} = res
  state.personalized = result

}

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