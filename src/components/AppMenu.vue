<template>
  <div class="app-menu">
    <div class="app-menu-item" :key="item.id" v-for="item in menuItem">
      <div class="app-menu-title">{{ item.title }}</div>
      <div class="app-menu-link" :key="child.id" v-for="child in item.children">{{ child.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppMenu"
}
</script>
<script setup>
import {CloudOutlined,MinusOutlined} from '@ant-design/icons-vue';

const menuItem = [
  {
    id: 1,
    title: 'Hi',
    children: [
      {
        id: 1,
        name: '主页',
        path: '/',
      }
    ]
  },
  {
    id: 2,
    title: 'Explore',
    children: [
      {
        id: 1,
        name: '乐库',
        path: '/',
      },
      {
        id: 2,
        name: '视频',
        path: '/',
      },
      {
        id: 3,
        name: '电台',
        path: '/',
      },
      {
        id: 4,
        name: '歌单',
        path: '/',
      },
    ]
  }
]


</script>
<style scoped lang="less">
.app-menu {
  width: 20%;
  height: calc(100% - 80px);
  background: white;
  border-right: 1px @mainGray solid;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  .app-menu-item{
    margin-bottom:20px;
    padding:0 10px ;

    .app-menu-title {
      height: 30px;
      line-height: 30px;
      font-size: 20px;
      padding-left: 20px;
      margin-bottom: 10px;
      font-weight: bold;
    }

    .app-menu-link {
      cursor: pointer;
      height: 30px;
      line-height: 30px;
      font-size: 16px;
      padding-left: 40px;
      border-radius: 5px;

        &:hover{
          background: @mainGray;
          color:@mainColor;
          transition: 1s;
      }
    }
  }



}

</style>