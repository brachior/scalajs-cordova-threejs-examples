package net.brachior.tests

import org.scalajs.dom.document

import scala.scalajs.js
import scala.scalajs.js.Dynamic.{global => g, literal => l}

object Accelerometer {
  private val navigator = g.navigator

  private val dom = document.createElement("div")
  private val spanX = document.createElement("span")
  private val spanY = document.createElement("span")
  private val spanZ = document.createElement("span")

  // dom.style doesn't exist!
  dom.setAttribute("style", "margin-left: 20px; margin-top: 20px")
  dom.appendChild(spanX)
  dom.appendChild(document.createElement("br"))
  dom.appendChild(spanY)
  dom.appendChild(document.createElement("br"))
  dom.appendChild(spanZ)

  private var watcher: js.Any = null

  def start(): Unit = {
    document.body.appendChild(dom)
    watcher = navigator.accelerometer.watchAcceleration(
      {
        speed: Speed => {
          spanX.innerHTML = s"  x: ${speed.x}"
          spanY.innerHTML = s"  y: ${speed.y}"
          spanZ.innerHTML = s"  z: ${speed.z}"
        }
      }, {
        error: js.Any => {
          dom.innerHTML = s"watcher error: $error"
        }
      },
      l(frequency = 30))
  }

  def stop(): Unit = {
    if (watcher != null) {
      navigator.accelerometer.clearWatch(watcher)
      document.body.removeChild(dom)
      watcher = null
    }
  }
}

@js.native
trait Speed extends js.Object {
  val x: Number
  val y: Number
  val z: Number
  val timestamp: Number
}