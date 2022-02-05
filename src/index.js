import {PerspectiveCamera, Scene, BoxGeometry, MeshNormalMaterial, Mesh, WebGLRenderer} from 'three'

const camera = new PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
camera.position.z = 1;

const scene = new Scene();

const geometry = new BoxGeometry(0.2, 0.2, 0.2);
const material = new MeshNormalMaterial();

const mesh = new Mesh(geometry, material);
scene.add(mesh);

const renderer = new WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);