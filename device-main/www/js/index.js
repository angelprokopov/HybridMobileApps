/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);


window.addEventListener('batterystatus', onBatteryStatus, false)

function onBatteryStatus(status) {
    $('#batteryStatus').text(status.level)
    if (status.isPlugged) {
        $('#isPluggedLabel').removeClass('ui-checkbox-off')
        $('#isPluggedLabel').addClass('ui-checkbox-on')
    } else {
        $('#isPluggedLabel').removeClass('ui-checkbox-on')
        $('#isPluggedLabel').addClass('ui-checkbox-off')
    }

}

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    applyDeviceData(device)
    checkConnection()
}

function checkConnection() {
    let networkState = navigator.connection.type;
    console.log(navigator.connection);

    let states = {};
    states[Connection.UNKNOWN] = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI] = 'WiFi connection';
    states[Connection.CELL_2G] = 'Cell 2G connection';
    states[Connection.CELL_3G] = 'Cell 3G connection';
    states[Connection.CELL_4G] = 'Cell 4G connection';
    states[Connection.CELL] = 'Cell generic connection';
    states[Connection.NONE] = 'No network connection';

    $('#connectionType').text(states[networkState]);
}


function applyDeviceData(device) {
    $('#cordovaVersion').text(device.cordova);
    $('#manufacturer').text(device.manufacturer);
    $('#isVirtual').text(device.isVirtual);
    $('#deviceModel').text(device.model);
    $('#operatingSystem').text(device.platform);
    $('#uuid').text(device.uuid);
    $('#serial').text(device.serial);
    $('#osVersion').text(device.version);
}