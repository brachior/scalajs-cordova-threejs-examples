package net.brachior.tests

import org.denigma.threejs._
import org.denigma.threejs.extras.OrbitControls
import org.scalajs.dom.{Event, document, window}

import scala.scalajs.js.Dynamic.{literal => l}

// original javascript code from Thibault Coppex

object Cube {
  private var renderer: WebGLRenderer = null
  private var camera: PerspectiveCamera = null
  private var cameraControls: OrbitControls = null
  private var scene: Scene = null

  private var started = false

  def start(): Unit = {
    if (renderer == null) {
      renderer = initRenderer()
      camera = initCamera()
      cameraControls = new OrbitControls(camera)
      scene = initScene()
    }

    // Add to DOM
    document.body.appendChild(renderer.domElement)

    window.addEventListener("resize", { event: Event => {
      camera.aspect = window.innerWidth.asInstanceOf[Double] / window.innerHeight.asInstanceOf[Double]
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    }, useCapture = false)

    started = true

    animate()
  }

  def stop(): Unit = {
    if (started) {
      document.body.removeChild(renderer.domElement)
      renderer = null
      started = false
    }
  }

  def animate(): Unit = {
    window.requestAnimationFrame({ step: Double => {
      animate()
    }
    })

    cameraControls.update()
    renderer.render(scene, camera)
  }

  def initRenderer(): WebGLRenderer = {
    val parameters = l(antialias = true).asInstanceOf[WebGLRendererParameters]
    val renderer = new WebGLRenderer(parameters)
    renderer.gammaInput = true
    renderer.gammaOutput = true
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(new Color(0x252525), 1.0)

    renderer
  }

  def initCamera(): PerspectiveCamera = {
    val camera = new PerspectiveCamera(60, window.innerWidth.asInstanceOf[Double] / window.innerHeight.asInstanceOf[Double], 1.0, 1000.0)
    camera.position.z = 70

    camera
  }

  def initScene(): Scene = {
    val scene = new Scene()
    scene.fog = new Fog(renderer.getClearColor().getHex(), 0.2 * camera.far, camera.far)

    // lights
    val ambientLight = new AmbientLight(0x222222)

    val light = new DirectionalLight(0xffffff, 1.0)
    light.position.set(500, 300, 100)

    scene.add(ambientLight)
    scene.add(light)

    // geometry
    val geometry = new BoxGeometry(20, 20, 20)
    val loader = new TextureLoader()
    loader.load("img/whynot.png", { (texture: Texture) => {
      val parameters = l(map = texture).asInstanceOf[MeshPhongMaterialParameters]
      val material = new MeshPhongMaterial(parameters)

      val mesh = new Mesh(geometry, material)
      scene.add(mesh)
    }
    })

    scene
  }
}