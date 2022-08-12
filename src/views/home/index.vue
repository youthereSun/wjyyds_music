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
  const keywords='海阔天空'
  searchByKeyword({keywords},(res)=>{
    debugger
  })
})
</script>

<style scoped>

</style>