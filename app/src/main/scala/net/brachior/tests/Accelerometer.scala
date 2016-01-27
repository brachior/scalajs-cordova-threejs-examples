package net.brachior.tests

import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.Dynamic.{global => g, literal => l}

import dom.document

object AccelerometerScalaJSDOM {
  private val navigator = g.navigator

  private val dom = document.createElement("div")

  private var watcher: js.Any = null

  def start(): Unit = {
    document.body.appendChild(dom)
    watcher = navigator.accelerometer.watchAcceleration(
      {
        speed: Speed => {
          dom.innerHTML = s"{x: ${speed.x}, y: ${speed.y}, z:${speed.z}, timestamp: ${speed.timestamp}}"
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

object AccelerometerScalaJSGlobal {
  private val navigator = g.navigator
  private val document = g.document

  private val dom = document.createElement("div")

  private var watcher: js.Any = null

  def start(): Unit = {
    document.body.appendChild(dom)
    watcher = navigator.accelerometer.watchAcceleration(
      {
        speed: Speed => {
          dom.innerHTML = s"{x: ${speed.x}, y: ${speed.y}, z:${speed.z}, timestamp: ${speed.timestamp}}"
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
