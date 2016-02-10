enablePlugins(ScalaJSPlugin)

name := "Scala.js Test"

scalaVersion := "2.11.6"

ivyScala := ivyScala.value map { _.copy(overrideScalaVersion = true) }

// Change compiled script paths
artifactPath in (Compile, fastOptJS) ~= { defaultPath =>
  file("../www/js/app/app.js")
}
artifactPath in (Compile, fullOptJS) ~= { defaultPath =>
  file("../www/js/app/app.js")
}
artifactPath in (Compile, packageJSDependencies) ~= { defaultPath =>
  file("../www/js/app/app_deps.js")
}
artifactPath in (Compile, packageScalaJSLauncher) ~= { defaultPath =>
  file("../www/js/app/main.js")
}

libraryDependencies += "org.scala-lang" % "scala-library" % "2.11.6"

libraryDependencies += "org.scala-js" %%% "scalajs-dom" % "0.8.2"

// https://bintray.com/denigma/denigma-releases/threejs-facade/view
resolvers += sbt.Resolver.bintrayRepo("denigma", "denigma-releases")
libraryDependencies += "org.denigma" %%% "threejs-facade" % "0.0.71-0.1.5"

jsDependencies += "org.webjars" % "three.js" % "r71" / "three.js" minified  "three.min.js" commonJSName "THREE"
jsDependencies += ProvidedJS / "OrbitControls.js"


// Setup FullOptimization build as default
scalaJSStage in Global := FullOptStage

// Create an automatic js file for dependencies
skip in packageJSDependencies := false
