<template>
 <div class="app-view">
   <router-view />
 </div>
</template>

<script>
export default {
  name: "AppView"
}
</script>

<style scoped lang="less">
.app-view{
  height: calc(100% - 80px - 80px);
  width: 80%;
  background: white;
  position: absolute;
  top: 80px;
  right: 0;
  overflow-y: scroll;
}

</style>