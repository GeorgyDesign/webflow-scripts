import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import SplineLoader from "@splinetool/loader";

//Canvas
const canvas = document.querySelector("canvas.spline-tools");

// camera
const camera = new THREE.OrthographicCamera(
  window.innerWidth / -2,
  window.innerWidth / 2,
  window.innerHeight / 2,
  window.innerHeight / -2,
  -500000,
  500000
);
camera.position.set(-0.88, -49, 1004.85);
camera.quaternion.setFromEuler(new THREE.Euler(0, 0, 0));

// scene
const scene = new THREE.Scene();

// spline scene
const loader = new SplineLoader();
loader.load(
  "https://prod.spline.design/yAqJmKKDNrSHmgRo/scene.splinecode",
  (splineScene) => {
    scene.add(splineScene);
  }
);

// renderer
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);

// scene settings
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

scene.background = new THREE.Color("#212121");
renderer.setClearAlpha(1);

// orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.125;

/* window.addEventListener("resize", onWindowResize);
function onWindowResize() {
  camera.left = window.innerWidth / -2;
  camera.right = window.innerWidth / 2;
  camera.top = window.innerHeight / 2;
  camera.bottom = window.innerHeight / -2;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
} */

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

function animate(time) {
  controls.update();
  renderer.render(scene, camera);
}
