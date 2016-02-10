package net.brachior.tests

import org.scalajs.dom.raw.Element
import org.scalajs.dom.{MouseEvent, document, html}

import scala.scalajs.js.{Function1, JSApp}

object Test extends JSApp {
  private val title: Element = document.createElement("h1")

  def main(): Unit = {
    val cubeDom = createButton("Cube (ThreeJS)", { (event: MouseEvent) => {
      stop()
      title.innerHTML = "Cube (ThreeJS)"
      Cube.start()
    }
    })

    val accDom = createButton("Acc. (Cordova)", { (event: MouseEvent) => {
      stop()
      title.innerHTML = "Accelerometer (Cordova)"
      Accelerometer.start()
    }
    })

    val head = document.createElement("div").asInstanceOf[html.Div]
    head.style.width = "100%"
    head.style.textAlign = "center"

    val div = document.createElement("div")
    div.appendChild(cubeDom)
    //    div.appendChild(cubeGlobal)
    div.appendChild(accDom)
    //    div.appendChild(accGlobal)

    title.innerHTML = "Nothing"

    head.appendChild(title)
    head.appendChild(div)
    document.body.appendChild(head)
  }

  def stop(): Unit = {
    Accelerometer.stop()
    Cube.stop()
  }

  def createButton(name: String, callback: Function1[MouseEvent, _]): Element = {
    val button = document.createElement("button")
    button.innerHTML = name
    button.addEventListener("click", callback)

    button
  }
}