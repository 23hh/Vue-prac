<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input @input="search($event.target.value)" placeholder="🔍" />
    <div class="post-header" v-for="i in follower" :key="i">
      <div class="profile" :style="{backgroundImage: `url(${i.image})`}"></div>
      <span class="profile-name">{{i.name}}</span>{{onee}}
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'
// import { useStore } from 'vuex'

export default {
  name: 'my-page',
  props: {
    one: Number
  },
  setup() {
    let follower = ref([]);
    let followerOriginal = ref([]);

    onMounted(() => {
      axios.get('./follower.json').then((a) => {
        follower.value = a.data;
        followerOriginal.value = [...a.data];
      })
    });

    function search(params) {
      let newFollower = followerOriginal.value.filter((a) => {
        return a.name.indexOf(params) !== -1;
      });
      follower.value = [...newFollower];
    }

    return {
      follower,
      search
    }
  }
}
</script>

<style>
</style>
