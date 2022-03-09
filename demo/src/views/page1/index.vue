<script setup>
import { computed } from 'vue'
import {useStore} from 'vuex'
let store=useStore()
 let name=computed(()=>store.state.page1.name)
</script>

<template>
  <div class="page1">
     <div class="main">
       {{name}}
     </div>
      <el-row class="mb-4">
          <el-button>Default</el-button>
          <el-button type="primary">Primary</el-button>
          <el-button type="success">Success</el-button>
          <el-button type="info">Info</el-button>
          <el-button type="warning">Warning</el-button>
          <el-button type="danger">Danger</el-button>
          <el-button>中文</el-button>
      </el-row>
  </div>
</template>

<style scoped lang="scss">
  .page1{
    width: 100%;
    height: 100%;
    .main{
      font-size: 20px;
      color: red;
    }
  }
</style>
