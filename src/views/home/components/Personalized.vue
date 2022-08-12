<template>
  <div class="module-personalized">
    <album-title>个人推荐</album-title>
    <div class="album-cards">
      <album-card @click="getDetailById(item.id)" :albumInfo="item" :key="item.id" v-for="item in albums"/>
    </div>

  </div>
</template>

<script>
export default {
  name: "Personalized",
}
</script>
<script setup>
import AlbumCard from "../../../components/AlbumCard.vue";

defineProps({
  albums: {
    type: Array,
    default: () => []
  }
})

const emits = defineEmits(['handleClickAlbum'])

const getDetailById=(id)=>{
  emits('handleClickAlbum',id)
}
</script>

<style scoped lang="less">
.module-personalized {
  width: 100%;

  .album-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
}

</style>