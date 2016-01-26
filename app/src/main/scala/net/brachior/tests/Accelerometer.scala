package net.brachior.tests

import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.Dynamic.{global => g, literal => l}
import scala.scalajs.js.JSApp

import dom.document

object AccelerometerScalaJSDOM extends JSApp {
  private val navigator = g.navigator

  private val dom = document.createElement("div")
  document.body.appendChild(dom)

  private var watcher: js.Any = null

  def main(): Unit = {
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
    navigator.accelerometer.clearWatch(watcher)
  }
}

object AccelerometerScalaJSGlobal extends JSApp {
  private val navigator = g.navigator
  private val document = g.document

  private val dom = document.createElement("div")
  document.body.appendChild(dom)

  private var watcher: js.Any = null

  def main(): Unit = {
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
    navigator.accelerometer.clearWatch(watcher)
  }
}

@js.native
trait Speed extends js.Object {
  val x: Number
  val y: Number
  val z: Number
  val timestamp: Number
}
