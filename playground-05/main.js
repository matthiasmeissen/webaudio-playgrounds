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


// Geometry
const planeGroup = new THREE.Group()

for (let i = 0; i < 20; i++) {
    const plane = new THREE.Mesh(
        new THREE.PlaneGeometry(20, 0.2),
        new THREE.MeshBasicMaterial()
    )
    plane.position.y = i * 0.5
    planeGroup.add(plane)
}

planeGroup.position.y = -4
planeGroup.position.z = -10

scene.add(planeGroup)


// Model

let model

const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    metalness: 0.5,
    roughness: 0.5
})

material.color.setHSL(0, 0, 0.2)

const material2 = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    metalness: 1,
    roughness: 1
})

material2.color.setHSL(0, 0, 0.2)



const loader = new GLTFLoader()

loader.load(
    'assets/models/model_01.gltf',
    function (gltf) {
        model = gltf.scene
        scene.add(model)

        model.children[0].material = material
        model.children[1].material = material2
        model.children[2].material = material2

        model.rotation.y = -Math.PI / 2
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded')
    },
    function (error) {
        console.log('An error happened')
    }
)


// Keypress
document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if (keyName === 'a') {
        model.children[0].material.color.setHSL(0.8, 1, 0.2)
    }
})

document.addEventListener('keyup', (event) => {
    const keyName = event.key;
    if (keyName === 'a') {
        model.children[0].material.color.setHSL(0, 0, 0.2)
    }
})


// Lights
const pointLight = new THREE.PointLight(0xffffff, 1, 100)
pointLight.position.set(0, 4, 0)
pointLight.castShadow = true
scene.add(pointLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.set(4, 4, 4)
pointLight.castShadow = true
scene.add(directionalLight)


// Shadow
renderer.shadowMap.enabled = true


// Camera
camera.position.set(0, 2, 5)

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


    renderer.render(scene, camera)
}

animate()

