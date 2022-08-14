<template>
    <p class="app-album-title">
      <slot name="text" />
      <slot name="action" />
    </p>
</template>

<script>
export default {
  name: "AlbumTitle"
}
</script>

<style scoped lang="less">
.app-album-title{
  padding:20px 30px;
  font-size: 18px;
  font-weight: bold;
  color:@mainColor;
  display:flex;
  justify-content:space-between;
}

</style>