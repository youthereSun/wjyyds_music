<template>
  <div id="app-home">
    <personalized ref="personalizedModule" @handleClickAlbum="goAlbumDetailPage" :albums="state.personalized" />


  </div>
</template>

<script>
export default {
  name: "index",
}
</script>
<script setup>
import {onMounted, reactive,ref} from "vue";
import {getPersonalized} from '../../api/api'
import {useRouter} from 'vue-router'
import Personalized from "./components/Personalized.vue";

const router=useRouter()
const personalizedModule=ref(null)
const state = reactive({
  personalized: []
})

onMounted(() => {
  getPersonal()
})

const getPersonal = async () => {
  personalizedModule.value.showLoading()
  const res = await getPersonalized()
  personalizedModule.value.hideLoading()
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