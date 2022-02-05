import {PerspectiveCamera, WebGLRenderer} from 'three'
import {PNG} from 'pngjs'
import fs from 'fs'
import gl from 'gl'
import {createScene} from './scene'

const render = () => {
  const width = 600
  const height = 400
  const png = new PNG({width: 600, height: height})
  const camera = new PerspectiveCamera(70, width / height, 0.01, 10);
  camera.position.z = 1;
  const scene = createScene()
  const canvas = {
    width,
    height,
    style: {},
    addEventListener: event => {
    },
    removeEventListener: event => {
    }
  }
  const renderer = new WebGLRenderer({
    antialias: true,
    powerPreference: 'high-performance',
    canvas: canvas,
    context: gl(width, height, {
      preserveDrawingBuffer: true
    })
  })

  renderer.setSize(600, 400)
  renderer.render(scene, camera)

  // convert to png
  const context = renderer.getContext()
  const pixels = new Uint8Array(4 * width * height)
  context.readPixels(0, 0, width, height, context.RGBA, context.UNSIGNED_BYTE, pixels)
  for (let j = 0; j <= height; j++) {
    for (let i = 0; i <= width; i++) {
      const k = j * width + i
      const r = pixels[4 * k]
      const g = pixels[4 * k + 1]
      const b = pixels[4 * k + 2]
      const a = pixels[4 * k + 3]
      const m = (height - j + 1) * width + i
      png.data[4 * m] = r
      png.data[4 * m + 1] = g
      png.data[4 * m + 2] = b
      png.data[4 * m + 3] = a
    }
  }


  const stream = fs.createWriteStream('test.png')
  png.pack().pipe(stream)

  stream.on('close', () => {
    console.log('Image written')
  })
}

render()

