<template>
  <div @click="fire" :class="filter + ' filter-item'" :style="`background-image:url(${img})`">
    <slot></slot>
    
  </div>
</template>

<script>
export default {
    name : 'filterBox',
    methods : {
        fire(){
            this.emitter.emit('clickFilter', this.filter)
        }
    },
    props : {
        img : {
            type : String,
        },
        filter : {
            type : Array,
            default () {
                return []
            }
        }
    }
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>