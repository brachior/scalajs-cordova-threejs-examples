package net.brachior.tests

import org.denigma.threejs._
import org.denigma.threejs.extras.OrbitControls
import org.scalajs.dom.{Event, document, window}

import scala.scalajs.js.Dynamic.{global => g, literal => l}

// original javascript code from Thibault Coppex

object CubeScalaJSDOM {
  private val renderer: WebGLRenderer = initRenderer()

  private val camera: PerspectiveCamera = initCamera()

  private val cameraControls: OrbitControls = new OrbitControls(camera)

  private val scene: Scene = initScene()

  private var started = false

  def start(): Unit = {
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

object CubeScalaJSGlobal {
  private val window = g.window
  private val document = g.document
  private val width: Double = window.innerWidth.asInstanceOf[Double]
  private val height: Double = window.innerHeight.asInstanceOf[Double]

  private val renderer: WebGLRenderer = initRenderer()

  private val camera: PerspectiveCamera = initCamera()

  private val cameraControls: OrbitControls = new OrbitControls(camera)

  private val scene: Scene = initScene()

  private var started = false

  def start(): Unit = {
    // Add to DOM
    document.body.appendChild(renderer.domElement)

    // Callbacks
    window.addEventListener("resize", () => {
      val width: Double = window.innerWidth.asInstanceOf[Double]
      val height: Double = window.innerHeight.asInstanceOf[Double]
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }, false)

    started = true

    animate()
  }

  def stop(): Unit = {
    if (started) {
      document.body.removeChild(renderer.domElement)
      started = false
    }
  }

  def animate(): Unit = {
    window.requestAnimationFrame(() => animate())

    cameraControls.update()
    renderer.render(scene, camera)
  }

  def initRenderer(): WebGLRenderer = {
    val parameters = l(antialias = true).asInstanceOf[WebGLRendererParameters]
    val renderer = new WebGLRenderer(parameters)
    renderer.gammaInput = true
    renderer.gammaOutput = true
    renderer.setSize(width, height)
    renderer.setClearColor(new Color(0x252525), 1.0)

    renderer
  }

  def initCamera(): PerspectiveCamera = {
    val camera = new PerspectiveCamera(60, width / height, 1.0, 1000.0)
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
