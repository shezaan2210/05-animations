import * as THREE from 'three'
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height);


//Manually created a Clock
// let time = Date.now();

//Clock built in Three.js
const clock = new THREE.Clock();

//Animation
const tick = ()=>{
    //Time manually created
    // const currentTime = Date.now();
    // const deltaTime = currentTime - time;
    // time = currentTime;
    // console.log(deltaTime)

    //Created by three.js clock
    const elapsedTime = clock.getElapsedTime();
    console.log(elapsedTime)

    //Update Objects
    // mesh.rotation.y += 0.001 * deltaTime
    mesh.rotation.y = elapsedTime * Math.PI * 2
//    mesh.position.z += .001 * deltaTime
   mesh.position.z = Math.sin(elapsedTime)
   mesh.scale.x = Math.sin(elapsedTime)
   camera.lookAt(mesh.position)

    
    //Render
    renderer.render(scene, camera);

    window.requestAnimationFrame(tick)

    console.log('tick')
};
tick();