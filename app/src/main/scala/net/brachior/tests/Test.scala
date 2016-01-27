package net.brachior.tests

import org.scalajs.dom.raw.Element
import org.scalajs.dom.{MouseEvent, document, html}

import scala.scalajs.js.{Function1, JSApp}

object Test extends JSApp {
  private val title: Element = document.createElement("h1")

  def main(): Unit = {
    val cubeDom = createButton("Cube DOM", { (event: MouseEvent) => {
      stop()
      title.innerHTML = "Cube (scalajs.dom)"
      CubeScalaJSDOM.start()
    }
    })

    val cubeGlobal = createButton("Cube Globals", { (event: MouseEvent) => {
      stop()
      title.innerHTML = "Cube (globals)"
      CubeScalaJSGlobal.start()
    }
    })

    val accDom = createButton("Acc. DOM", { (event: MouseEvent) => {
      stop()
      title.innerHTML = "Accelerometer (scalajs.dom)"
      AccelerometerScalaJSDOM.start()
    }
    })

    val accGlobal = createButton("Acc. Globals", { (event: MouseEvent) => {
      stop()
      title.innerHTML = "Accelerometer (globals)"
      AccelerometerScalaJSGlobal.start()
    }
    })

    val head = document.createElement("div").asInstanceOf[html.Div]
    head.style.width = "100%"
    head.style.textAlign = "center"

    val div = document.createElement("div")
    div.appendChild(cubeDom)
    div.appendChild(cubeGlobal)
    div.appendChild(accDom)
    div.appendChild(accGlobal)

    title.innerHTML = "Nothing"

    head.appendChild(title)
    head.appendChild(div)
    document.body.appendChild(head)
  }

  def stop(): Unit = {
    AccelerometerScalaJSDOM.stop()
    AccelerometerScalaJSGlobal.stop()
    CubeScalaJSDOM.stop()
    CubeScalaJSGlobal.stop()
  }

  def createButton(name: String, callback: Function1[MouseEvent, _]): Element = {
    val button = document.createElement("button")
    button.innerHTML = name
    button.addEventListener("click", callback)

    button
  }
}
