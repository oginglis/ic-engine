<template>
  <div id="wrapper">
    <Nav/>
    <ThreeTest />
  </div>
</template>

<script>
import ThreeTest from '@/components/ThreeTest.vue'
import Nav from '@/components/Nav.vue'
export default {
  name: 'Home',
  components: {
    ThreeTest,
    Nav
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
  width: 100vw;
  overflow: hidden;
}
</style>
