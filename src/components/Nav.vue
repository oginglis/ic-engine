<template>
  <div id="nav">
      <p class=nav-title>ME2 Thermodynamics Lab</p>
      <div class="nav-button-wrapper">
          <p class="nav-button" @click="toggleExplode" v-if="!ex">explode model</p>
					<p class="nav-button" @click="toggleExplode" v-if="ex">un-explode model</p>
          <p class="nav-button" @click="toggleSimulation" v-if="!sim">start simulation</p>
          <p class="nav-button" @click="toggleSimulation" v-if="sim">stop simulation</p>
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
    font-size: 15px;
    text-align: center;
    line-height: 30px;
    margin-left: 30px;
    padding: 0px 5px;
    color: white;
    border-radius: 12px;
    background-color: 	#002366;
    cursor: grab;
}
</style>
