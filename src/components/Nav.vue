<template>
  <div id="nav">
      <h1 class=nav-title>ME2 Thermodynamics Lab</h1>
      <div class="nav-button-wrapper">
          <h1 class="nav-button" @click="toggleExplode" v-if="!ex">explode model</h1>
					<h1 class="nav-button" @click="toggleExplode" v-if="ex">un-explode model</h1>
          <h1 class="nav-button" @click="toggleSimulation" v-if="!sim">start simulation</h1>
          <h1 class="nav-button" @click="toggleSimulation" v-if="sim">stop simulation</h1>
      </div>
  </div>
</template>

<script>


export default {
	name: 'Nav',
	props: {
		ex: Boolean,
		sim: Boolean,
	},
  methods: {
		toggleExplode: function () {
			this.$emit('explode');
			this.ex = !this.ex
		},
		toggleSimulation: function (){
			this.$emit('simulate');
			this.sim = !this.sim
		}
  }
}
</script>

<style>
#nav {
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0px 20px;
  box-sizing: border-box;

}

.nav-title{ 
    margin: 20px;
}

.nav-button-wrapper{
    display: flex;
}

.nav-button {
    font-size: 20px;
    text-align: center;
    line-height: 55px;
    margin-left: 30px;
    padding: 0px 15px;
    color: white;
    border-radius: 12px;
    background-color: 	#002366;
    cursor: grab;
}
</style>
