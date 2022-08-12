<template>
    <p class="app-album-title">
      <slot />
    </p>
</template>

<script>
export default {
  name: "AlbumTitle"
}
</script>

<style scoped lang="less">
.app-album-title{
  padding:10px 15px;
  font-size: 18px;
  font-weight: bold;
  color:@mainColor;
}

</style>