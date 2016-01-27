package net.brachior.tests

import org.scalajs.dom.raw.Element

import scala.scalajs.js.{Function1, JSApp}
import org.scalajs.dom.{html, document}

object Test extends JSApp {
  private val title: Element = document.createElement("h1")

  def main(): Unit = {
    val cubeDom = createButton("Cube DOM", {(event: String) => {
      stop()
      title.innerHTML = "Cube (scalajs.dom)"
      CubeScalaJSDOM.start()
    }})

    val cubeGlobal = createButton("Cube Globals", {(event: String) => {
      stop()
      title.innerHTML = "Cube (globals)"
      CubeScalaJSGlobal.start()
    }})

    val accDom = createButton("Acc. DOM", {(event: String) => {
      stop()
      title.innerHTML = "Accelerometer (scalajs.dom)"
      AccelerometerScalaJSDOM.start()
    }})

    val accGlobal = createButton("Acc. Globals", {(event: String) => {
      stop()
      title.innerHTML = "Accelerometer (globals)"
      AccelerometerScalaJSGlobal.start()
    }})

    val dom = document.createElement("div").asInstanceOf[html.Div]
    dom.style.width = "100%"
    dom.style.textAlign = "center"

    val div = document.createElement("div")
    div.appendChild(cubeDom)
    div.appendChild(cubeGlobal)
    div.appendChild(accDom)
    div.appendChild(accGlobal)

    title.innerHTML = "Nothing"

    dom.appendChild(title)
    dom.appendChild(div)
    document.body.appendChild(dom)
  }

  def stop(): Unit = {
    AccelerometerScalaJSDOM.stop()
    AccelerometerScalaJSGlobal.stop()
    CubeScalaJSDOM.stop()
    CubeScalaJSGlobal.stop()
  }

  def createButton(name: String, callback: Function1[String, _]): Element = {
    val button = document.createElement("button")
    button.innerHTML = name
    button.addEventListener("click", callback)

    button
  }
}
