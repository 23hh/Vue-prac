<template>
  <div>
    <Post :data="data[0]"/>
    <Post/>
    <Post/>
  </div>
</template>

<script>
import Post from './GramPost.vue'

export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  components: {
    Post,
  }
  
}
</script>

<style>

</style>