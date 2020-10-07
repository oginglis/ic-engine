<template>
  <div id="wrapper">
    <ThreeTest />
  </div>
</template>

<script>
import ThreeTest from '@/components/ThreeTest.vue'

export default {
  name: 'Home',
  components: {
    ThreeTest
  }
}
</script>

<style>
#wrapper {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
