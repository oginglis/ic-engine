<template>
    <div id="container">
      
    </div>
</template>

<script>
import * as Three from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
// import * as TWEEN from '@tweenjs/tween.js';


export default {
  name: 'ThreeTest',
  props: {
    exploded: Boolean,
    simulating: Boolean,
  },
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      controls: null,
      container: null,
      geo: null,
      top: null,
      topLabel: null,
      bottom: null,
      bottomLabel: null,
      screen: null,
      screenLabel: null,
      right: null,
      rightLabel: null,
      left: null,
      leftLabel: null,
      front:null,
      frontLabel: null,
      labelRenderer: null,
      
    }
  },
  methods: {
    scaleCanvas() {
      this.camera.aspect(this.container.clientWidth, this.container.clientHeight);
      this.renderer.setSize( this.container.clientWidth, this.container.clientHeight);
      this.labelRenderer.setSize( this.container.clientWidth, this.container.clientHeight );
      this.camera.updateProjectMatrix();
    },
    init: function() {

      let container = document.getElementById('container');
      this.container = container;
      this.camera = new Three.PerspectiveCamera(70, container.clientWidth/container.clientHeight, 0.25, 20);
      this.camera.position.set( 0, 0, 1 );
      this.scene = new Three.Scene();
      let sceneObj = this.scene;

      this.renderer = new Three.WebGLRenderer({antialias: true});
      this.renderer.setClearColor( 0xC5C5C3 );
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      
      // Change the colour encoding for the renderer
      this.renderer.outputEncoding = Three.sRGBEncoding;
      
      // Attach renderer to the DOM
      container.appendChild(this.renderer.domElement);
      this.controls = new OrbitControls( this.camera, this.renderer.domElement );
      this.controls.maxDistance = 1.5;
      this.controls.minDistance = 1.3;
      this.controls.minAzimuthAngle = 3;
      this.controls.maxAzimuthAngle = 2;
      this.controls.target.set(0,0,0);
      this.controls.enablePan = false;
      this.controls.autoRotate = true;
      this.controls.autoRotateSpeed = 0.1;
      this.controls.update();

      // Add a Light - point light required for materials
      var light = new Three.PointLight( 0xffffff, 10, 100 );
      light.position.set( 1, 5, 20 );
      this.scene.add( light );
      var light2 = new Three.PointLight( 0xffffff, 10, 100 );
      light2.position.set( -4, 5, -20 );
      this.scene.add( light2 );
      var light3 = new Three.PointLight( 0xffffff, 10, 100 );
      light3.position.set( 4, 5, -20 );
      this.scene.add( light3 );
      // Instantiate a loader
      var loader = new GLTFLoader();

      // Label Renderer
      
      this.labelRenderer = new CSS2DRenderer();
      this.labelRenderer.setSize( container.clientWidth, container.clientHeight );
      this.labelRenderer.domElement.style.position = 'absolute';
      this.labelRenderer.domElement.style.top = '0px';
      this.labelRenderer.domElement.style.pointerEvents = 'none';
      container.appendChild( this.labelRenderer.domElement );

    
      var self = this;

      // Load FRONT model
      loader.load(
        // resource URL
        './front.gltf',
        // called when the resource is loaded
        function ( gltf ) {		
          
          gltf.scene.scale.set(.3,.3,.3);
          gltf.scene.position.x = .2;
          var text = document.createElement( 'div' );
					text.className = 'label';
          text.style.color = 'rgb(220,220,220)';
          text.style.fontFamily = 'Avenir';
          text.style.backgroundColor = 'rgb(255, 153, 51';
          text.textContent = 'Click for more information';
          text.style.borderRadius = '0';
          text.style.padding = '10px';
          text.style.opacity = '0';

					self.frontLabel = new CSS2DObject( text );
          self.frontLabel.position.z = .17;
          self.frontLabel.position.x = .1;
          sceneObj.add( gltf.scene);
          sceneObj.add( self.frontLabel);
          self.front = gltf.scene;
        },
        // called while loading is progressing
        function ( xhr ) {
          console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
        function ( error ) {
          console.log(error)
          console.log( 'An error happened ' + error );

        }
      );
      
      
      // Load screen model
      loader.load(
        // resource URL
        './screen.gltf',
        // called when the resource is loaded
        function ( gltf ) {		
          
          gltf.scene.scale.set(.3,.3,.3);
          gltf.scene.position.x = .2;
          sceneObj.add( gltf.scene);
          self.screen = gltf.scene;
        },
        // called while loading is progressing
        function ( xhr ) {
          console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
        function ( error ) {
          console.log(error)
          console.log( 'An error happened ' + error );

        }
      );

      // Load top model
      loader.load(
        // resource URL
        './top.gltf',
        // called when the resource is loaded
        function ( gltf ) {		
           
          gltf.scene.scale.set(.3,.3,.3);
          gltf.scene.position.x = .2;
          sceneObj.add( gltf.scene);
          self.top = gltf.scene;
        },
        // called while loading is progressing
        function ( xhr ) {
          console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
        function ( error ) {
          console.log(error)
          console.log( 'An error happened ' + error );

        }
      );

      // Load right model
      loader.load(
        // resource URL
        './right.gltf',
        // called when the resource is loaded
        function ( gltf ) {		
           
          gltf.scene.scale.set(.3,.3,.3);
          gltf.scene.position.x = .2;
          sceneObj.add( gltf.scene);
          self.right = gltf.scene;
        },
        // called while loading is progressing
        function ( xhr ) {
          console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
        function ( error ) {
          console.log(error)
          console.log( 'An error happened ' + error );

        }
      );

      // Load left model
      loader.load(
        // resource URL
        './left.gltf',
        // called when the resource is loaded
        function ( gltf ) {		
           
          gltf.scene.scale.set(.3,.3,.3);
          gltf.scene.position.x = .2;
          sceneObj.add( gltf.scene);
          self.left = gltf.scene;
        },
        // called while loading is progressing
        function ( xhr ) {
          console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
        function ( error ) {
          console.log(error)
          console.log( 'An error happened ' + error );

        }
      );

      // Load back model
      loader.load(
        // resource URL
        './back.gltf',
        // called when the resource is loaded
        function ( gltf ) {		
           
          gltf.scene.scale.set(.3,.3,.3);
          gltf.scene.position.x = .2;
          sceneObj.add( gltf.scene);
          self.back = gltf.scene;
        },
        // called while loading is progressing
        function ( xhr ) {
          console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
        function ( error ) {
          console.log(error)
          console.log( 'An error happened ' + error );

        }
      );

      // Load bottom model
      loader.load(
        // resource URL
        './bottom.gltf',
        // called when the resource is loaded
        function ( gltf ) {		
           
          gltf.scene.scale.set(.3,.3,.3);
          gltf.scene.position.x = .2;
          sceneObj.add( gltf.scene);
          self.bottom = gltf.scene;
        },
        // called while loading is progressing
        function ( xhr ) {
          console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
        function ( error ) {
          console.log(error)
          console.log( 'An error happened ' + error );

        }
      );

     
    },
    animate: function() {
        requestAnimationFrame(this.animate);
        this.controls.update();
        
        this.renderer.render(this.scene, this.camera);
        this.labelRenderer.render( this.scene, this.camera );
    },
  },
  mounted() {
      this.init();
      this.animate();
  },
  created() {
    window.addEventListener("resize", this.scaleCanvas);
  },
  destroyed() {
    window.removeEventListener("resize", this.scaleCanvas);
  },
  watch: {
    exploded: function(newVal) { // watch it
      if (newVal == true) {
        console.log(this.top);
        this.top.position.y = .2;
        this.right.position.x = .4;
        this.bottom.position.y = -.2;
        this.left.position.x = 0;
        this.screen.position.z = .2;

        // Reveal all labels
        var allLabels3 = [...document.querySelectorAll('.label')];
        allLabels3.forEach((label) => {
          label.style.opacity = "1";
        });

      } else if (newVal == false) {
        this.top.position.y = 0;
        this.top.position.y = 0;
        this.right.position.x = .2;
        this.bottom.position.y = 0;
        this.left.position.x = .2;
        this.screen.position.z = 0;

        var allLabels4 = [...document.querySelectorAll('.label')];
        allLabels4.forEach((label) => {
          label.style.opacity = "0";
        });
      }
    },
    simulating: function(newVal) { // watch it
      if (newVal == true) {
        // Re-Assemble Geo
        if(this.exploded == false){
          this.top.position.y = -.5;
          this.back.position.y = -.5;
          this.right.position.y = -.5;
          this.bottom.position.y = -.5;
          this.left.position.y = -.5;
          this.screen.position.y = -.5;
          this.front.position.y = -.5;
          this.top.position.x = .5;
          this.back.position.x = .5;
          this.right.position.x = .5;
          this.bottom.position.x = .5;
          this.left.position.x = .5;
          this.screen.position.x = .5;
          this.front.position.x = .5;


          
          this.screen.scale.set(.7,.7,.7);

          this.front.scale.set(.7,.7,.7);
          this.back.scale.set(.7,.7,.7);
          this.left.scale.set(.7,.7,.7);
          this.right.scale.set(.7,.7,.7);
          this.top.scale.set(.7,.7,.7);
          this.bottom.scale.set(.7,.7,.7);
          this.controls.reset();
          this.controls.enablePan = true;
          this.controls.autoRotate = false;
          this.controls.autoRotateSpeed = 0.1;
          
          this.screen.rotation.y = Math.atan2( ( (this.camera.position.x +.2) - this.screen.position.x ), ( this.camera.position.z - this.screen.position.z )); 
          this.front.rotation.y = Math.atan2( ( ( this.camera.position.x +.2) - this.front.position.x ), ( this.camera.position.z - this.front.position.z )) ; 
          this.back.rotation.y = Math.atan2( ( ( this.camera.position.x +.2) - this.back.position.x ), ( this.camera.position.z - this.back.position.z )) ;
          this.left.rotation.y = Math.atan2( ( ( this.camera.position.x +.2) - this.left.position.x ), ( this.camera.position.z - this.left.position.z )) ;
          this.right.rotation.y = Math.atan2( ( ( this.camera.position.x +.2) - this.right.position.x ), ( this.camera.position.z - this.right.position.z ))  ;
          this.bottom.rotation.y = Math.atan2( ( ( this.camera.position.x +.2) - this.bottom.position.x ), ( this.camera.position.z - this.bottom.position.z ));
          this.top.rotation.y = Math.atan2( ( ( this.camera.position.x +.2) - this.top.position.x ), ( this.camera.position.z - this.top.position.z )) ;

 
          // Hide all Labels
          var allLabels = [...document.querySelectorAll('.label')];
          allLabels.forEach((label) => {
            label.style.opacity = "0";
          });

        }
        

      
       
     

      } else if (newVal == false) {
        this.screen.scale.set(.3,.3,.3);
        this.front.scale.set(.3,.3,.3);
        this.back.scale.set(.3,.3,.3);
        this.left.scale.set(.3,.3,.3);
        this.right.scale.set(.3,.3,.3);
        this.top.scale.set(.3,.3,.3);
        this.bottom.scale.set(.3,.3,.3);
        this.top.position.y = 0;
        this.back.position.y = 0;
        this.right.position.y = 0;
        this.bottom.position.y = 0;
        this.left.position.y = 0;
        this.screen.position.y = 0;
        this.front.position.y = 0; 
        this.top.position.x = .2;
        this.back.position.x = .2;
        this.right.position.x = .2;
        this.bottom.position.x = .2;
        this.left.position.x = .2;
        this.screen.position.x = .2;
        this.front.position.x = .2;
  

        this.controls.maxDistance = 1.5;
        this.controls.minDistance = 1.3;
        this.controls.minAzimuthAngle = 3;
        this.controls.maxAzimuthAngle = 2;
        this.controls.target.set(0,0,0);
        this.controls.enablePan = false;
        this.controls.autoRotate = true;
        this.controls.autoRotateSpeed = 0.1;
        this.controls.update();

        this.top.position.z = 0;
        this.back.position.z = 0;
        this.right.position.z = 0;
        this.bottom.position.z = 0;
        this.left.position.z = 0;
        this.screen.position.z = 0;
        this.front.position.z = 0;
        // Start Panning
        this.controls.autoRotate = true;
        this.controls.autoRotateSpeed = 0.1;
        this.controls.update();
        this.camera.position.set( 0, 0, 1 );

        // Reveal all Labels
        var allLabels2 = [...document.querySelectorAll('.label')];
        allLabels2.forEach((label) => {
          label.style.opacity = "0";
        });
      }
    }

  }
}
</script>

<style scoped>
 #container{
   height: 100vh;
 }
  .explode-check {
    position: absolute;
    color: white;
    top: 10%;
  }
  .simulate-check {
    position: absolute;
    color: white;
    top: 20%;
  }
</style>
