import {BoxGeometry, Mesh, MeshNormalMaterial, Scene} from 'three'

export const createScene = () => {
  const scene = new Scene()
  const geometry = new BoxGeometry(0.2, 0.2, 0.2)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)
  scene.add(mesh)

  mesh.rotation.x = 400 / 2000;
  mesh.rotation.y = 400 / 2000;

  return scene
}


