<template>
    <div id="container"></div>
</template>

<script>
import * as Three from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default {
  name: 'ThreeTest',
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      model: null,
    }
  },
  methods: {
    init: function() {
      let container = document.getElementById('container');

      this.camera = new Three.PerspectiveCamera(70, container.clientWidth/container.clientHeight, 0.25, 20);
      this.camera.position.set( 0, 0, 1 );

      

      this.scene = new Three.Scene();
      let sceneObj = this.scene;

      
      

      let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
      let material = new Three.MeshNormalMaterial();

      this.mesh = new Three.Mesh(geometry, material);
      // this.scene.add(this.mesh);

      this.renderer = new Three.WebGLRenderer({antialias: true});
      this.renderer.setClearColor( 0xC5C5C3 );
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      this.renderer.outputEncoding = Three.sRGBEncoding;
      container.appendChild(this.renderer.domElement);

      // Add a Light
      var light = new Three.PointLight( 0xffffff, 10, 100 );
      light.position.set( 1, 5, 20 );

      this.scene.add( light );

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
          gltf.scene.position.y = -.3; 
          gltf.scene.rotation.y = -.3; 
          sceneObj.add( gltf.scene);
          
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
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.02;
        this.renderer.render(this.scene, this.camera);
    }
  },
  mounted() {
      this.init();
      this.animate();
  }
}
</script>

<style scoped>
 #container{
   height: 100vh;
 }
</style>
