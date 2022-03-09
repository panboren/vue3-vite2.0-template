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
