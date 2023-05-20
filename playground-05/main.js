import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

// Setup
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)


// Models

let model

const loader = new GLTFLoader()

loader.load(
    'assets/model_01.gltf',
    function (gltf) {
        model = gltf.scene
        scene.add(gltf.scene)

        console.log(model)
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded')
    },
    function (error) {
        console.log('An error happened')
    }
)


// Lights
const pointLight = new THREE.PointLight(0xffffff, 1, 100)
pointLight.position.set(0, 4, 0)
scene.add(pointLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.set(4, 4, 4)
scene.add(directionalLight)


camera.position.z = 5

// Responsive
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
})

// Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement)
controls.update()


// Animation
const animate = function () {
    requestAnimationFrame(animate)

    if (model) {
        model.rotation.y += 0.01
    }

    renderer.render(scene, camera)
}

animate()

