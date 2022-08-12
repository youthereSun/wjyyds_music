<template>
<div>
  home
</div>
</template>

<script>
export default {
  name: "index"
}
</script>
<script setup>
import {onMounted} from "vue";
import {searchByKeyword} from '../../api/api'
onMounted(()=>{
  getSearchRes()

})

const getSearchRes=async ()=>{
  const keywords='海阔天空'
  let res=await searchByKeyword({keywords})
  debugger
}
</script>

<style scoped>

</style>