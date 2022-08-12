<template>
  <div class="app-header">
    <div class="header-navigator">
      <left-outlined @click="router.back()" class="header-navigator-icon" />
      <right-outlined @click="router.forward()" class="header-navigator-icon"/>
    </div>
    <div class="header-search">
      <a-input class="header-search-input" placeholder="输入搜索" v-model="keyword" />
    </div>
    <div class="header-login-block">
      <robot-outlined  class="header-unlogin" />
    </div>

  </div>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>
<script setup>
import {ref} from 'vue'
import { LeftOutlined, RightOutlined,RobotOutlined } from '@ant-design/icons-vue';
import {useRouter} from 'vue-router'
const router=useRouter()
const keyword=ref('')

</script>

<style scoped lang="less">
.app-header{
  position:relative;
  height: 80px;
  width: 100%;
  background: white;
  border-bottom: 1px @mainGray solid;
  display:flex;
  justify-content: space-between;
  align-items: center;
  .header-navigator{
    width: 100px;
    display: flex;
    justify-content: space-around;
      .header-navigator-icon{
        font-size: 14px;
        color:@mainColor;
        font-weight:bold;
      }
  }
  .header-search{
    width: 40%;
    .header-search-input{
      border-radius: 20px;
      text-align: center;
      color:@mainGray;
      font-weight: bold;
    }
  }
  .header-login-block{
    width:100px;
    .header-unlogin{
      font-size: 30px;
      cursor: pointer;
      color:@mainGray
    }

  }
}
</style>
<style scoped>
:deep(.ant-input:focus, .ant-input-focused){
  box-shadow: none;
}
</style>
