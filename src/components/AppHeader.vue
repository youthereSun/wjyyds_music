<template>
  <div class="app-header">
    <div class="header-navigator">
      <left-outlined @click="router.back()" class="header-navigator-icon"/>
      <right-outlined @click="router.forward()" class="header-navigator-icon"/>
    </div>
    <div class="header-search">
      <a-input class="header-search-input" placeholder="输入搜索" @pressEnter="onSubmitKeyword" :value="keyword" @change="onKeywordChange"/>
    </div>
    <div class="header-login-block">
      <frown-outlined @click="showAppInfo" class="header-unlogin"/>
    </div>

  </div>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>
<script setup>
import {ref,onMounted,getCurrentInstance} from 'vue'
import {LeftOutlined,FrownOutlined, RightOutlined, RobotOutlined} from '@ant-design/icons-vue';
import {useRouter,useRoute} from 'vue-router'
const route =useRoute()
const router = useRouter()
const {proxy} =getCurrentInstance()
defineProps({
  keyword: {
    type: String,
    default: ''
  }
})


const emits = defineEmits(['update:keyword','handleSubmitSearch'])

const onKeywordChange = (e) => {
  emits('update:keyword',e.target.value)
}

const onSubmitKeyword=(e)=>{
emits('handleSubmitSearch')
}


const showAppInfo=()=>{
  proxy.$toastMessage.show({
    content:`code by [wjyyds],design by [Jsenny]`,
    autoClose:false,
    color:'#00BCD4',
    onClose:()=>{
      console.warn('code by [wjyyds],design by [Jsenny]')
    }
  })

}
</script>

<style scoped lang="less">
.app-header {
  position: relative;
  height: 80px;
  width: 100%;
  background: white;
  border-bottom: 1px @mainGray solid;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-navigator {
    width: 100px;
    display: flex;
    justify-content: space-around;

    .header-navigator-icon {
      font-size: 14px;
      color: @mainColor;
      font-weight: bold;
    }
  }

  .header-search {
    width: 40%;

    .header-search-input {
      border-radius: 20px;
      text-align: center;
      color: @mainGray;
      font-weight: bold;
    }
  }

  .header-login-block {
    width: 100px;

    .header-unlogin {
      font-size: 20px;
      cursor: pointer;
      color: @mainGray
    }

  }
}
</style>
<style scoped>
:deep(.ant-input:focus, .ant-input-focused) {
  box-shadow: none;
}
</style>
