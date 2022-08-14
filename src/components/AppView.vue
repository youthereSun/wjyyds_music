<template>
  <div class="app-view">
    <router-view #default="{route,Component}">
<!--      <transition enter-active-class="animate__animated animate__fadeIn">-->
        <keep-alive :include="['home']">
          <component :is="Component"/>
        </keep-alive>
<!--      </transition>-->
    </router-view>
  </div>
</template>

<script>
export default {
  name: "AppView"
}
</script>

<style scoped lang="less">
.app-view {
  height: calc(100% - 80px - 80px);
  width: 80%;
  background: white;
  position: absolute;
  top: 80px;
  right: 0;
  overflow-y: scroll;
}

</style>