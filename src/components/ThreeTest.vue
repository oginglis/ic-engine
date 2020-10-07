<template>
    <div id="container"></div>
</template>

<script>
import * as Three from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default {
  name: 'ThreeTest',
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      controls: null,
      container: null,
      geo: null
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

      // this.scene.add(this.mesh);

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
      this.controls.autoRotateSpeed = 0.2;
      this.controls.update();

      // Add a Light - point light required for materials
      var light = new Three.PointLight( 0xffffff, 10, 100 );
      light.position.set( 1, 5, 20 );
      this.scene.add( light );
      var light2 = new Three.PointLight( 0xffffff, 10, 100 );
      light2.position.set( 1, 5, -20 );
      this.scene.add( light2 );
      
      // Instantiate a loader
      var loader = new GLTFLoader();

      // Load a glTF resource
      loader.load(
        // resource URL
        './yo.gltf',
        // called when the resource is loaded
        function ( gltf ) {		
          console.log(gltf); 
          gltf.scene.scale.set(20,20,20);
          gltf.scene.position.y = -.25; 
          gltf.scene.rotation.y = -.3; 
          sceneObj.add( gltf.scene);
          this.geo = gltf.scene;
          
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
</style>
