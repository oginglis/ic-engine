<template>
    <div id="container">
      <h1 class="explode-check">Exploded? = {{exploded}}</h1>
      <h1 class="simulate-check">Simulating? = {{simulating}}</h1>
    </div>
</template>

<script>
import * as Three from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


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
      bottom: null,
      screen: null,
      right: null,
      left: null,
      front:null,
      
    }
  },
  methods: {
    scaleCanvas() {
      this.camera.aspect(this.container.clientWidth, this.container.clientHeight);
      this.renderer.setSize( this.container.clientWidth, this.container.clientHeight);
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

      var frontGeo, backGeo, rightGeo, leftGeo, bottomGeo, screenGeo, topGeo

      this.front = frontGeo;
      this.back = backGeo;
      this.right = rightGeo;
      this.left = leftGeo;
      this.bottom = bottomGeo;
      this.screen = screenGeo;
      this.top = topGeo;


      // Load FRONT model
      loader.load(
        // resource URL
        './front.gltf',
        // called when the resource is loaded
        function ( gltf ) {		
          console.log(gltf); 
          gltf.scene.scale.set(.3,.3,.3);
          sceneObj.add( gltf.scene);
          frontGeo = gltf.scene;
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
          console.log(gltf); 
          gltf.scene.scale.set(.3,.3,.3);
          sceneObj.add( gltf.scene);
          screenGeo = gltf.scene;
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
          console.log(gltf); 
          gltf.scene.scale.set(.3,.3,.3);
          sceneObj.add( gltf.scene);
          topGeo = gltf.scene;
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
          console.log(gltf); 
          gltf.scene.scale.set(.3,.3,.3);
          sceneObj.add( gltf.scene);
          rightGeo = gltf.scene;
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
          console.log(gltf); 
          gltf.scene.scale.set(.3,.3,.3);
          sceneObj.add( gltf.scene);
          leftGeo = gltf.scene;
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
          console.log(gltf); 
          gltf.scene.scale.set(.3,.3,.3);
          sceneObj.add( gltf.scene);
          backGeo = gltf.scene;
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
          console.log(gltf); 
          gltf.scene.scale.set(.3,.3,.3);
          sceneObj.add( gltf.scene);
          bottomGeo = gltf.scene;
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

      console.log(this.front)
    },
    animate: function() {
        requestAnimationFrame(this.animate);
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }
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
