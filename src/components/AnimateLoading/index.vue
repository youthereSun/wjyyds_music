<template>
    <div class="app-animate-loading">
      <component :animateColor="animateColor"  :is="A1" ></component>
    </div>
</template>

<script>
export default {
  name: "index.vue"
}
</script>
<script setup>
import A1 from "./animates/A1.vue";
import {ref} from "vue";
const animateColor = ref('#00BCD4')
</script>

<style scoped lang="less">
.app-animate-loading{
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  backdrop-filter: blur(8px);

}

</style>