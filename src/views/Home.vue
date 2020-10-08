<template>
  <div id="wrapper">
    <Nav  @explode="explodeToggle" @simulate="simulateToggle" :ex="isExploded" :sim="isSimulating" />
    <ThreeTest :exploded="isExploded" :simulating="isSimulating"/>
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
  },
  data:function () {
    return {
			isExploded: false,
			isSimulating: false,
    }
	},
	watch: {
		isExploded: function (val){
			if (val && this.isSimulating == true) {
				this.isSimulating = false;
				this.isExploded = false;
			}
		},
		isSimulating: function (val){
			if (val && this.isExploded == true) {
				this.isExploded = false;
			}
		}
	},
  methods: {
    explodeToggle: function () {
      this.isExploded = !this.isExploded;
    },
    simulateToggle: function () {
      this.isSimulating = !this.isSimulating;
    }
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
}
</style>
