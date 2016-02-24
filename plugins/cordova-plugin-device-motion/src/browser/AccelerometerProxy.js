cordova.define("cordova-plugin-device-motion.AccelerometerProxy", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

var accel = {
    x: 0,
    y: 0,
    z: 0,
    timestamp: 0,

    listen: function(event) {
        // FIXME need to simulate values like the accelerometer
        accel.x = event.clientX;
        accel.y = event.clientY;
        accel.z = (Math.round(((Math.random() * 2) - 1) * 100) / 100);
        accel.timestamp = new Date().getTime();
    }
};

function listener(success) {
    success(accel);
    window.removeEventListener('devicemotion', listener, true);
}

var Accelerometer = {
    start: function start(success, error) {
        return window.addEventListener('devicemotion', function() {
            listener(success);
        }, true);
    }
};

document.addEventListener('mousemove', accel.listen);

module.exports = Accelerometer;
require('cordova/exec/proxy').add('Accelerometer', Accelerometer);

});
