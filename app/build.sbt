enablePlugins(ScalaJSPlugin)

name := "Scala.js Test"

scalaVersion := "2.10.6"

artifactPath in (Compile, fastOptJS) ~= { defaultPath =>
  file("../www/js/app/app.js")
}

artifactPath in (Compile, fullOptJS) ~= { defaultPath =>
  file("../www/js/app/app.js")
}

libraryDependencies += "org.scala-js" %%% "scalajs-dom" % "0.8.2"