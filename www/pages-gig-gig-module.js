(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gig-gig-module"],{

/***/ "./node_modules/peerjs/dist sync recursive":
/*!***************************************!*\
  !*** ./node_modules/peerjs/dist sync ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/peerjs/dist sync recursive";

/***/ }),

/***/ "./node_modules/peerjs/dist/peerjs.min.js":
/*!************************************************!*\
  !*** ./node_modules/peerjs/dist/peerjs.min.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var require;parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if( true&&"string"==typeof t)return __webpack_require__("./node_modules/peerjs/dist sync recursive")(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]); true?module.exports=l:undefined}if(parcelRequire=f,i)throw i;return f}({"EgBh":[function(require,module,exports) {
var e={};e.useBlobBuilder=function(){try{return new Blob([]),!1}catch(e){return!0}}(),e.useArrayBufferView=!e.useBlobBuilder&&function(){try{return 0===new Blob([new Uint8Array([])]).size}catch(e){return!0}}(),module.exports.binaryFeatures=e;var r=module.exports.BlobBuilder;function t(){this._pieces=[],this._parts=[]}"undefined"!=typeof window&&(r=module.exports.BlobBuilder=window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder||window.BlobBuilder),t.prototype.append=function(e){"number"==typeof e?this._pieces.push(e):(this.flush(),this._parts.push(e))},t.prototype.flush=function(){if(this._pieces.length>0){var r=new Uint8Array(this._pieces);e.useArrayBufferView||(r=r.buffer),this._parts.push(r),this._pieces=[]}},t.prototype.getBuffer=function(){if(this.flush(),e.useBlobBuilder){for(var t=new r,i=0,u=this._parts.length;i<u;i++)t.append(this._parts[i]);return t.getBlob()}return new Blob(this._parts)},module.exports.BufferBuilder=t;
},{}],"kdPp":[function(require,module,exports) {
var t=require("./bufferbuilder").BufferBuilder,e=require("./bufferbuilder").binaryFeatures,i={unpack:function(t){return new r(t).unpack()},pack:function(t){var e=new n;return e.pack(t),e.getBuffer()}};function r(t){this.index=0,this.dataBuffer=t,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}function n(){this.bufferBuilder=new t}function u(t){var e=t.charCodeAt(0);return e<=2047?"00":e<=65535?"000":e<=2097151?"0000":e<=67108863?"00000":"000000"}function a(t){return t.length>600?new Blob([t]).size:t.replace(/[^\u0000-\u007F]/g,u).length}module.exports=i,r.prototype.unpack=function(){var t,e=this.unpack_uint8();if(e<128)return e;if((224^e)<32)return(224^e)-32;if((t=160^e)<=15)return this.unpack_raw(t);if((t=176^e)<=15)return this.unpack_string(t);if((t=144^e)<=15)return this.unpack_array(t);if((t=128^e)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:case 213:case 214:case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}},r.prototype.unpack_uint8=function(){var t=255&this.dataView[this.index];return this.index++,t},r.prototype.unpack_uint16=function(){var t=this.read(2),e=256*(255&t[0])+(255&t[1]);return this.index+=2,e},r.prototype.unpack_uint32=function(){var t=this.read(4),e=256*(256*(256*t[0]+t[1])+t[2])+t[3];return this.index+=4,e},r.prototype.unpack_uint64=function(){var t=this.read(8),e=256*(256*(256*(256*(256*(256*(256*t[0]+t[1])+t[2])+t[3])+t[4])+t[5])+t[6])+t[7];return this.index+=8,e},r.prototype.unpack_int8=function(){var t=this.unpack_uint8();return t<128?t:t-256},r.prototype.unpack_int16=function(){var t=this.unpack_uint16();return t<32768?t:t-65536},r.prototype.unpack_int32=function(){var t=this.unpack_uint32();return t<Math.pow(2,31)?t:t-Math.pow(2,32)},r.prototype.unpack_int64=function(){var t=this.unpack_uint64();return t<Math.pow(2,63)?t:t-Math.pow(2,64)},r.prototype.unpack_raw=function(t){if(this.length<this.index+t)throw new Error("BinaryPackFailure: index is out of range "+this.index+" "+t+" "+this.length);var e=this.dataBuffer.slice(this.index,this.index+t);return this.index+=t,e},r.prototype.unpack_string=function(t){for(var e,i,r=this.read(t),n=0,u="";n<t;)(e=r[n])<128?(u+=String.fromCharCode(e),n++):(192^e)<32?(i=(192^e)<<6|63&r[n+1],u+=String.fromCharCode(i),n+=2):(i=(15&e)<<12|(63&r[n+1])<<6|63&r[n+2],u+=String.fromCharCode(i),n+=3);return this.index+=t,u},r.prototype.unpack_array=function(t){for(var e=new Array(t),i=0;i<t;i++)e[i]=this.unpack();return e},r.prototype.unpack_map=function(t){for(var e={},i=0;i<t;i++){var r=this.unpack(),n=this.unpack();e[r]=n}return e},r.prototype.unpack_float=function(){var t=this.unpack_uint32(),e=(t>>23&255)-127;return(0===t>>31?1:-1)*(8388607&t|8388608)*Math.pow(2,e-23)},r.prototype.unpack_double=function(){var t=this.unpack_uint32(),e=this.unpack_uint32(),i=(t>>20&2047)-1023;return(0===t>>31?1:-1)*((1048575&t|1048576)*Math.pow(2,i-20)+e*Math.pow(2,i-52))},r.prototype.read=function(t){var e=this.index;if(e+t<=this.length)return this.dataView.subarray(e,e+t);throw new Error("BinaryPackFailure: read index out of range")},n.prototype.getBuffer=function(){return this.bufferBuilder.getBuffer()},n.prototype.pack=function(t){var i=typeof t;if("string"===i)this.pack_string(t);else if("number"===i)Math.floor(t)===t?this.pack_integer(t):this.pack_double(t);else if("boolean"===i)!0===t?this.bufferBuilder.append(195):!1===t&&this.bufferBuilder.append(194);else if("undefined"===i)this.bufferBuilder.append(192);else{if("object"!==i)throw new Error('Type "'+i+'" not yet supported');if(null===t)this.bufferBuilder.append(192);else{var r=t.constructor;if(r==Array)this.pack_array(t);else if(r==Blob||r==File||t instanceof Blob||t instanceof File)this.pack_bin(t);else if(r==ArrayBuffer)e.useArrayBufferView?this.pack_bin(new Uint8Array(t)):this.pack_bin(t);else if("BYTES_PER_ELEMENT"in t)e.useArrayBufferView?this.pack_bin(new Uint8Array(t.buffer)):this.pack_bin(t.buffer);else if(r==Object||r.toString().startsWith("class"))this.pack_object(t);else if(r==Date)this.pack_string(t.toString());else{if("function"!=typeof t.toBinaryPack)throw new Error('Type "'+r.toString()+'" not yet supported');this.bufferBuilder.append(t.toBinaryPack())}}}this.bufferBuilder.flush()},n.prototype.pack_bin=function(t){var e=t.length||t.byteLength||t.size;if(e<=15)this.pack_uint8(160+e);else if(e<=65535)this.bufferBuilder.append(218),this.pack_uint16(e);else{if(!(e<=4294967295))throw new Error("Invalid length");this.bufferBuilder.append(219),this.pack_uint32(e)}this.bufferBuilder.append(t)},n.prototype.pack_string=function(t){var e=a(t);if(e<=15)this.pack_uint8(176+e);else if(e<=65535)this.bufferBuilder.append(216),this.pack_uint16(e);else{if(!(e<=4294967295))throw new Error("Invalid length");this.bufferBuilder.append(217),this.pack_uint32(e)}this.bufferBuilder.append(t)},n.prototype.pack_array=function(t){var e=t.length;if(e<=15)this.pack_uint8(144+e);else if(e<=65535)this.bufferBuilder.append(220),this.pack_uint16(e);else{if(!(e<=4294967295))throw new Error("Invalid length");this.bufferBuilder.append(221),this.pack_uint32(e)}for(var i=0;i<e;i++)this.pack(t[i])},n.prototype.pack_integer=function(t){if(t>=-32&&t<=127)this.bufferBuilder.append(255&t);else if(t>=0&&t<=255)this.bufferBuilder.append(204),this.pack_uint8(t);else if(t>=-128&&t<=127)this.bufferBuilder.append(208),this.pack_int8(t);else if(t>=0&&t<=65535)this.bufferBuilder.append(205),this.pack_uint16(t);else if(t>=-32768&&t<=32767)this.bufferBuilder.append(209),this.pack_int16(t);else if(t>=0&&t<=4294967295)this.bufferBuilder.append(206),this.pack_uint32(t);else if(t>=-2147483648&&t<=2147483647)this.bufferBuilder.append(210),this.pack_int32(t);else if(t>=-0x8000000000000000&&t<=0x8000000000000000)this.bufferBuilder.append(211),this.pack_int64(t);else{if(!(t>=0&&t<=0x10000000000000000))throw new Error("Invalid integer");this.bufferBuilder.append(207),this.pack_uint64(t)}},n.prototype.pack_double=function(t){var e=0;t<0&&(e=1,t=-t);var i=Math.floor(Math.log(t)/Math.LN2),r=t/Math.pow(2,i)-1,n=Math.floor(r*Math.pow(2,52)),u=Math.pow(2,32),a=e<<31|i+1023<<20|n/u&1048575,p=n%u;this.bufferBuilder.append(203),this.pack_int32(a),this.pack_int32(p)},n.prototype.pack_object=function(t){var e=Object.keys(t).length;if(e<=15)this.pack_uint8(128+e);else if(e<=65535)this.bufferBuilder.append(222),this.pack_uint16(e);else{if(!(e<=4294967295))throw new Error("Invalid length");this.bufferBuilder.append(223),this.pack_uint32(e)}for(var i in t)t.hasOwnProperty(i)&&(this.pack(i),this.pack(t[i]))},n.prototype.pack_uint8=function(t){this.bufferBuilder.append(t)},n.prototype.pack_uint16=function(t){this.bufferBuilder.append(t>>8),this.bufferBuilder.append(255&t)},n.prototype.pack_uint32=function(t){var e=4294967295&t;this.bufferBuilder.append((4278190080&e)>>>24),this.bufferBuilder.append((16711680&e)>>>16),this.bufferBuilder.append((65280&e)>>>8),this.bufferBuilder.append(255&e)},n.prototype.pack_uint64=function(t){var e=t/Math.pow(2,32),i=t%Math.pow(2,32);this.bufferBuilder.append((4278190080&e)>>>24),this.bufferBuilder.append((16711680&e)>>>16),this.bufferBuilder.append((65280&e)>>>8),this.bufferBuilder.append(255&e),this.bufferBuilder.append((4278190080&i)>>>24),this.bufferBuilder.append((16711680&i)>>>16),this.bufferBuilder.append((65280&i)>>>8),this.bufferBuilder.append(255&i)},n.prototype.pack_int8=function(t){this.bufferBuilder.append(255&t)},n.prototype.pack_int16=function(t){this.bufferBuilder.append((65280&t)>>8),this.bufferBuilder.append(255&t)},n.prototype.pack_int32=function(t){this.bufferBuilder.append(t>>>24&255),this.bufferBuilder.append((16711680&t)>>>16),this.bufferBuilder.append((65280&t)>>>8),this.bufferBuilder.append(255&t)},n.prototype.pack_int64=function(t){var e=Math.floor(t/Math.pow(2,32)),i=t%Math.pow(2,32);this.bufferBuilder.append((4278190080&e)>>>24),this.bufferBuilder.append((16711680&e)>>>16),this.bufferBuilder.append((65280&e)>>>8),this.bufferBuilder.append(255&e),this.bufferBuilder.append((4278190080&i)>>>24),this.bufferBuilder.append((16711680&i)>>>16),this.bufferBuilder.append((65280&i)>>>8),this.bufferBuilder.append(255&i)};
},{"./bufferbuilder":"EgBh"}],"iSxC":[function(require,module,exports) {
"use strict";function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.extractVersion=o,exports.wrapPeerConnectionEvent=i,exports.disableLog=s,exports.disableWarnings=a,exports.log=u,exports.deprecated=c,exports.detectBrowser=p,exports.compactObject=d,exports.walkStats=l,exports.filterStats=b;var n=!0,r=!0;function o(e,t,n){var r=e.match(t);return r&&r.length>=n&&parseInt(r[n],10)}function i(e,t,n){if(e.RTCPeerConnection){var r=e.RTCPeerConnection.prototype,o=r.addEventListener;r.addEventListener=function(e,r){if(e!==t)return o.apply(this,arguments);var i=function(e){var t=n(e);t&&r(t)};return this._eventMap=this._eventMap||{},this._eventMap[r]=i,o.apply(this,[e,i])};var i=r.removeEventListener;r.removeEventListener=function(e,n){if(e!==t||!this._eventMap||!this._eventMap[n])return i.apply(this,arguments);var r=this._eventMap[n];return delete this._eventMap[n],i.apply(this,[e,r])},Object.defineProperty(r,"on"+t,{get:function(){return this["_on"+t]},set:function(e){this["_on"+t]&&(this.removeEventListener(t,this["_on"+t]),delete this["_on"+t]),e&&this.addEventListener(t,this["_on"+t]=e)},enumerable:!0,configurable:!0})}}function s(e){return"boolean"!=typeof e?new Error("Argument type: "+t(e)+". Please use a boolean."):(n=e,e?"adapter.js logging disabled":"adapter.js logging enabled")}function a(e){return"boolean"!=typeof e?new Error("Argument type: "+t(e)+". Please use a boolean."):(r=!e,"adapter.js deprecation warnings "+(e?"disabled":"enabled"))}function u(){if("object"===("undefined"==typeof window?"undefined":t(window))){if(n)return;"undefined"!=typeof console&&"function"==typeof console.log&&console.log.apply(console,arguments)}}function c(e,t){r&&console.warn(e+" is deprecated, please use "+t+" instead.")}function p(e){var{navigator:t}=e,n={browser:null,version:null};if(void 0===e||!e.navigator)return n.browser="Not a browser.",n;if(t.mozGetUserMedia)n.browser="firefox",n.version=o(t.userAgent,/Firefox\/(\d+)\./,1);else if(t.webkitGetUserMedia||!1===e.isSecureContext&&e.webkitRTCPeerConnection&&!e.RTCIceGatherer)n.browser="chrome",n.version=o(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2);else if(t.mediaDevices&&t.userAgent.match(/Edge\/(\d+).(\d+)$/))n.browser="edge",n.version=o(t.userAgent,/Edge\/(\d+).(\d+)$/,2);else{if(!e.RTCPeerConnection||!t.userAgent.match(/AppleWebKit\/(\d+)\./))return n.browser="Not a supported browser.",n;n.browser="safari",n.version=o(t.userAgent,/AppleWebKit\/(\d+)\./,1),n.supportsUnifiedPlan=e.RTCRtpTransceiver&&"currentDirection"in e.RTCRtpTransceiver.prototype}return n}function f(e){return"[object Object]"===Object.prototype.toString.call(e)}function d(t){return f(t)?Object.keys(t).reduce(function(n,r){var o=f(t[r]),i=o?d(t[r]):t[r],s=o&&!Object.keys(i).length;return void 0===i||s?n:Object.assign(n,e({},r,i))},{}):t}function l(e,t,n){t&&!n.has(t.id)&&(n.set(t.id,t),Object.keys(t).forEach(function(r){r.endsWith("Id")?l(e,e.get(t[r]),n):r.endsWith("Ids")&&t[r].forEach(function(t){l(e,e.get(t),n)})}))}function b(e,t,n){var r=n?"outbound-rtp":"inbound-rtp",o=new Map;if(null===t)return o;var i=[];return e.forEach(function(e){"track"===e.type&&e.trackIdentifier===t.id&&i.push(e)}),i.forEach(function(t){e.forEach(function(n){n.type===r&&n.trackId===t.id&&l(e,n,o)})}),o}
},{}],"s6SN":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimGetUserMedia=i;var e=t(require("../utils.js"));function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function t(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=r();if(t&&t.has(e))return t.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=n?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(o,i,a):o[i]=e[i]}return o.default=e,t&&t.set(e,o),o}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n=e.log;function i(r){var t=r&&r.navigator;if(t.mediaDevices){var i=e.detectBrowser(r),a=function(e){if("object"!==o(e)||e.mandatory||e.optional)return e;var r={};return Object.keys(e).forEach(function(t){if("require"!==t&&"advanced"!==t&&"mediaSource"!==t){var n="object"===o(e[t])?e[t]:{ideal:e[t]};void 0!==n.exact&&"number"==typeof n.exact&&(n.min=n.max=n.exact);var i=function(e,r){return e?e+r.charAt(0).toUpperCase()+r.slice(1):"deviceId"===r?"sourceId":r};if(void 0!==n.ideal){r.optional=r.optional||[];var a={};"number"==typeof n.ideal?(a[i("min",t)]=n.ideal,r.optional.push(a),(a={})[i("max",t)]=n.ideal,r.optional.push(a)):(a[i("",t)]=n.ideal,r.optional.push(a))}void 0!==n.exact&&"number"!=typeof n.exact?(r.mandatory=r.mandatory||{},r.mandatory[i("",t)]=n.exact):["min","max"].forEach(function(e){void 0!==n[e]&&(r.mandatory=r.mandatory||{},r.mandatory[i(e,t)]=n[e])})}}),e.advanced&&(r.optional=(r.optional||[]).concat(e.advanced)),r},c=function(e,r){if(i.version>=61)return r(e);if((e=JSON.parse(JSON.stringify(e)))&&"object"===o(e.audio)){var c=function(e,r,t){r in e&&!(t in e)&&(e[t]=e[r],delete e[r])};c((e=JSON.parse(JSON.stringify(e))).audio,"autoGainControl","googAutoGainControl"),c(e.audio,"noiseSuppression","googNoiseSuppression"),e.audio=a(e.audio)}if(e&&"object"===o(e.video)){var d=e.video.facingMode;d=d&&("object"===o(d)?d:{ideal:d});var u,s=i.version<66;if(d&&("user"===d.exact||"environment"===d.exact||"user"===d.ideal||"environment"===d.ideal)&&(!t.mediaDevices.getSupportedConstraints||!t.mediaDevices.getSupportedConstraints().facingMode||s))if(delete e.video.facingMode,"environment"===d.exact||"environment"===d.ideal?u=["back","rear"]:"user"!==d.exact&&"user"!==d.ideal||(u=["front"]),u)return t.mediaDevices.enumerateDevices().then(function(t){var o=(t=t.filter(function(e){return"videoinput"===e.kind})).find(function(e){return u.some(function(r){return e.label.toLowerCase().includes(r)})});return!o&&t.length&&u.includes("back")&&(o=t[t.length-1]),o&&(e.video.deviceId=d.exact?{exact:o.deviceId}:{ideal:o.deviceId}),e.video=a(e.video),n("chrome: "+JSON.stringify(e)),r(e)});e.video=a(e.video)}return n("chrome: "+JSON.stringify(e)),r(e)},d=function(e){return i.version>=64?e:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[e.name]||e.name,message:e.message,constraint:e.constraint||e.constraintName,toString:function(){return this.name+(this.message&&": ")+this.message}}};if(t.getUserMedia=function(e,r,o){c(e,function(e){t.webkitGetUserMedia(e,r,function(e){o&&o(d(e))})})}.bind(t),t.mediaDevices.getUserMedia){var u=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(e){return c(e,function(e){return u(e).then(function(r){if(e.audio&&!r.getAudioTracks().length||e.video&&!r.getVideoTracks().length)throw r.getTracks().forEach(function(e){e.stop()}),new DOMException("","NotFoundError");return r},function(e){return Promise.reject(d(e))})})}}}}
},{"../utils.js":"iSxC"}],"VHa8":[function(require,module,exports) {
"use strict";function e(e,i){e.navigator.mediaDevices&&"getDisplayMedia"in e.navigator.mediaDevices||e.navigator.mediaDevices&&("function"==typeof i?e.navigator.mediaDevices.getDisplayMedia=function(a){return i(a).then(function(i){var t=a.video&&a.video.width,o=a.video&&a.video.height,d=a.video&&a.video.frameRate;return a.video={mandatory:{chromeMediaSource:"desktop",chromeMediaSourceId:i,maxFrameRate:d||3}},t&&(a.video.mandatory.maxWidth=t),o&&(a.video.mandatory.maxHeight=o),e.navigator.mediaDevices.getUserMedia(a)})}:console.error("shimGetDisplayMedia: getSourceId argument is not a function"))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimGetDisplayMedia=e;
},{}],"uI5X":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimMediaStream=a,exports.shimOnTrack=c,exports.shimGetSendersWithDtmf=p,exports.shimGetStats=d,exports.shimSenderReceiverGetStats=h,exports.shimAddTrackRemoveTrackWithNative=f,exports.shimAddTrackRemoveTrack=m,exports.shimPeerConnection=u,exports.fixNegotiationNeeded=l,Object.defineProperty(exports,"shimGetUserMedia",{enumerable:!0,get:function(){return t.shimGetUserMedia}}),Object.defineProperty(exports,"shimGetDisplayMedia",{enumerable:!0,get:function(){return r.shimGetDisplayMedia}});var e=i(require("../utils.js")),t=require("./getusermedia"),r=require("./getdisplaymedia");function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function i(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var s=i?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){e.MediaStream=e.MediaStream||e.webkitMediaStream}function c(t){if("object"!==s(t)||!t.RTCPeerConnection||"ontrack"in t.RTCPeerConnection.prototype)e.wrapPeerConnectionEvent(t,"track",function(e){return e.transceiver||Object.defineProperty(e,"transceiver",{value:{receiver:e.receiver}}),e});else{Object.defineProperty(t.RTCPeerConnection.prototype,"ontrack",{get:function(){return this._ontrack},set:function(e){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=e)},enumerable:!0,configurable:!0});var r=t.RTCPeerConnection.prototype.setRemoteDescription;t.RTCPeerConnection.prototype.setRemoteDescription=function(){var e=this;return this._ontrackpoly||(this._ontrackpoly=function(r){r.stream.addEventListener("addtrack",function(n){var i;i=t.RTCPeerConnection.prototype.getReceivers?e.getReceivers().find(function(e){return e.track&&e.track.id===n.track.id}):{track:n.track};var o=new Event("track");o.track=n.track,o.receiver=i,o.transceiver={receiver:i},o.streams=[r.stream],e.dispatchEvent(o)}),r.stream.getTracks().forEach(function(n){var i;i=t.RTCPeerConnection.prototype.getReceivers?e.getReceivers().find(function(e){return e.track&&e.track.id===n.id}):{track:n};var o=new Event("track");o.track=n,o.receiver=i,o.transceiver={receiver:i},o.streams=[r.stream],e.dispatchEvent(o)})},this.addEventListener("addstream",this._ontrackpoly)),r.apply(this,arguments)}}}function p(e){if("object"===s(e)&&e.RTCPeerConnection&&!("getSenders"in e.RTCPeerConnection.prototype)&&"createDTMFSender"in e.RTCPeerConnection.prototype){var t=function(e,t){return{track:t,get dtmf(){return void 0===this._dtmf&&("audio"===t.kind?this._dtmf=e.createDTMFSender(t):this._dtmf=null),this._dtmf},_pc:e}};if(!e.RTCPeerConnection.prototype.getSenders){e.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};var r=e.RTCPeerConnection.prototype.addTrack;e.RTCPeerConnection.prototype.addTrack=function(e,n){var i=r.apply(this,arguments);return i||(i=t(this,e),this._senders.push(i)),i};var n=e.RTCPeerConnection.prototype.removeTrack;e.RTCPeerConnection.prototype.removeTrack=function(e){n.apply(this,arguments);var t=this._senders.indexOf(e);-1!==t&&this._senders.splice(t,1)}}var i=e.RTCPeerConnection.prototype.addStream;e.RTCPeerConnection.prototype.addStream=function(e){var r=this;this._senders=this._senders||[],i.apply(this,[e]),e.getTracks().forEach(function(e){r._senders.push(t(r,e))})};var o=e.RTCPeerConnection.prototype.removeStream;e.RTCPeerConnection.prototype.removeStream=function(e){var t=this;this._senders=this._senders||[],o.apply(this,[e]),e.getTracks().forEach(function(e){var r=t._senders.find(function(t){return t.track===e});r&&t._senders.splice(t._senders.indexOf(r),1)})}}else if("object"===s(e)&&e.RTCPeerConnection&&"getSenders"in e.RTCPeerConnection.prototype&&"createDTMFSender"in e.RTCPeerConnection.prototype&&e.RTCRtpSender&&!("dtmf"in e.RTCRtpSender.prototype)){var a=e.RTCPeerConnection.prototype.getSenders;e.RTCPeerConnection.prototype.getSenders=function(){var e=this,t=a.apply(this,[]);return t.forEach(function(t){return t._pc=e}),t},Object.defineProperty(e.RTCRtpSender.prototype,"dtmf",{get:function(){return void 0===this._dtmf&&("audio"===this.track.kind?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function d(e){if(e.RTCPeerConnection){var t=e.RTCPeerConnection.prototype.getStats;e.RTCPeerConnection.prototype.getStats=function(){var e=this,[r,n,i]=arguments;if(arguments.length>0&&"function"==typeof r)return t.apply(this,arguments);if(0===t.length&&(0===arguments.length||"function"!=typeof r))return t.apply(this,[]);var o=function(e){var t={};return e.result().forEach(function(e){var r={id:e.id,timestamp:e.timestamp,type:{localcandidate:"local-candidate",remotecandidate:"remote-candidate"}[e.type]||e.type};e.names().forEach(function(t){r[t]=e.stat(t)}),t[r.id]=r}),t},s=function(e){return new Map(Object.keys(e).map(function(t){return[t,e[t]]}))};if(arguments.length>=2){return t.apply(this,[function(e){n(s(o(e)))},r])}return new Promise(function(r,n){t.apply(e,[function(e){r(s(o(e)))},n])}).then(n,i)}}}function h(t){if("object"===s(t)&&t.RTCPeerConnection&&t.RTCRtpSender&&t.RTCRtpReceiver){if(!("getStats"in t.RTCRtpSender.prototype)){var r=t.RTCPeerConnection.prototype.getSenders;r&&(t.RTCPeerConnection.prototype.getSenders=function(){var e=this,t=r.apply(this,[]);return t.forEach(function(t){return t._pc=e}),t});var n=t.RTCPeerConnection.prototype.addTrack;n&&(t.RTCPeerConnection.prototype.addTrack=function(){var e=n.apply(this,arguments);return e._pc=this,e}),t.RTCRtpSender.prototype.getStats=function(){var t=this;return this._pc.getStats().then(function(r){return e.filterStats(r,t.track,!0)})}}if(!("getStats"in t.RTCRtpReceiver.prototype)){var i=t.RTCPeerConnection.prototype.getReceivers;i&&(t.RTCPeerConnection.prototype.getReceivers=function(){var e=this,t=i.apply(this,[]);return t.forEach(function(t){return t._pc=e}),t}),e.wrapPeerConnectionEvent(t,"track",function(e){return e.receiver._pc=e.srcElement,e}),t.RTCRtpReceiver.prototype.getStats=function(){var t=this;return this._pc.getStats().then(function(r){return e.filterStats(r,t.track,!1)})}}if("getStats"in t.RTCRtpSender.prototype&&"getStats"in t.RTCRtpReceiver.prototype){var o=t.RTCPeerConnection.prototype.getStats;t.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof t.MediaStreamTrack){var e,r,n,i=arguments[0];return this.getSenders().forEach(function(t){t.track===i&&(e?n=!0:e=t)}),this.getReceivers().forEach(function(e){return e.track===i&&(r?n=!0:r=e),e.track===i}),n||e&&r?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):e?e.getStats():r?r.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return o.apply(this,arguments)}}}}function f(e){e.RTCPeerConnection.prototype.getLocalStreams=function(){var e=this;return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(function(t){return e._shimmedLocalStreams[t][0]})};var t=e.RTCPeerConnection.prototype.addTrack;e.RTCPeerConnection.prototype.addTrack=function(e,r){if(!r)return t.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};var n=t.apply(this,arguments);return this._shimmedLocalStreams[r.id]?-1===this._shimmedLocalStreams[r.id].indexOf(n)&&this._shimmedLocalStreams[r.id].push(n):this._shimmedLocalStreams[r.id]=[r,n],n};var r=e.RTCPeerConnection.prototype.addStream;e.RTCPeerConnection.prototype.addStream=function(e){var t=this;this._shimmedLocalStreams=this._shimmedLocalStreams||{},e.getTracks().forEach(function(e){if(t.getSenders().find(function(t){return t.track===e}))throw new DOMException("Track already exists.","InvalidAccessError")});var n=this.getSenders();r.apply(this,arguments);var i=this.getSenders().filter(function(e){return-1===n.indexOf(e)});this._shimmedLocalStreams[e.id]=[e].concat(i)};var n=e.RTCPeerConnection.prototype.removeStream;e.RTCPeerConnection.prototype.removeStream=function(e){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[e.id],n.apply(this,arguments)};var i=e.RTCPeerConnection.prototype.removeTrack;e.RTCPeerConnection.prototype.removeTrack=function(e){var t=this;return this._shimmedLocalStreams=this._shimmedLocalStreams||{},e&&Object.keys(this._shimmedLocalStreams).forEach(function(r){var n=t._shimmedLocalStreams[r].indexOf(e);-1!==n&&t._shimmedLocalStreams[r].splice(n,1),1===t._shimmedLocalStreams[r].length&&delete t._shimmedLocalStreams[r]}),i.apply(this,arguments)}}function m(t){if(t.RTCPeerConnection){var r=e.detectBrowser(t);if(t.RTCPeerConnection.prototype.addTrack&&r.version>=65)return f(t);var n=t.RTCPeerConnection.prototype.getLocalStreams;t.RTCPeerConnection.prototype.getLocalStreams=function(){var e=this,t=n.apply(this);return this._reverseStreams=this._reverseStreams||{},t.map(function(t){return e._reverseStreams[t.id]})};var i=t.RTCPeerConnection.prototype.addStream;t.RTCPeerConnection.prototype.addStream=function(e){var r=this;if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},e.getTracks().forEach(function(e){if(r.getSenders().find(function(t){return t.track===e}))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[e.id]){var n=new t.MediaStream(e.getTracks());this._streams[e.id]=n,this._reverseStreams[n.id]=e,e=n}i.apply(this,[e])};var s=t.RTCPeerConnection.prototype.removeStream;t.RTCPeerConnection.prototype.removeStream=function(e){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},s.apply(this,[this._streams[e.id]||e]),delete this._reverseStreams[this._streams[e.id]?this._streams[e.id].id:e.id],delete this._streams[e.id]},t.RTCPeerConnection.prototype.addTrack=function(e,r){var n=this;if("closed"===this.signalingState)throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");var i=[].slice.call(arguments,1);if(1!==i.length||!i[0].getTracks().find(function(t){return t===e}))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(function(t){return t.track===e}))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};var o=this._streams[r.id];if(o)o.addTrack(e),Promise.resolve().then(function(){n.dispatchEvent(new Event("negotiationneeded"))});else{var s=new t.MediaStream([e]);this._streams[r.id]=s,this._reverseStreams[s.id]=r,this.addStream(s)}return this.getSenders().find(function(t){return t.track===e})},["createOffer","createAnswer"].forEach(function(e){var r=t.RTCPeerConnection.prototype[e],n=o({},e,function(){var e=this,t=arguments;return arguments.length&&"function"==typeof arguments[0]?r.apply(this,[function(r){var n=p(e,r);t[0].apply(null,[n])},function(e){t[1]&&t[1].apply(null,e)},arguments[2]]):r.apply(this,arguments).then(function(t){return p(e,t)})});t.RTCPeerConnection.prototype[e]=n[e]});var a=t.RTCPeerConnection.prototype.setLocalDescription;t.RTCPeerConnection.prototype.setLocalDescription=function(){return arguments.length&&arguments[0].type?(arguments[0]=(e=this,t=arguments[0],r=t.sdp,Object.keys(e._reverseStreams||[]).forEach(function(t){var n=e._reverseStreams[t],i=e._streams[n.id];r=r.replace(new RegExp(n.id,"g"),i.id)}),new RTCSessionDescription({type:t.type,sdp:r})),a.apply(this,arguments)):a.apply(this,arguments);var e,t,r};var c=Object.getOwnPropertyDescriptor(t.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(t.RTCPeerConnection.prototype,"localDescription",{get:function(){var e=c.get.apply(this);return""===e.type?e:p(this,e)}}),t.RTCPeerConnection.prototype.removeTrack=function(e){var t,r=this;if("closed"===this.signalingState)throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!e._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(e._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{},Object.keys(this._streams).forEach(function(n){r._streams[n].getTracks().find(function(t){return e.track===t})&&(t=r._streams[n])}),t&&(1===t.getTracks().length?this.removeStream(this._reverseStreams[t.id]):t.removeTrack(e.track),this.dispatchEvent(new Event("negotiationneeded")))}}function p(e,t){var r=t.sdp;return Object.keys(e._reverseStreams||[]).forEach(function(t){var n=e._reverseStreams[t],i=e._streams[n.id];r=r.replace(new RegExp(i.id,"g"),n.id)}),new RTCSessionDescription({type:t.type,sdp:r})}}function u(t){var r=e.detectBrowser(t);if(!t.RTCPeerConnection&&t.webkitRTCPeerConnection&&(t.RTCPeerConnection=t.webkitRTCPeerConnection),t.RTCPeerConnection){r.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(e){var r=t.RTCPeerConnection.prototype[e],n=o({},e,function(){return arguments[0]=new("addIceCandidate"===e?t.RTCIceCandidate:t.RTCSessionDescription)(arguments[0]),r.apply(this,arguments)});t.RTCPeerConnection.prototype[e]=n[e]});var n=t.RTCPeerConnection.prototype.addIceCandidate;t.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?r.version<78&&arguments[0]&&""===arguments[0].candidate?Promise.resolve():n.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())}}}function l(t){e.wrapPeerConnectionEvent(t,"negotiationneeded",function(e){if("stable"===e.target.signalingState)return e})}
},{"../utils.js":"iSxC","./getusermedia":"s6SN","./getdisplaymedia":"VHa8"}],"NZ1C":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.filterIceServers=n;var r=t(require("../utils"));function e(){if("function"!=typeof WeakMap)return null;var r=new WeakMap;return e=function(){return r},r}function t(r){if(r&&r.__esModule)return r;if(null===r||"object"!=typeof r&&"function"!=typeof r)return{default:r};var t=e();if(t&&t.has(r))return t.get(r);var n={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in r)if(Object.prototype.hasOwnProperty.call(r,i)){var f=u?Object.getOwnPropertyDescriptor(r,i):null;f&&(f.get||f.set)?Object.defineProperty(n,i,f):n[i]=r[i]}return n.default=r,t&&t.set(r,n),n}function n(e,t){var n=!1;return(e=JSON.parse(JSON.stringify(e))).filter(function(e){if(e&&(e.urls||e.url)){var t=e.urls||e.url;e.url&&!e.urls&&r.deprecated("RTCIceServer.url","RTCIceServer.urls");var u="string"==typeof t;return u&&(t=[t]),t=t.filter(function(r){if(0===r.indexOf("stun:"))return!1;var e=r.startsWith("turn")&&!r.startsWith("turn:[")&&r.includes("transport=udp");return e&&!n?(n=!0,!0):e&&!n}),delete e.url,e.urls=u?t[0]:t,!!t.length}})}
},{"../utils":"iSxC"}],"YHvh":[function(require,module,exports) {
"use strict";var r={generateIdentifier:function(){return Math.random().toString(36).substr(2,10)}};r.localCName=r.generateIdentifier(),r.splitLines=function(r){return r.trim().split("\n").map(function(r){return r.trim()})},r.splitSections=function(r){return r.split("\nm=").map(function(r,e){return(e>0?"m="+r:r).trim()+"\r\n"})},r.getDescription=function(e){var t=r.splitSections(e);return t&&t[0]},r.getMediaSections=function(e){var t=r.splitSections(e);return t.shift(),t},r.matchPrefix=function(e,t){return r.splitLines(e).filter(function(r){return 0===r.indexOf(t)})},r.parseCandidate=function(r){for(var e,t={foundation:(e=0===r.indexOf("a=candidate:")?r.substring(12).split(" "):r.substring(10).split(" "))[0],component:parseInt(e[1],10),protocol:e[2].toLowerCase(),priority:parseInt(e[3],10),ip:e[4],address:e[4],port:parseInt(e[5],10),type:e[7]},n=8;n<e.length;n+=2)switch(e[n]){case"raddr":t.relatedAddress=e[n+1];break;case"rport":t.relatedPort=parseInt(e[n+1],10);break;case"tcptype":t.tcpType=e[n+1];break;case"ufrag":t.ufrag=e[n+1],t.usernameFragment=e[n+1];break;default:t[e[n]]=e[n+1]}return t},r.writeCandidate=function(r){var e=[];e.push(r.foundation),e.push(r.component),e.push(r.protocol.toUpperCase()),e.push(r.priority),e.push(r.address||r.ip),e.push(r.port);var t=r.type;return e.push("typ"),e.push(t),"host"!==t&&r.relatedAddress&&r.relatedPort&&(e.push("raddr"),e.push(r.relatedAddress),e.push("rport"),e.push(r.relatedPort)),r.tcpType&&"tcp"===r.protocol.toLowerCase()&&(e.push("tcptype"),e.push(r.tcpType)),(r.usernameFragment||r.ufrag)&&(e.push("ufrag"),e.push(r.usernameFragment||r.ufrag)),"candidate:"+e.join(" ")},r.parseIceOptions=function(r){return r.substr(14).split(" ")},r.parseRtpMap=function(r){var e=r.substr(9).split(" "),t={payloadType:parseInt(e.shift(),10)};return e=e[0].split("/"),t.name=e[0],t.clockRate=parseInt(e[1],10),t.channels=3===e.length?parseInt(e[2],10):1,t.numChannels=t.channels,t},r.writeRtpMap=function(r){var e=r.payloadType;void 0!==r.preferredPayloadType&&(e=r.preferredPayloadType);var t=r.channels||r.numChannels||1;return"a=rtpmap:"+e+" "+r.name+"/"+r.clockRate+(1!==t?"/"+t:"")+"\r\n"},r.parseExtmap=function(r){var e=r.substr(9).split(" ");return{id:parseInt(e[0],10),direction:e[0].indexOf("/")>0?e[0].split("/")[1]:"sendrecv",uri:e[1]}},r.writeExtmap=function(r){return"a=extmap:"+(r.id||r.preferredId)+(r.direction&&"sendrecv"!==r.direction?"/"+r.direction:"")+" "+r.uri+"\r\n"},r.parseFmtp=function(r){for(var e,t={},n=r.substr(r.indexOf(" ")+1).split(";"),a=0;a<n.length;a++)t[(e=n[a].trim().split("="))[0].trim()]=e[1];return t},r.writeFmtp=function(r){var e="",t=r.payloadType;if(void 0!==r.preferredPayloadType&&(t=r.preferredPayloadType),r.parameters&&Object.keys(r.parameters).length){var n=[];Object.keys(r.parameters).forEach(function(e){r.parameters[e]?n.push(e+"="+r.parameters[e]):n.push(e)}),e+="a=fmtp:"+t+" "+n.join(";")+"\r\n"}return e},r.parseRtcpFb=function(r){var e=r.substr(r.indexOf(" ")+1).split(" ");return{type:e.shift(),parameter:e.join(" ")}},r.writeRtcpFb=function(r){var e="",t=r.payloadType;return void 0!==r.preferredPayloadType&&(t=r.preferredPayloadType),r.rtcpFeedback&&r.rtcpFeedback.length&&r.rtcpFeedback.forEach(function(r){e+="a=rtcp-fb:"+t+" "+r.type+(r.parameter&&r.parameter.length?" "+r.parameter:"")+"\r\n"}),e},r.parseSsrcMedia=function(r){var e=r.indexOf(" "),t={ssrc:parseInt(r.substr(7,e-7),10)},n=r.indexOf(":",e);return n>-1?(t.attribute=r.substr(e+1,n-e-1),t.value=r.substr(n+1)):t.attribute=r.substr(e+1),t},r.parseSsrcGroup=function(r){var e=r.substr(13).split(" ");return{semantics:e.shift(),ssrcs:e.map(function(r){return parseInt(r,10)})}},r.getMid=function(e){var t=r.matchPrefix(e,"a=mid:")[0];if(t)return t.substr(6)},r.parseFingerprint=function(r){var e=r.substr(14).split(" ");return{algorithm:e[0].toLowerCase(),value:e[1]}},r.getDtlsParameters=function(e,t){return{role:"auto",fingerprints:r.matchPrefix(e+t,"a=fingerprint:").map(r.parseFingerprint)}},r.writeDtlsParameters=function(r,e){var t="a=setup:"+e+"\r\n";return r.fingerprints.forEach(function(r){t+="a=fingerprint:"+r.algorithm+" "+r.value+"\r\n"}),t},r.getIceParameters=function(e,t){var n=r.splitLines(e);return{usernameFragment:(n=n.concat(r.splitLines(t))).filter(function(r){return 0===r.indexOf("a=ice-ufrag:")})[0].substr(12),password:n.filter(function(r){return 0===r.indexOf("a=ice-pwd:")})[0].substr(10)}},r.writeIceParameters=function(r){return"a=ice-ufrag:"+r.usernameFragment+"\r\na=ice-pwd:"+r.password+"\r\n"},r.parseRtpParameters=function(e){for(var t={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},n=r.splitLines(e)[0].split(" "),a=3;a<n.length;a++){var s=n[a],i=r.matchPrefix(e,"a=rtpmap:"+s+" ")[0];if(i){var p=r.parseRtpMap(i),c=r.matchPrefix(e,"a=fmtp:"+s+" ");switch(p.parameters=c.length?r.parseFmtp(c[0]):{},p.rtcpFeedback=r.matchPrefix(e,"a=rtcp-fb:"+s+" ").map(r.parseRtcpFb),t.codecs.push(p),p.name.toUpperCase()){case"RED":case"ULPFEC":t.fecMechanisms.push(p.name.toUpperCase())}}}return r.matchPrefix(e,"a=extmap:").forEach(function(e){t.headerExtensions.push(r.parseExtmap(e))}),t},r.writeRtpDescription=function(e,t){var n="";n+="m="+e+" ",n+=t.codecs.length>0?"9":"0",n+=" UDP/TLS/RTP/SAVPF ",n+=t.codecs.map(function(r){return void 0!==r.preferredPayloadType?r.preferredPayloadType:r.payloadType}).join(" ")+"\r\n",n+="c=IN IP4 0.0.0.0\r\n",n+="a=rtcp:9 IN IP4 0.0.0.0\r\n",t.codecs.forEach(function(e){n+=r.writeRtpMap(e),n+=r.writeFmtp(e),n+=r.writeRtcpFb(e)});var a=0;return t.codecs.forEach(function(r){r.maxptime>a&&(a=r.maxptime)}),a>0&&(n+="a=maxptime:"+a+"\r\n"),n+="a=rtcp-mux\r\n",t.headerExtensions&&t.headerExtensions.forEach(function(e){n+=r.writeExtmap(e)}),n},r.parseRtpEncodingParameters=function(e){var t,n=[],a=r.parseRtpParameters(e),s=-1!==a.fecMechanisms.indexOf("RED"),i=-1!==a.fecMechanisms.indexOf("ULPFEC"),p=r.matchPrefix(e,"a=ssrc:").map(function(e){return r.parseSsrcMedia(e)}).filter(function(r){return"cname"===r.attribute}),c=p.length>0&&p[0].ssrc,o=r.matchPrefix(e,"a=ssrc-group:FID").map(function(r){return r.substr(17).split(" ").map(function(r){return parseInt(r,10)})});o.length>0&&o[0].length>1&&o[0][0]===c&&(t=o[0][1]),a.codecs.forEach(function(r){if("RTX"===r.name.toUpperCase()&&r.parameters.apt){var e={ssrc:c,codecPayloadType:parseInt(r.parameters.apt,10)};c&&t&&(e.rtx={ssrc:t}),n.push(e),s&&((e=JSON.parse(JSON.stringify(e))).fec={ssrc:c,mechanism:i?"red+ulpfec":"red"},n.push(e))}}),0===n.length&&c&&n.push({ssrc:c});var u=r.matchPrefix(e,"b=");return u.length&&(u=0===u[0].indexOf("b=TIAS:")?parseInt(u[0].substr(7),10):0===u[0].indexOf("b=AS:")?1e3*parseInt(u[0].substr(5),10)*.95-16e3:void 0,n.forEach(function(r){r.maxBitrate=u})),n},r.parseRtcpParameters=function(e){var t={},n=r.matchPrefix(e,"a=ssrc:").map(function(e){return r.parseSsrcMedia(e)}).filter(function(r){return"cname"===r.attribute})[0];n&&(t.cname=n.value,t.ssrc=n.ssrc);var a=r.matchPrefix(e,"a=rtcp-rsize");t.reducedSize=a.length>0,t.compound=0===a.length;var s=r.matchPrefix(e,"a=rtcp-mux");return t.mux=s.length>0,t},r.parseMsid=function(e){var t,n=r.matchPrefix(e,"a=msid:");if(1===n.length)return{stream:(t=n[0].substr(7).split(" "))[0],track:t[1]};var a=r.matchPrefix(e,"a=ssrc:").map(function(e){return r.parseSsrcMedia(e)}).filter(function(r){return"msid"===r.attribute});return a.length>0?{stream:(t=a[0].value.split(" "))[0],track:t[1]}:void 0},r.parseSctpDescription=function(e){var t,n=r.parseMLine(e),a=r.matchPrefix(e,"a=max-message-size:");a.length>0&&(t=parseInt(a[0].substr(19),10)),isNaN(t)&&(t=65536);var s=r.matchPrefix(e,"a=sctp-port:");if(s.length>0)return{port:parseInt(s[0].substr(12),10),protocol:n.fmt,maxMessageSize:t};if(r.matchPrefix(e,"a=sctpmap:").length>0){var i=r.matchPrefix(e,"a=sctpmap:")[0].substr(10).split(" ");return{port:parseInt(i[0],10),protocol:i[1],maxMessageSize:t}}},r.writeSctpDescription=function(r,e){var t=[];return t="DTLS/SCTP"!==r.protocol?["m="+r.kind+" 9 "+r.protocol+" "+e.protocol+"\r\n","c=IN IP4 0.0.0.0\r\n","a=sctp-port:"+e.port+"\r\n"]:["m="+r.kind+" 9 "+r.protocol+" "+e.port+"\r\n","c=IN IP4 0.0.0.0\r\n","a=sctpmap:"+e.port+" "+e.protocol+" 65535\r\n"],void 0!==e.maxMessageSize&&t.push("a=max-message-size:"+e.maxMessageSize+"\r\n"),t.join("")},r.generateSessionId=function(){return Math.random().toString().substr(2,21)},r.writeSessionBoilerplate=function(e,t,n){var a=void 0!==t?t:2;return"v=0\r\no="+(n||"thisisadapterortc")+" "+(e||r.generateSessionId())+" "+a+" IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"},r.writeMediaSection=function(e,t,n,a){var s=r.writeRtpDescription(e.kind,t);if(s+=r.writeIceParameters(e.iceGatherer.getLocalParameters()),s+=r.writeDtlsParameters(e.dtlsTransport.getLocalParameters(),"offer"===n?"actpass":"active"),s+="a=mid:"+e.mid+"\r\n",e.direction?s+="a="+e.direction+"\r\n":e.rtpSender&&e.rtpReceiver?s+="a=sendrecv\r\n":e.rtpSender?s+="a=sendonly\r\n":e.rtpReceiver?s+="a=recvonly\r\n":s+="a=inactive\r\n",e.rtpSender){var i="msid:"+a.id+" "+e.rtpSender.track.id+"\r\n";s+="a="+i,s+="a=ssrc:"+e.sendEncodingParameters[0].ssrc+" "+i,e.sendEncodingParameters[0].rtx&&(s+="a=ssrc:"+e.sendEncodingParameters[0].rtx.ssrc+" "+i,s+="a=ssrc-group:FID "+e.sendEncodingParameters[0].ssrc+" "+e.sendEncodingParameters[0].rtx.ssrc+"\r\n")}return s+="a=ssrc:"+e.sendEncodingParameters[0].ssrc+" cname:"+r.localCName+"\r\n",e.rtpSender&&e.sendEncodingParameters[0].rtx&&(s+="a=ssrc:"+e.sendEncodingParameters[0].rtx.ssrc+" cname:"+r.localCName+"\r\n"),s},r.getDirection=function(e,t){for(var n=r.splitLines(e),a=0;a<n.length;a++)switch(n[a]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return n[a].substr(2)}return t?r.getDirection(t):"sendrecv"},r.getKind=function(e){return r.splitLines(e)[0].split(" ")[0].substr(2)},r.isRejected=function(r){return"0"===r.split(" ",2)[1]},r.parseMLine=function(e){var t=r.splitLines(e)[0].substr(2).split(" ");return{kind:t[0],port:parseInt(t[1],10),protocol:t[2],fmt:t.slice(3).join(" ")}},r.parseOLine=function(e){var t=r.matchPrefix(e,"o=")[0].substr(2).split(" ");return{username:t[0],sessionId:t[1],sessionVersion:parseInt(t[2],10),netType:t[3],addressType:t[4],address:t[5]}},r.isValidSDP=function(e){if("string"!=typeof e||0===e.length)return!1;for(var t=r.splitLines(e),n=0;n<t.length;n++)if(t[n].length<2||"="!==t[n].charAt(1))return!1;return!0},"object"==typeof module&&(module.exports=r);
},{}],"NJ2u":[function(require,module,exports) {
"use strict";var e=require("sdp");function t(e){return{inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"}[e.type]||e.type}function r(t,r,n,a,i){var s=e.writeRtpDescription(t.kind,r);if(s+=e.writeIceParameters(t.iceGatherer.getLocalParameters()),s+=e.writeDtlsParameters(t.dtlsTransport.getLocalParameters(),"offer"===n?"actpass":i||"active"),s+="a=mid:"+t.mid+"\r\n",t.rtpSender&&t.rtpReceiver?s+="a=sendrecv\r\n":t.rtpSender?s+="a=sendonly\r\n":t.rtpReceiver?s+="a=recvonly\r\n":s+="a=inactive\r\n",t.rtpSender){var o=t.rtpSender._initialTrackId||t.rtpSender.track.id;t.rtpSender._initialTrackId=o;var c="msid:"+(a?a.id:"-")+" "+o+"\r\n";s+="a="+c,s+="a=ssrc:"+t.sendEncodingParameters[0].ssrc+" "+c,t.sendEncodingParameters[0].rtx&&(s+="a=ssrc:"+t.sendEncodingParameters[0].rtx.ssrc+" "+c,s+="a=ssrc-group:FID "+t.sendEncodingParameters[0].ssrc+" "+t.sendEncodingParameters[0].rtx.ssrc+"\r\n")}return s+="a=ssrc:"+t.sendEncodingParameters[0].ssrc+" cname:"+e.localCName+"\r\n",t.rtpSender&&t.sendEncodingParameters[0].rtx&&(s+="a=ssrc:"+t.sendEncodingParameters[0].rtx.ssrc+" cname:"+e.localCName+"\r\n"),s}function n(e,t){var r=!1;return(e=JSON.parse(JSON.stringify(e))).filter(function(e){if(e&&(e.urls||e.url)){var n=e.urls||e.url;e.url&&!e.urls&&console.warn("RTCIceServer.url is deprecated! Use urls instead.");var a="string"==typeof n;return a&&(n=[n]),n=n.filter(function(e){return 0===e.indexOf("turn:")&&-1!==e.indexOf("transport=udp")&&-1===e.indexOf("turn:[")&&!r?(r=!0,!0):0===e.indexOf("stun:")&&t>=14393&&-1===e.indexOf("?transport=udp")}),delete e.url,e.urls=a?n[0]:n,!!n.length}})}function a(e,t){var r={codecs:[],headerExtensions:[],fecMechanisms:[]},n=function(e,t){e=parseInt(e,10);for(var r=0;r<t.length;r++)if(t[r].payloadType===e||t[r].preferredPayloadType===e)return t[r]},a=function(e,t,r,a){var i=n(e.parameters.apt,r),s=n(t.parameters.apt,a);return i&&s&&i.name.toLowerCase()===s.name.toLowerCase()};return e.codecs.forEach(function(n){for(var i=0;i<t.codecs.length;i++){var s=t.codecs[i];if(n.name.toLowerCase()===s.name.toLowerCase()&&n.clockRate===s.clockRate){if("rtx"===n.name.toLowerCase()&&n.parameters&&s.parameters.apt&&!a(n,s,e.codecs,t.codecs))continue;(s=JSON.parse(JSON.stringify(s))).numChannels=Math.min(n.numChannels,s.numChannels),r.codecs.push(s),s.rtcpFeedback=s.rtcpFeedback.filter(function(e){for(var t=0;t<n.rtcpFeedback.length;t++)if(n.rtcpFeedback[t].type===e.type&&n.rtcpFeedback[t].parameter===e.parameter)return!0;return!1});break}}}),e.headerExtensions.forEach(function(e){for(var n=0;n<t.headerExtensions.length;n++){var a=t.headerExtensions[n];if(e.uri===a.uri){r.headerExtensions.push(a);break}}}),r}function i(e,t,r){return-1!=={offer:{setLocalDescription:["stable","have-local-offer"],setRemoteDescription:["stable","have-remote-offer"]},answer:{setLocalDescription:["have-remote-offer","have-local-pranswer"],setRemoteDescription:["have-local-offer","have-remote-pranswer"]}}[t][e].indexOf(r)}function s(e,t){var r=e.getRemoteCandidates().find(function(e){return t.foundation===e.foundation&&t.ip===e.ip&&t.port===e.port&&t.priority===e.priority&&t.protocol===e.protocol&&t.type===e.type});return r||e.addRemoteCandidate(t),!r}function o(e,t){var r=new Error(t);return r.name=e,r.code={NotSupportedError:9,InvalidStateError:11,InvalidAccessError:15,TypeError:void 0,OperationError:void 0}[e],r}module.exports=function(c,d){function p(e,t){t.addTrack(e),t.dispatchEvent(new c.MediaStreamTrackEvent("addtrack",{track:e}))}function l(e,t,r,n){var a=new Event("track");a.track=t,a.receiver=r,a.transceiver={receiver:r},a.streams=n,c.setTimeout(function(){e._dispatchEvent("track",a)})}var f=function(t){var r=this,a=document.createDocumentFragment();if(["addEventListener","removeEventListener","dispatchEvent"].forEach(function(e){r[e]=a[e].bind(a)}),this.canTrickleIceCandidates=null,this.needNegotiation=!1,this.localStreams=[],this.remoteStreams=[],this._localDescription=null,this._remoteDescription=null,this.signalingState="stable",this.iceConnectionState="new",this.connectionState="new",this.iceGatheringState="new",t=JSON.parse(JSON.stringify(t||{})),this.usingBundle="max-bundle"===t.bundlePolicy,"negotiate"===t.rtcpMuxPolicy)throw o("NotSupportedError","rtcpMuxPolicy 'negotiate' is not supported");switch(t.rtcpMuxPolicy||(t.rtcpMuxPolicy="require"),t.iceTransportPolicy){case"all":case"relay":break;default:t.iceTransportPolicy="all"}switch(t.bundlePolicy){case"balanced":case"max-compat":case"max-bundle":break;default:t.bundlePolicy="balanced"}if(t.iceServers=n(t.iceServers||[],d),this._iceGatherers=[],t.iceCandidatePoolSize)for(var i=t.iceCandidatePoolSize;i>0;i--)this._iceGatherers.push(new c.RTCIceGatherer({iceServers:t.iceServers,gatherPolicy:t.iceTransportPolicy}));else t.iceCandidatePoolSize=0;this._config=t,this.transceivers=[],this._sdpSessionId=e.generateSessionId(),this._sdpSessionVersion=0,this._dtlsRole=void 0,this._isClosed=!1};Object.defineProperty(f.prototype,"localDescription",{configurable:!0,get:function(){return this._localDescription}}),Object.defineProperty(f.prototype,"remoteDescription",{configurable:!0,get:function(){return this._remoteDescription}}),f.prototype.onicecandidate=null,f.prototype.onaddstream=null,f.prototype.ontrack=null,f.prototype.onremovestream=null,f.prototype.onsignalingstatechange=null,f.prototype.oniceconnectionstatechange=null,f.prototype.onconnectionstatechange=null,f.prototype.onicegatheringstatechange=null,f.prototype.onnegotiationneeded=null,f.prototype.ondatachannel=null,f.prototype._dispatchEvent=function(e,t){this._isClosed||(this.dispatchEvent(t),"function"==typeof this["on"+e]&&this["on"+e](t))},f.prototype._emitGatheringStateChange=function(){var e=new Event("icegatheringstatechange");this._dispatchEvent("icegatheringstatechange",e)},f.prototype.getConfiguration=function(){return this._config},f.prototype.getLocalStreams=function(){return this.localStreams},f.prototype.getRemoteStreams=function(){return this.remoteStreams},f.prototype._createTransceiver=function(e,t){var r=this.transceivers.length>0,n={track:null,iceGatherer:null,iceTransport:null,dtlsTransport:null,localCapabilities:null,remoteCapabilities:null,rtpSender:null,rtpReceiver:null,kind:e,mid:null,sendEncodingParameters:null,recvEncodingParameters:null,stream:null,associatedRemoteMediaStreams:[],wantReceive:!0};if(this.usingBundle&&r)n.iceTransport=this.transceivers[0].iceTransport,n.dtlsTransport=this.transceivers[0].dtlsTransport;else{var a=this._createIceAndDtlsTransports();n.iceTransport=a.iceTransport,n.dtlsTransport=a.dtlsTransport}return t||this.transceivers.push(n),n},f.prototype.addTrack=function(e,t){if(this._isClosed)throw o("InvalidStateError","Attempted to call addTrack on a closed peerconnection.");var r;if(this.transceivers.find(function(t){return t.track===e}))throw o("InvalidAccessError","Track already exists.");for(var n=0;n<this.transceivers.length;n++)this.transceivers[n].track||this.transceivers[n].kind!==e.kind||(r=this.transceivers[n]);return r||(r=this._createTransceiver(e.kind)),this._maybeFireNegotiationNeeded(),-1===this.localStreams.indexOf(t)&&this.localStreams.push(t),r.track=e,r.stream=t,r.rtpSender=new c.RTCRtpSender(e,r.dtlsTransport),r.rtpSender},f.prototype.addStream=function(e){var t=this;if(d>=15025)e.getTracks().forEach(function(r){t.addTrack(r,e)});else{var r=e.clone();e.getTracks().forEach(function(e,t){var n=r.getTracks()[t];e.addEventListener("enabled",function(e){n.enabled=e.enabled})}),r.getTracks().forEach(function(e){t.addTrack(e,r)})}},f.prototype.removeTrack=function(e){if(this._isClosed)throw o("InvalidStateError","Attempted to call removeTrack on a closed peerconnection.");if(!(e instanceof c.RTCRtpSender))throw new TypeError("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.");var t=this.transceivers.find(function(t){return t.rtpSender===e});if(!t)throw o("InvalidAccessError","Sender was not created by this connection.");var r=t.stream;t.rtpSender.stop(),t.rtpSender=null,t.track=null,t.stream=null,-1===this.transceivers.map(function(e){return e.stream}).indexOf(r)&&this.localStreams.indexOf(r)>-1&&this.localStreams.splice(this.localStreams.indexOf(r),1),this._maybeFireNegotiationNeeded()},f.prototype.removeStream=function(e){var t=this;e.getTracks().forEach(function(e){var r=t.getSenders().find(function(t){return t.track===e});r&&t.removeTrack(r)})},f.prototype.getSenders=function(){return this.transceivers.filter(function(e){return!!e.rtpSender}).map(function(e){return e.rtpSender})},f.prototype.getReceivers=function(){return this.transceivers.filter(function(e){return!!e.rtpReceiver}).map(function(e){return e.rtpReceiver})},f.prototype._createIceGatherer=function(e,t){var r=this;if(t&&e>0)return this.transceivers[0].iceGatherer;if(this._iceGatherers.length)return this._iceGatherers.shift();var n=new c.RTCIceGatherer({iceServers:this._config.iceServers,gatherPolicy:this._config.iceTransportPolicy});return Object.defineProperty(n,"state",{value:"new",writable:!0}),this.transceivers[e].bufferedCandidateEvents=[],this.transceivers[e].bufferCandidates=function(t){var a=!t.candidate||0===Object.keys(t.candidate).length;n.state=a?"completed":"gathering",null!==r.transceivers[e].bufferedCandidateEvents&&r.transceivers[e].bufferedCandidateEvents.push(t)},n.addEventListener("localcandidate",this.transceivers[e].bufferCandidates),n},f.prototype._gather=function(t,r){var n=this,a=this.transceivers[r].iceGatherer;if(!a.onlocalcandidate){var i=this.transceivers[r].bufferedCandidateEvents;this.transceivers[r].bufferedCandidateEvents=null,a.removeEventListener("localcandidate",this.transceivers[r].bufferCandidates),a.onlocalcandidate=function(i){if(!(n.usingBundle&&r>0)){var s=new Event("icecandidate");s.candidate={sdpMid:t,sdpMLineIndex:r};var o=i.candidate,c=!o||0===Object.keys(o).length;if(c)"new"!==a.state&&"gathering"!==a.state||(a.state="completed");else{"new"===a.state&&(a.state="gathering"),o.component=1,o.ufrag=a.getLocalParameters().usernameFragment;var d=e.writeCandidate(o);s.candidate=Object.assign(s.candidate,e.parseCandidate(d)),s.candidate.candidate=d,s.candidate.toJSON=function(){return{candidate:s.candidate.candidate,sdpMid:s.candidate.sdpMid,sdpMLineIndex:s.candidate.sdpMLineIndex,usernameFragment:s.candidate.usernameFragment}}}var p=e.getMediaSections(n._localDescription.sdp);p[s.candidate.sdpMLineIndex]+=c?"a=end-of-candidates\r\n":"a="+s.candidate.candidate+"\r\n",n._localDescription.sdp=e.getDescription(n._localDescription.sdp)+p.join("");var l=n.transceivers.every(function(e){return e.iceGatherer&&"completed"===e.iceGatherer.state});"gathering"!==n.iceGatheringState&&(n.iceGatheringState="gathering",n._emitGatheringStateChange()),c||n._dispatchEvent("icecandidate",s),l&&(n._dispatchEvent("icecandidate",new Event("icecandidate")),n.iceGatheringState="complete",n._emitGatheringStateChange())}},c.setTimeout(function(){i.forEach(function(e){a.onlocalcandidate(e)})},0)}},f.prototype._createIceAndDtlsTransports=function(){var e=this,t=new c.RTCIceTransport(null);t.onicestatechange=function(){e._updateIceConnectionState(),e._updateConnectionState()};var r=new c.RTCDtlsTransport(t);return r.ondtlsstatechange=function(){e._updateConnectionState()},r.onerror=function(){Object.defineProperty(r,"state",{value:"failed",writable:!0}),e._updateConnectionState()},{iceTransport:t,dtlsTransport:r}},f.prototype._disposeIceAndDtlsTransports=function(e){var t=this.transceivers[e].iceGatherer;t&&(delete t.onlocalcandidate,delete this.transceivers[e].iceGatherer);var r=this.transceivers[e].iceTransport;r&&(delete r.onicestatechange,delete this.transceivers[e].iceTransport);var n=this.transceivers[e].dtlsTransport;n&&(delete n.ondtlsstatechange,delete n.onerror,delete this.transceivers[e].dtlsTransport)},f.prototype._transceive=function(t,r,n){var i=a(t.localCapabilities,t.remoteCapabilities);r&&t.rtpSender&&(i.encodings=t.sendEncodingParameters,i.rtcp={cname:e.localCName,compound:t.rtcpParameters.compound},t.recvEncodingParameters.length&&(i.rtcp.ssrc=t.recvEncodingParameters[0].ssrc),t.rtpSender.send(i)),n&&t.rtpReceiver&&i.codecs.length>0&&("video"===t.kind&&t.recvEncodingParameters&&d<15019&&t.recvEncodingParameters.forEach(function(e){delete e.rtx}),t.recvEncodingParameters.length?i.encodings=t.recvEncodingParameters:i.encodings=[{}],i.rtcp={compound:t.rtcpParameters.compound},t.rtcpParameters.cname&&(i.rtcp.cname=t.rtcpParameters.cname),t.sendEncodingParameters.length&&(i.rtcp.ssrc=t.sendEncodingParameters[0].ssrc),t.rtpReceiver.receive(i))},f.prototype.setLocalDescription=function(t){var r,n,s=this;if(-1===["offer","answer"].indexOf(t.type))return Promise.reject(o("TypeError",'Unsupported type "'+t.type+'"'));if(!i("setLocalDescription",t.type,s.signalingState)||s._isClosed)return Promise.reject(o("InvalidStateError","Can not set local "+t.type+" in state "+s.signalingState));if("offer"===t.type)r=e.splitSections(t.sdp),n=r.shift(),r.forEach(function(t,r){var n=e.parseRtpParameters(t);s.transceivers[r].localCapabilities=n}),s.transceivers.forEach(function(e,t){s._gather(e.mid,t)});else if("answer"===t.type){r=e.splitSections(s._remoteDescription.sdp),n=r.shift();var c=e.matchPrefix(n,"a=ice-lite").length>0;r.forEach(function(t,r){var i=s.transceivers[r],o=i.iceGatherer,d=i.iceTransport,p=i.dtlsTransport,l=i.localCapabilities,f=i.remoteCapabilities;if(!(e.isRejected(t)&&0===e.matchPrefix(t,"a=bundle-only").length)&&!i.rejected){var u=e.getIceParameters(t,n),v=e.getDtlsParameters(t,n);c&&(v.role="server"),s.usingBundle&&0!==r||(s._gather(i.mid,r),"new"===d.state&&d.start(o,u,c?"controlling":"controlled"),"new"===p.state&&p.start(v));var h=a(l,f);s._transceive(i,h.codecs.length>0,!1)}})}return s._localDescription={type:t.type,sdp:t.sdp},"offer"===t.type?s._updateSignalingState("have-local-offer"):s._updateSignalingState("stable"),Promise.resolve()},f.prototype.setRemoteDescription=function(t){var r=this;if(-1===["offer","answer"].indexOf(t.type))return Promise.reject(o("TypeError",'Unsupported type "'+t.type+'"'));if(!i("setRemoteDescription",t.type,r.signalingState)||r._isClosed)return Promise.reject(o("InvalidStateError","Can not set remote "+t.type+" in state "+r.signalingState));var n={};r.remoteStreams.forEach(function(e){n[e.id]=e});var f=[],u=e.splitSections(t.sdp),v=u.shift(),h=e.matchPrefix(v,"a=ice-lite").length>0,m=e.matchPrefix(v,"a=group:BUNDLE ").length>0;r.usingBundle=m;var g=e.matchPrefix(v,"a=ice-options:")[0];return r.canTrickleIceCandidates=!!g&&g.substr(14).split(" ").indexOf("trickle")>=0,u.forEach(function(i,o){var l=e.splitLines(i),u=e.getKind(i),g=e.isRejected(i)&&0===e.matchPrefix(i,"a=bundle-only").length,y=l[0].substr(2).split(" ")[2],S=e.getDirection(i,v),T=e.parseMsid(i),E=e.getMid(i)||e.generateIdentifier();if(g||"application"===u&&("DTLS/SCTP"===y||"UDP/DTLS/SCTP"===y))r.transceivers[o]={mid:E,kind:u,protocol:y,rejected:!0};else{var C,P,w,R,_,k,b,x,D;!g&&r.transceivers[o]&&r.transceivers[o].rejected&&(r.transceivers[o]=r._createTransceiver(u,!0));var I,L,M=e.parseRtpParameters(i);g||(I=e.getIceParameters(i,v),(L=e.getDtlsParameters(i,v)).role="client"),b=e.parseRtpEncodingParameters(i);var O=e.parseRtcpParameters(i),G=e.matchPrefix(i,"a=end-of-candidates",v).length>0,j=e.matchPrefix(i,"a=candidate:").map(function(t){return e.parseCandidate(t)}).filter(function(e){return 1===e.component});if(("offer"===t.type||"answer"===t.type)&&!g&&m&&o>0&&r.transceivers[o]&&(r._disposeIceAndDtlsTransports(o),r.transceivers[o].iceGatherer=r.transceivers[0].iceGatherer,r.transceivers[o].iceTransport=r.transceivers[0].iceTransport,r.transceivers[o].dtlsTransport=r.transceivers[0].dtlsTransport,r.transceivers[o].rtpSender&&r.transceivers[o].rtpSender.setTransport(r.transceivers[0].dtlsTransport),r.transceivers[o].rtpReceiver&&r.transceivers[o].rtpReceiver.setTransport(r.transceivers[0].dtlsTransport)),"offer"!==t.type||g){if("answer"===t.type&&!g){P=(C=r.transceivers[o]).iceGatherer,w=C.iceTransport,R=C.dtlsTransport,_=C.rtpReceiver,k=C.sendEncodingParameters,x=C.localCapabilities,r.transceivers[o].recvEncodingParameters=b,r.transceivers[o].remoteCapabilities=M,r.transceivers[o].rtcpParameters=O,j.length&&"new"===w.state&&(!h&&!G||m&&0!==o?j.forEach(function(e){s(C.iceTransport,e)}):w.setRemoteCandidates(j)),m&&0!==o||("new"===w.state&&w.start(P,I,"controlling"),"new"===R.state&&R.start(L)),!a(C.localCapabilities,C.remoteCapabilities).codecs.filter(function(e){return"rtx"===e.name.toLowerCase()}).length&&C.sendEncodingParameters[0].rtx&&delete C.sendEncodingParameters[0].rtx,r._transceive(C,"sendrecv"===S||"recvonly"===S,"sendrecv"===S||"sendonly"===S),!_||"sendrecv"!==S&&"sendonly"!==S?delete C.rtpReceiver:(D=_.track,T?(n[T.stream]||(n[T.stream]=new c.MediaStream),p(D,n[T.stream]),f.push([D,_,n[T.stream]])):(n.default||(n.default=new c.MediaStream),p(D,n.default),f.push([D,_,n.default])))}}else{(C=r.transceivers[o]||r._createTransceiver(u)).mid=E,C.iceGatherer||(C.iceGatherer=r._createIceGatherer(o,m)),j.length&&"new"===C.iceTransport.state&&(!G||m&&0!==o?j.forEach(function(e){s(C.iceTransport,e)}):C.iceTransport.setRemoteCandidates(j)),x=c.RTCRtpReceiver.getCapabilities(u),d<15019&&(x.codecs=x.codecs.filter(function(e){return"rtx"!==e.name})),k=C.sendEncodingParameters||[{ssrc:1001*(2*o+2)}];var N,A=!1;if("sendrecv"===S||"sendonly"===S){if(A=!C.rtpReceiver,_=C.rtpReceiver||new c.RTCRtpReceiver(C.dtlsTransport,u),A)D=_.track,T&&"-"===T.stream||(T?(n[T.stream]||(n[T.stream]=new c.MediaStream,Object.defineProperty(n[T.stream],"id",{get:function(){return T.stream}})),Object.defineProperty(D,"id",{get:function(){return T.track}}),N=n[T.stream]):(n.default||(n.default=new c.MediaStream),N=n.default)),N&&(p(D,N),C.associatedRemoteMediaStreams.push(N)),f.push([D,_,N])}else C.rtpReceiver&&C.rtpReceiver.track&&(C.associatedRemoteMediaStreams.forEach(function(e){var t,r,n=e.getTracks().find(function(e){return e.id===C.rtpReceiver.track.id});n&&(t=n,(r=e).removeTrack(t),r.dispatchEvent(new c.MediaStreamTrackEvent("removetrack",{track:t})))}),C.associatedRemoteMediaStreams=[]);C.localCapabilities=x,C.remoteCapabilities=M,C.rtpReceiver=_,C.rtcpParameters=O,C.sendEncodingParameters=k,C.recvEncodingParameters=b,r._transceive(r.transceivers[o],!1,A)}}}),void 0===r._dtlsRole&&(r._dtlsRole="offer"===t.type?"active":"passive"),r._remoteDescription={type:t.type,sdp:t.sdp},"offer"===t.type?r._updateSignalingState("have-remote-offer"):r._updateSignalingState("stable"),Object.keys(n).forEach(function(e){var t=n[e];if(t.getTracks().length){if(-1===r.remoteStreams.indexOf(t)){r.remoteStreams.push(t);var a=new Event("addstream");a.stream=t,c.setTimeout(function(){r._dispatchEvent("addstream",a)})}f.forEach(function(e){var n=e[0],a=e[1];t.id===e[2].id&&l(r,n,a,[t])})}}),f.forEach(function(e){e[2]||l(r,e[0],e[1],[])}),c.setTimeout(function(){r&&r.transceivers&&r.transceivers.forEach(function(e){e.iceTransport&&"new"===e.iceTransport.state&&e.iceTransport.getRemoteCandidates().length>0&&(console.warn("Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification"),e.iceTransport.addRemoteCandidate({}))})},4e3),Promise.resolve()},f.prototype.close=function(){this.transceivers.forEach(function(e){e.iceTransport&&e.iceTransport.stop(),e.dtlsTransport&&e.dtlsTransport.stop(),e.rtpSender&&e.rtpSender.stop(),e.rtpReceiver&&e.rtpReceiver.stop()}),this._isClosed=!0,this._updateSignalingState("closed")},f.prototype._updateSignalingState=function(e){this.signalingState=e;var t=new Event("signalingstatechange");this._dispatchEvent("signalingstatechange",t)},f.prototype._maybeFireNegotiationNeeded=function(){var e=this;"stable"===this.signalingState&&!0!==this.needNegotiation&&(this.needNegotiation=!0,c.setTimeout(function(){if(e.needNegotiation){e.needNegotiation=!1;var t=new Event("negotiationneeded");e._dispatchEvent("negotiationneeded",t)}},0))},f.prototype._updateIceConnectionState=function(){var e,t={new:0,closed:0,checking:0,connected:0,completed:0,disconnected:0,failed:0};if(this.transceivers.forEach(function(e){e.iceTransport&&!e.rejected&&t[e.iceTransport.state]++}),e="new",t.failed>0?e="failed":t.checking>0?e="checking":t.disconnected>0?e="disconnected":t.new>0?e="new":t.connected>0?e="connected":t.completed>0&&(e="completed"),e!==this.iceConnectionState){this.iceConnectionState=e;var r=new Event("iceconnectionstatechange");this._dispatchEvent("iceconnectionstatechange",r)}},f.prototype._updateConnectionState=function(){var e,t={new:0,closed:0,connecting:0,connected:0,completed:0,disconnected:0,failed:0};if(this.transceivers.forEach(function(e){e.iceTransport&&e.dtlsTransport&&!e.rejected&&(t[e.iceTransport.state]++,t[e.dtlsTransport.state]++)}),t.connected+=t.completed,e="new",t.failed>0?e="failed":t.connecting>0?e="connecting":t.disconnected>0?e="disconnected":t.new>0?e="new":t.connected>0&&(e="connected"),e!==this.connectionState){this.connectionState=e;var r=new Event("connectionstatechange");this._dispatchEvent("connectionstatechange",r)}},f.prototype.createOffer=function(){var t=this;if(t._isClosed)return Promise.reject(o("InvalidStateError","Can not call createOffer after close"));var n=t.transceivers.filter(function(e){return"audio"===e.kind}).length,a=t.transceivers.filter(function(e){return"video"===e.kind}).length,i=arguments[0];if(i){if(i.mandatory||i.optional)throw new TypeError("Legacy mandatory/optional constraints not supported.");void 0!==i.offerToReceiveAudio&&(n=!0===i.offerToReceiveAudio?1:!1===i.offerToReceiveAudio?0:i.offerToReceiveAudio),void 0!==i.offerToReceiveVideo&&(a=!0===i.offerToReceiveVideo?1:!1===i.offerToReceiveVideo?0:i.offerToReceiveVideo)}for(t.transceivers.forEach(function(e){"audio"===e.kind?--n<0&&(e.wantReceive=!1):"video"===e.kind&&--a<0&&(e.wantReceive=!1)});n>0||a>0;)n>0&&(t._createTransceiver("audio"),n--),a>0&&(t._createTransceiver("video"),a--);var s=e.writeSessionBoilerplate(t._sdpSessionId,t._sdpSessionVersion++);t.transceivers.forEach(function(r,n){var a=r.track,i=r.kind,s=r.mid||e.generateIdentifier();r.mid=s,r.iceGatherer||(r.iceGatherer=t._createIceGatherer(n,t.usingBundle));var o=c.RTCRtpSender.getCapabilities(i);d<15019&&(o.codecs=o.codecs.filter(function(e){return"rtx"!==e.name})),o.codecs.forEach(function(e){"H264"===e.name&&void 0===e.parameters["level-asymmetry-allowed"]&&(e.parameters["level-asymmetry-allowed"]="1"),r.remoteCapabilities&&r.remoteCapabilities.codecs&&r.remoteCapabilities.codecs.forEach(function(t){e.name.toLowerCase()===t.name.toLowerCase()&&e.clockRate===t.clockRate&&(e.preferredPayloadType=t.payloadType)})}),o.headerExtensions.forEach(function(e){(r.remoteCapabilities&&r.remoteCapabilities.headerExtensions||[]).forEach(function(t){e.uri===t.uri&&(e.id=t.id)})});var p=r.sendEncodingParameters||[{ssrc:1001*(2*n+1)}];a&&d>=15019&&"video"===i&&!p[0].rtx&&(p[0].rtx={ssrc:p[0].ssrc+1}),r.wantReceive&&(r.rtpReceiver=new c.RTCRtpReceiver(r.dtlsTransport,i)),r.localCapabilities=o,r.sendEncodingParameters=p}),"max-compat"!==t._config.bundlePolicy&&(s+="a=group:BUNDLE "+t.transceivers.map(function(e){return e.mid}).join(" ")+"\r\n"),s+="a=ice-options:trickle\r\n",t.transceivers.forEach(function(n,a){s+=r(n,n.localCapabilities,"offer",n.stream,t._dtlsRole),s+="a=rtcp-rsize\r\n",!n.iceGatherer||"new"===t.iceGatheringState||0!==a&&t.usingBundle||(n.iceGatherer.getLocalCandidates().forEach(function(t){t.component=1,s+="a="+e.writeCandidate(t)+"\r\n"}),"completed"===n.iceGatherer.state&&(s+="a=end-of-candidates\r\n"))});var p=new c.RTCSessionDescription({type:"offer",sdp:s});return Promise.resolve(p)},f.prototype.createAnswer=function(){var t=this;if(t._isClosed)return Promise.reject(o("InvalidStateError","Can not call createAnswer after close"));if("have-remote-offer"!==t.signalingState&&"have-local-pranswer"!==t.signalingState)return Promise.reject(o("InvalidStateError","Can not call createAnswer in signalingState "+t.signalingState));var n=e.writeSessionBoilerplate(t._sdpSessionId,t._sdpSessionVersion++);t.usingBundle&&(n+="a=group:BUNDLE "+t.transceivers.map(function(e){return e.mid}).join(" ")+"\r\n"),n+="a=ice-options:trickle\r\n";var i=e.getMediaSections(t._remoteDescription.sdp).length;t.transceivers.forEach(function(e,s){if(!(s+1>i)){if(e.rejected)return"application"===e.kind?"DTLS/SCTP"===e.protocol?n+="m=application 0 DTLS/SCTP 5000\r\n":n+="m=application 0 "+e.protocol+" webrtc-datachannel\r\n":"audio"===e.kind?n+="m=audio 0 UDP/TLS/RTP/SAVPF 0\r\na=rtpmap:0 PCMU/8000\r\n":"video"===e.kind&&(n+="m=video 0 UDP/TLS/RTP/SAVPF 120\r\na=rtpmap:120 VP8/90000\r\n"),void(n+="c=IN IP4 0.0.0.0\r\na=inactive\r\na=mid:"+e.mid+"\r\n");var o;if(e.stream)"audio"===e.kind?o=e.stream.getAudioTracks()[0]:"video"===e.kind&&(o=e.stream.getVideoTracks()[0]),o&&d>=15019&&"video"===e.kind&&!e.sendEncodingParameters[0].rtx&&(e.sendEncodingParameters[0].rtx={ssrc:e.sendEncodingParameters[0].ssrc+1});var c=a(e.localCapabilities,e.remoteCapabilities);!c.codecs.filter(function(e){return"rtx"===e.name.toLowerCase()}).length&&e.sendEncodingParameters[0].rtx&&delete e.sendEncodingParameters[0].rtx,n+=r(e,c,"answer",e.stream,t._dtlsRole),e.rtcpParameters&&e.rtcpParameters.reducedSize&&(n+="a=rtcp-rsize\r\n")}});var s=new c.RTCSessionDescription({type:"answer",sdp:n});return Promise.resolve(s)},f.prototype.addIceCandidate=function(t){var r,n=this;return t&&void 0===t.sdpMLineIndex&&!t.sdpMid?Promise.reject(new TypeError("sdpMLineIndex or sdpMid required")):new Promise(function(a,i){if(!n._remoteDescription)return i(o("InvalidStateError","Can not add ICE candidate without a remote description"));if(t&&""!==t.candidate){var c=t.sdpMLineIndex;if(t.sdpMid)for(var d=0;d<n.transceivers.length;d++)if(n.transceivers[d].mid===t.sdpMid){c=d;break}var p=n.transceivers[c];if(!p)return i(o("OperationError","Can not add ICE candidate"));if(p.rejected)return a();var l=Object.keys(t.candidate).length>0?e.parseCandidate(t.candidate):{};if("tcp"===l.protocol&&(0===l.port||9===l.port))return a();if(l.component&&1!==l.component)return a();if((0===c||c>0&&p.iceTransport!==n.transceivers[0].iceTransport)&&!s(p.iceTransport,l))return i(o("OperationError","Can not add ICE candidate"));var f=t.candidate.trim();0===f.indexOf("a=")&&(f=f.substr(2)),(r=e.getMediaSections(n._remoteDescription.sdp))[c]+="a="+(l.type?f:"end-of-candidates")+"\r\n",n._remoteDescription.sdp=e.getDescription(n._remoteDescription.sdp)+r.join("")}else for(var u=0;u<n.transceivers.length&&(n.transceivers[u].rejected||(n.transceivers[u].iceTransport.addRemoteCandidate({}),(r=e.getMediaSections(n._remoteDescription.sdp))[u]+="a=end-of-candidates\r\n",n._remoteDescription.sdp=e.getDescription(n._remoteDescription.sdp)+r.join(""),!n.usingBundle));u++);a()})},f.prototype.getStats=function(e){if(e&&e instanceof c.MediaStreamTrack){var t=null;if(this.transceivers.forEach(function(r){r.rtpSender&&r.rtpSender.track===e?t=r.rtpSender:r.rtpReceiver&&r.rtpReceiver.track===e&&(t=r.rtpReceiver)}),!t)throw o("InvalidAccessError","Invalid selector.");return t.getStats()}var r=[];return this.transceivers.forEach(function(e){["rtpSender","rtpReceiver","iceGatherer","iceTransport","dtlsTransport"].forEach(function(t){e[t]&&r.push(e[t].getStats())})}),Promise.all(r).then(function(e){var t=new Map;return e.forEach(function(e){e.forEach(function(e){t.set(e.id,e)})}),t})};["RTCRtpSender","RTCRtpReceiver","RTCIceGatherer","RTCIceTransport","RTCDtlsTransport"].forEach(function(e){var r=c[e];if(r&&r.prototype&&r.prototype.getStats){var n=r.prototype.getStats;r.prototype.getStats=function(){return n.apply(this).then(function(e){var r=new Map;return Object.keys(e).forEach(function(n){e[n].type=t(e[n]),r.set(n,e[n])}),r})}}});var u=["createOffer","createAnswer"];return u.forEach(function(e){var t=f.prototype[e];f.prototype[e]=function(){var e=arguments;return"function"==typeof e[0]||"function"==typeof e[1]?t.apply(this,[arguments[2]]).then(function(t){"function"==typeof e[0]&&e[0].apply(null,[t])},function(t){"function"==typeof e[1]&&e[1].apply(null,[t])}):t.apply(this,arguments)}}),(u=["setLocalDescription","setRemoteDescription","addIceCandidate"]).forEach(function(e){var t=f.prototype[e];f.prototype[e]=function(){var e=arguments;return"function"==typeof e[1]||"function"==typeof e[2]?t.apply(this,arguments).then(function(){"function"==typeof e[1]&&e[1].apply(null)},function(t){"function"==typeof e[2]&&e[2].apply(null,[t])}):t.apply(this,arguments)}}),["getStats"].forEach(function(e){var t=f.prototype[e];f.prototype[e]=function(){var e=arguments;return"function"==typeof e[1]?t.apply(this,arguments).then(function(){"function"==typeof e[1]&&e[1].apply(null)}):t.apply(this,arguments)}}),f};
},{"sdp":"YHvh"}],"YdKx":[function(require,module,exports) {
"use strict";function e(e){var r=e&&e.navigator,t=r.mediaDevices.getUserMedia.bind(r.mediaDevices);r.mediaDevices.getUserMedia=function(e){return t(e).catch(function(e){return Promise.reject(function(e){return{name:{PermissionDeniedError:"NotAllowedError"}[e.name]||e.name,message:e.message,constraint:e.constraint,toString:function(){return this.name}}}(e))})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimGetUserMedia=e;
},{}],"P3bV":[function(require,module,exports) {
"use strict";function e(e){"getDisplayMedia"in e.navigator&&e.navigator.mediaDevices&&(e.navigator.mediaDevices&&"getDisplayMedia"in e.navigator.mediaDevices||(e.navigator.mediaDevices.getDisplayMedia=e.navigator.getDisplayMedia.bind(e.navigator)))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimGetDisplayMedia=e;
},{}],"XRic":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimPeerConnection=a,exports.shimReplaceTrack=p,Object.defineProperty(exports,"shimGetUserMedia",{enumerable:!0,get:function(){return n.shimGetUserMedia}}),Object.defineProperty(exports,"shimGetDisplayMedia",{enumerable:!0,get:function(){return i.shimGetDisplayMedia}});var e=s(require("../utils")),t=require("./filtericeservers"),r=o(require("rtcpeerconnection-shim")),n=require("./getusermedia"),i=require("./getdisplaymedia");function o(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function s(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}function a(n){var i=e.detectBrowser(n);if(n.RTCIceGatherer&&(n.RTCIceCandidate||(n.RTCIceCandidate=function(e){return e}),n.RTCSessionDescription||(n.RTCSessionDescription=function(e){return e}),i.version<15025)){var o=Object.getOwnPropertyDescriptor(n.MediaStreamTrack.prototype,"enabled");Object.defineProperty(n.MediaStreamTrack.prototype,"enabled",{set:function(e){o.set.call(this,e);var t=new Event("enabled");t.enabled=e,this.dispatchEvent(t)}})}!n.RTCRtpSender||"dtmf"in n.RTCRtpSender.prototype||Object.defineProperty(n.RTCRtpSender.prototype,"dtmf",{get:function(){return void 0===this._dtmf&&("audio"===this.track.kind?this._dtmf=new n.RTCDtmfSender(this):"video"===this.track.kind&&(this._dtmf=null)),this._dtmf}}),n.RTCDtmfSender&&!n.RTCDTMFSender&&(n.RTCDTMFSender=n.RTCDtmfSender);var c=(0,r.default)(n,i.version);n.RTCPeerConnection=function(r){return r&&r.iceServers&&(r.iceServers=(0,t.filterIceServers)(r.iceServers,i.version),e.log("ICE servers after filtering:",r.iceServers)),new c(r)},n.RTCPeerConnection.prototype=c.prototype}function p(e){!e.RTCRtpSender||"replaceTrack"in e.RTCRtpSender.prototype||(e.RTCRtpSender.prototype.replaceTrack=e.RTCRtpSender.prototype.setTrack)}
},{"../utils":"iSxC","./filtericeservers":"NZ1C","rtcpeerconnection-shim":"NJ2u","./getusermedia":"YdKx","./getdisplaymedia":"P3bV"}],"GzSv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimGetUserMedia=n;var e=o(require("../utils"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var o=t();if(o&&o.has(e))return o.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=n?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}return r.default=e,o&&o.set(e,r),r}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(t){var o=e.detectBrowser(t),n=t&&t.navigator,i=t&&t.MediaStreamTrack;if(n.getUserMedia=function(t,o,r){e.deprecated("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),n.mediaDevices.getUserMedia(t).then(o,r)},!(o.version>55&&"autoGainControl"in n.mediaDevices.getSupportedConstraints())){var a=function(e,t,o){t in e&&!(o in e)&&(e[o]=e[t],delete e[t])},s=n.mediaDevices.getUserMedia.bind(n.mediaDevices);if(n.mediaDevices.getUserMedia=function(e){return"object"===r(e)&&"object"===r(e.audio)&&(e=JSON.parse(JSON.stringify(e)),a(e.audio,"autoGainControl","mozAutoGainControl"),a(e.audio,"noiseSuppression","mozNoiseSuppression")),s(e)},i&&i.prototype.getSettings){var p=i.prototype.getSettings;i.prototype.getSettings=function(){var e=p.apply(this,arguments);return a(e,"mozAutoGainControl","autoGainControl"),a(e,"mozNoiseSuppression","noiseSuppression"),e}}if(i&&i.prototype.applyConstraints){var u=i.prototype.applyConstraints;i.prototype.applyConstraints=function(e){return"audio"===this.kind&&"object"===r(e)&&(e=JSON.parse(JSON.stringify(e)),a(e,"autoGainControl","mozAutoGainControl"),a(e,"noiseSuppression","mozNoiseSuppression")),u.apply(this,[e])}}}}
},{"../utils":"iSxC"}],"UuGU":[function(require,module,exports) {
"use strict";function e(e,i){e.navigator.mediaDevices&&"getDisplayMedia"in e.navigator.mediaDevices||e.navigator.mediaDevices&&(e.navigator.mediaDevices.getDisplayMedia=function(a){if(!a||!a.video){var t=new DOMException("getDisplayMedia without video constraints is undefined");return t.name="NotFoundError",t.code=8,Promise.reject(t)}return!0===a.video?a.video={mediaSource:i}:a.video.mediaSource=i,e.navigator.mediaDevices.getUserMedia(a)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimGetDisplayMedia=e;
},{}],"Fzdr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimOnTrack=c,exports.shimPeerConnection=s,exports.shimSenderGetStats=p,exports.shimReceiverGetStats=u,exports.shimRemoveStream=f,exports.shimRTCDataChannel=C,exports.shimAddTransceiver=d,exports.shimCreateOffer=y,exports.shimCreateAnswer=l,Object.defineProperty(exports,"shimGetUserMedia",{enumerable:!0,get:function(){return t.shimGetUserMedia}}),Object.defineProperty(exports,"shimGetDisplayMedia",{enumerable:!0,get:function(){return r.shimGetDisplayMedia}});var e=o(require("../utils")),t=require("./getusermedia"),r=require("./getdisplaymedia");function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){"object"===a(e)&&e.RTCTrackEvent&&"receiver"in e.RTCTrackEvent.prototype&&!("transceiver"in e.RTCTrackEvent.prototype)&&Object.defineProperty(e.RTCTrackEvent.prototype,"transceiver",{get:function(){return{receiver:this.receiver}}})}function s(t){var r=e.detectBrowser(t);if("object"===a(t)&&(t.RTCPeerConnection||t.mozRTCPeerConnection)){if(!t.RTCPeerConnection&&t.mozRTCPeerConnection&&(t.RTCPeerConnection=t.mozRTCPeerConnection),r.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(e){var r=t.RTCPeerConnection.prototype[e],n=i({},e,function(){return arguments[0]=new("addIceCandidate"===e?t.RTCIceCandidate:t.RTCSessionDescription)(arguments[0]),r.apply(this,arguments)});t.RTCPeerConnection.prototype[e]=n[e]}),r.version<68){var n=t.RTCPeerConnection.prototype.addIceCandidate;t.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?arguments[0]&&""===arguments[0].candidate?Promise.resolve():n.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())}}var o={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},c=t.RTCPeerConnection.prototype.getStats;t.RTCPeerConnection.prototype.getStats=function(){var[e,t,n]=arguments;return c.apply(this,[e||null]).then(function(e){if(r.version<53&&!t)try{e.forEach(function(e){e.type=o[e.type]||e.type})}catch(n){if("TypeError"!==n.name)throw n;e.forEach(function(t,r){e.set(r,Object.assign({},t,{type:o[t.type]||t.type}))})}return e}).then(t,n)}}}function p(e){if("object"===a(e)&&e.RTCPeerConnection&&e.RTCRtpSender&&!(e.RTCRtpSender&&"getStats"in e.RTCRtpSender.prototype)){var t=e.RTCPeerConnection.prototype.getSenders;t&&(e.RTCPeerConnection.prototype.getSenders=function(){var e=this,r=t.apply(this,[]);return r.forEach(function(t){return t._pc=e}),r});var r=e.RTCPeerConnection.prototype.addTrack;r&&(e.RTCPeerConnection.prototype.addTrack=function(){var e=r.apply(this,arguments);return e._pc=this,e}),e.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}}function u(t){if("object"===a(t)&&t.RTCPeerConnection&&t.RTCRtpSender&&!(t.RTCRtpSender&&"getStats"in t.RTCRtpReceiver.prototype)){var r=t.RTCPeerConnection.prototype.getReceivers;r&&(t.RTCPeerConnection.prototype.getReceivers=function(){var e=this,t=r.apply(this,[]);return t.forEach(function(t){return t._pc=e}),t}),e.wrapPeerConnectionEvent(t,"track",function(e){return e.receiver._pc=e.srcElement,e}),t.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}}function f(t){!t.RTCPeerConnection||"removeStream"in t.RTCPeerConnection.prototype||(t.RTCPeerConnection.prototype.removeStream=function(t){var r=this;e.deprecated("removeStream","removeTrack"),this.getSenders().forEach(function(e){e.track&&t.getTracks().includes(e.track)&&r.removeTrack(e)})})}function C(e){e.DataChannel&&!e.RTCDataChannel&&(e.RTCDataChannel=e.DataChannel)}function d(e){if("object"===a(e)&&e.RTCPeerConnection){var t=e.RTCPeerConnection.prototype.addTransceiver;t&&(e.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];var e=arguments[1],r=e&&"sendEncodings"in e;r&&e.sendEncodings.forEach(function(e){if("rid"in e){if(!/^[a-z0-9]{0,16}$/i.test(e.rid))throw new TypeError("Invalid RID value provided.")}if("scaleResolutionDownBy"in e&&!(parseFloat(e.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in e&&!(parseFloat(e.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});var n=t.apply(this,arguments);if(r){var{sender:o}=n,i=o.getParameters();"encodings"in i||(i.encodings=e.sendEncodings,this.setParametersPromises.push(o.setParameters(i).catch(function(){})))}return n})}}function y(e){if("object"===a(e)&&e.RTCPeerConnection){var t=e.RTCPeerConnection.prototype.createOffer;e.RTCPeerConnection.prototype.createOffer=function(){var e=arguments,r=this;return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(function(){return t.apply(r,e)}).finally(function(){r.setParametersPromises=[]}):t.apply(this,arguments)}}}function l(e){if("object"===a(e)&&e.RTCPeerConnection){var t=e.RTCPeerConnection.prototype.createAnswer;e.RTCPeerConnection.prototype.createAnswer=function(){var e=arguments,r=this;return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(function(){return t.apply(r,e)}).finally(function(){r.setParametersPromises=[]}):t.apply(this,arguments)}}}
},{"../utils":"iSxC","./getusermedia":"GzSv","./getdisplaymedia":"UuGU"}],"t1lL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimLocalStreamsAPI=n,exports.shimRemoteStreamsAPI=i,exports.shimCallbacksAPI=a,exports.shimGetUserMedia=s,exports.shimConstraints=c,exports.shimRTCIceServerUrls=d,exports.shimTrackEventTransceiver=f,exports.shimCreateOfferLegacy=p;var e=r(require("../utils"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function r(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=t();if(r&&r.has(e))return r.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=n?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(o,i,a):o[i]=e[i]}return o.default=e,r&&r.set(e,o),o}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e){if("object"===o(e)&&e.RTCPeerConnection){if("getLocalStreams"in e.RTCPeerConnection.prototype||(e.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in e.RTCPeerConnection.prototype)){var t=e.RTCPeerConnection.prototype.addTrack;e.RTCPeerConnection.prototype.addStream=function(e){var r=this;this._localStreams||(this._localStreams=[]),this._localStreams.includes(e)||this._localStreams.push(e),e.getAudioTracks().forEach(function(o){return t.call(r,o,e)}),e.getVideoTracks().forEach(function(o){return t.call(r,o,e)})},e.RTCPeerConnection.prototype.addTrack=function(e){var r=arguments[1];return r&&(this._localStreams?this._localStreams.includes(r)||this._localStreams.push(r):this._localStreams=[r]),t.apply(this,arguments)}}"removeStream"in e.RTCPeerConnection.prototype||(e.RTCPeerConnection.prototype.removeStream=function(e){var t=this;this._localStreams||(this._localStreams=[]);var r=this._localStreams.indexOf(e);if(-1!==r){this._localStreams.splice(r,1);var o=e.getTracks();this.getSenders().forEach(function(e){o.includes(e.track)&&t.removeTrack(e)})}})}}function i(e){if("object"===o(e)&&e.RTCPeerConnection&&("getRemoteStreams"in e.RTCPeerConnection.prototype||(e.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in e.RTCPeerConnection.prototype))){Object.defineProperty(e.RTCPeerConnection.prototype,"onaddstream",{get:function(){return this._onaddstream},set:function(e){var t=this;this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=e),this.addEventListener("track",this._onaddstreampoly=function(e){e.streams.forEach(function(e){if(t._remoteStreams||(t._remoteStreams=[]),!t._remoteStreams.includes(e)){t._remoteStreams.push(e);var r=new Event("addstream");r.stream=e,t.dispatchEvent(r)}})})}});var t=e.RTCPeerConnection.prototype.setRemoteDescription;e.RTCPeerConnection.prototype.setRemoteDescription=function(){var e=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(t){t.streams.forEach(function(t){if(e._remoteStreams||(e._remoteStreams=[]),!(e._remoteStreams.indexOf(t)>=0)){e._remoteStreams.push(t);var r=new Event("addstream");r.stream=t,e.dispatchEvent(r)}})}),t.apply(e,arguments)}}}function a(e){if("object"===o(e)&&e.RTCPeerConnection){var t=e.RTCPeerConnection.prototype,r=t.createOffer,n=t.createAnswer,i=t.setLocalDescription,a=t.setRemoteDescription,s=t.addIceCandidate;t.createOffer=function(e,t){var o=arguments.length>=2?arguments[2]:arguments[0],n=r.apply(this,[o]);return t?(n.then(e,t),Promise.resolve()):n},t.createAnswer=function(e,t){var r=arguments.length>=2?arguments[2]:arguments[0],o=n.apply(this,[r]);return t?(o.then(e,t),Promise.resolve()):o};var c=function(e,t,r){var o=i.apply(this,[e]);return r?(o.then(t,r),Promise.resolve()):o};t.setLocalDescription=c,c=function(e,t,r){var o=a.apply(this,[e]);return r?(o.then(t,r),Promise.resolve()):o},t.setRemoteDescription=c,c=function(e,t,r){var o=s.apply(this,[e]);return r?(o.then(t,r),Promise.resolve()):o},t.addIceCandidate=c}}function s(e){var t=e&&e.navigator;if(t.mediaDevices&&t.mediaDevices.getUserMedia){var r=t.mediaDevices,o=r.getUserMedia.bind(r);t.mediaDevices.getUserMedia=function(e){return o(c(e))}}!t.getUserMedia&&t.mediaDevices&&t.mediaDevices.getUserMedia&&(t.getUserMedia=function(e,r,o){t.mediaDevices.getUserMedia(e).then(r,o)}.bind(t))}function c(t){return t&&void 0!==t.video?Object.assign({},t,{video:e.compactObject(t.video)}):t}function d(t){var r=t.RTCPeerConnection;t.RTCPeerConnection=function(t,o){if(t&&t.iceServers){for(var n=[],i=0;i<t.iceServers.length;i++){var a=t.iceServers[i];!a.hasOwnProperty("urls")&&a.hasOwnProperty("url")?(e.deprecated("RTCIceServer.url","RTCIceServer.urls"),(a=JSON.parse(JSON.stringify(a))).urls=a.url,delete a.url,n.push(a)):n.push(t.iceServers[i])}t.iceServers=n}return new r(t,o)},t.RTCPeerConnection.prototype=r.prototype,"generateCertificate"in t.RTCPeerConnection&&Object.defineProperty(t.RTCPeerConnection,"generateCertificate",{get:function(){return r.generateCertificate}})}function f(e){"object"===o(e)&&e.RTCTrackEvent&&"receiver"in e.RTCTrackEvent.prototype&&!("transceiver"in e.RTCTrackEvent.prototype)&&Object.defineProperty(e.RTCTrackEvent.prototype,"transceiver",{get:function(){return{receiver:this.receiver}}})}function p(e){var t=e.RTCPeerConnection.prototype.createOffer;e.RTCPeerConnection.prototype.createOffer=function(e){if(e){void 0!==e.offerToReceiveAudio&&(e.offerToReceiveAudio=!!e.offerToReceiveAudio);var r=this.getTransceivers().find(function(e){return"audio"===e.receiver.track.kind});!1===e.offerToReceiveAudio&&r?"sendrecv"===r.direction?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":"recvonly"===r.direction&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):!0!==e.offerToReceiveAudio||r||this.addTransceiver("audio"),void 0!==e.offerToReceiveVideo&&(e.offerToReceiveVideo=!!e.offerToReceiveVideo);var o=this.getTransceivers().find(function(e){return"video"===e.receiver.track.kind});!1===e.offerToReceiveVideo&&o?"sendrecv"===o.direction?o.setDirection?o.setDirection("sendonly"):o.direction="sendonly":"recvonly"===o.direction&&(o.setDirection?o.setDirection("inactive"):o.direction="inactive"):!0!==e.offerToReceiveVideo||o||this.addTransceiver("video")}return t.apply(this,arguments)}}
},{"../utils":"iSxC"}],"GOQK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimRTCIceCandidate=a,exports.shimMaxMessageSize=c,exports.shimSendThrowTypeError=s,exports.shimConnectionState=p,exports.removeAllowExtmapMixed=u;var e=r(require("sdp")),t=o(require("./utils"));function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var o={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=r?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(o,i,a):o[i]=e[i]}return o.default=e,t&&t.set(e,o),o}function r(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(n){if(n.RTCIceCandidate&&!(n.RTCIceCandidate&&"foundation"in n.RTCIceCandidate.prototype)){var o=n.RTCIceCandidate;n.RTCIceCandidate=function(t){if("object"===i(t)&&t.candidate&&0===t.candidate.indexOf("a=")&&((t=JSON.parse(JSON.stringify(t))).candidate=t.candidate.substr(2)),t.candidate&&t.candidate.length){var n=new o(t),r=e.default.parseCandidate(t.candidate),a=Object.assign(n,r);return a.toJSON=function(){return{candidate:a.candidate,sdpMid:a.sdpMid,sdpMLineIndex:a.sdpMLineIndex,usernameFragment:a.usernameFragment}},a}return new o(t)},n.RTCIceCandidate.prototype=o.prototype,t.wrapPeerConnectionEvent(n,"icecandidate",function(e){return e.candidate&&Object.defineProperty(e,"candidate",{value:new n.RTCIceCandidate(e.candidate),writable:"false"}),e})}}function c(n){if(n.RTCPeerConnection){var o=t.detectBrowser(n);"sctp"in n.RTCPeerConnection.prototype||Object.defineProperty(n.RTCPeerConnection.prototype,"sctp",{get:function(){return void 0===this._sctp?null:this._sctp}});var r=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,"chrome"===o.browser&&o.version>=76){var{sdpSemantics:t}=this.getConfiguration();"plan-b"===t&&Object.defineProperty(this,"sctp",{get:function(){return void 0===this._sctp?null:this._sctp},enumerable:!0,configurable:!0})}if(function(t){if(!t||!t.sdp)return!1;var n=e.default.splitSections(t.sdp);return n.shift(),n.some(function(t){var n=e.default.parseMLine(t);return n&&"application"===n.kind&&-1!==n.protocol.indexOf("SCTP")})}(arguments[0])){var n,i=function(e){var t=e.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(null===t||t.length<2)return-1;var n=parseInt(t[1],10);return n!=n?-1:n}(arguments[0]),a=(p=i,u=65536,"firefox"===o.browser&&(u=o.version<57?-1===p?16384:2147483637:o.version<60?57===o.version?65535:65536:2147483637),u),c=function(t,n){var r=65536;"firefox"===o.browser&&57===o.version&&(r=65535);var i=e.default.matchPrefix(t.sdp,"a=max-message-size:");return i.length>0?r=parseInt(i[0].substr(19),10):"firefox"===o.browser&&-1!==n&&(r=2147483637),r}(arguments[0],i);n=0===a&&0===c?Number.POSITIVE_INFINITY:0===a||0===c?Math.max(a,c):Math.min(a,c);var s={};Object.defineProperty(s,"maxMessageSize",{get:function(){return n}}),this._sctp=s}var p,u;return r.apply(this,arguments)}}}function s(e){if(e.RTCPeerConnection&&"createDataChannel"in e.RTCPeerConnection.prototype){var n=e.RTCPeerConnection.prototype.createDataChannel;e.RTCPeerConnection.prototype.createDataChannel=function(){var e=n.apply(this,arguments);return o(e,this),e},t.wrapPeerConnectionEvent(e,"datachannel",function(e){return o(e.channel,e.target),e})}function o(e,t){var n=e.send;e.send=function(){var o=arguments[0],r=o.length||o.size||o.byteLength;if("open"===e.readyState&&t.sctp&&r>t.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+t.sctp.maxMessageSize+" bytes)");return n.apply(e,arguments)}}}function p(e){if(e.RTCPeerConnection&&!("connectionState"in e.RTCPeerConnection.prototype)){var t=e.RTCPeerConnection.prototype;Object.defineProperty(t,"connectionState",{get:function(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(t,"onconnectionstatechange",{get:function(){return this._onconnectionstatechange||null},set:function(e){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),e&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=e)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(function(e){var n=t[e];t[e]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=function(e){var t=e.target;if(t._lastConnectionState!==t.connectionState){t._lastConnectionState=t.connectionState;var n=new Event("connectionstatechange",e);t.dispatchEvent(n)}return e},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}})}}function u(e){if(e.RTCPeerConnection){var n=t.detectBrowser(e);if(!("chrome"===n.browser&&n.version>=71)){var o=e.RTCPeerConnection.prototype.setRemoteDescription;e.RTCPeerConnection.prototype.setRemoteDescription=function(e){return e&&e.sdp&&-1!==e.sdp.indexOf("\na=extmap-allow-mixed")&&(e.sdp=e.sdp.split("\n").filter(function(e){return"a=extmap-allow-mixed"!==e.trim()}).join("\n")),o.apply(this,arguments)}}}}
},{"sdp":"YHvh","./utils":"iSxC"}],"KtlG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.adapterFactory=m;var e=o(require("./utils")),r=o(require("./chrome/chrome_shim")),i=o(require("./edge/edge_shim")),s=o(require("./firefox/firefox_shim")),t=o(require("./safari/safari_shim")),a=o(require("./common_shim"));function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=n();if(r&&r.has(e))return r.get(e);var i={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var a=s?Object.getOwnPropertyDescriptor(e,t):null;a&&(a.get||a.set)?Object.defineProperty(i,t,a):i[t]=e[t]}return i.default=e,r&&r.set(e,i),i}function m(){var{window:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{shimChrome:!0,shimFirefox:!0,shimEdge:!0,shimSafari:!0},m=e.log,h=e.detectBrowser(n),d={browserDetails:h,commonShim:a,extractVersion:e.extractVersion,disableLog:e.disableLog,disableWarnings:e.disableWarnings};switch(h.browser){case"chrome":if(!r||!r.shimPeerConnection||!o.shimChrome)return m("Chrome shim is not included in this adapter release."),d;m("adapter.js shimming chrome."),d.browserShim=r,r.shimGetUserMedia(n),r.shimMediaStream(n),r.shimPeerConnection(n),r.shimOnTrack(n),r.shimAddTrackRemoveTrack(n),r.shimGetSendersWithDtmf(n),r.shimGetStats(n),r.shimSenderReceiverGetStats(n),r.fixNegotiationNeeded(n),a.shimRTCIceCandidate(n),a.shimConnectionState(n),a.shimMaxMessageSize(n),a.shimSendThrowTypeError(n),a.removeAllowExtmapMixed(n);break;case"firefox":if(!s||!s.shimPeerConnection||!o.shimFirefox)return m("Firefox shim is not included in this adapter release."),d;m("adapter.js shimming firefox."),d.browserShim=s,s.shimGetUserMedia(n),s.shimPeerConnection(n),s.shimOnTrack(n),s.shimRemoveStream(n),s.shimSenderGetStats(n),s.shimReceiverGetStats(n),s.shimRTCDataChannel(n),s.shimAddTransceiver(n),s.shimCreateOffer(n),s.shimCreateAnswer(n),a.shimRTCIceCandidate(n),a.shimConnectionState(n),a.shimMaxMessageSize(n),a.shimSendThrowTypeError(n);break;case"edge":if(!i||!i.shimPeerConnection||!o.shimEdge)return m("MS edge shim is not included in this adapter release."),d;m("adapter.js shimming edge."),d.browserShim=i,i.shimGetUserMedia(n),i.shimGetDisplayMedia(n),i.shimPeerConnection(n),i.shimReplaceTrack(n),a.shimMaxMessageSize(n),a.shimSendThrowTypeError(n);break;case"safari":if(!t||!o.shimSafari)return m("Safari shim is not included in this adapter release."),d;m("adapter.js shimming safari."),d.browserShim=t,t.shimRTCIceServerUrls(n),t.shimCreateOfferLegacy(n),t.shimCallbacksAPI(n),t.shimLocalStreamsAPI(n),t.shimRemoteStreamsAPI(n),t.shimTrackEventTransceiver(n),t.shimGetUserMedia(n),a.shimRTCIceCandidate(n),a.shimMaxMessageSize(n),a.shimSendThrowTypeError(n),a.removeAllowExtmapMixed(n);break;default:m("Unsupported browser!")}return d}
},{"./utils":"iSxC","./chrome/chrome_shim":"uI5X","./edge/edge_shim":"XRic","./firefox/firefox_shim":"Fzdr","./safari/safari_shim":"t1lL","./common_shim":"GOQK"}],"tI1X":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./adapter_factory.js"),r=(0,e.adapterFactory)({window:window}),t=r;exports.default=t;
},{"./adapter_factory.js":"KtlG"}],"sXtV":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("webrtc-adapter"));exports.webRTCAdapter=t.default;
},{"webrtc-adapter":"tI1X"}],"I31f":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var r=require("./adapter");exports.Supports=new(function(){function e(){this.isIOS=["iPad","iPhone","iPod"].includes(navigator.platform),this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}return e.prototype.isWebRTCSupported=function(){return"undefined"!=typeof RTCPeerConnection},e.prototype.isBrowserSupported=function(){var r=this.getBrowser(),e=this.getVersion();return!!this.supportedBrowsers.includes(r)&&("chrome"===r?e>=this.minChromeVersion:"firefox"===r?e>=this.minFirefoxVersion:"safari"===r&&(!this.isIOS&&e>=this.minSafariVersion))},e.prototype.getBrowser=function(){return r.webRTCAdapter.browserDetails.browser},e.prototype.getVersion=function(){return r.webRTCAdapter.browserDetails.version||0},e.prototype.isUnifiedPlanSupported=function(){var e,i=this.getBrowser(),t=r.webRTCAdapter.browserDetails.version||0;if("chrome"===i&&t<72)return!1;if("firefox"===i&&t>=59)return!0;if(!(window.RTCRtpTransceiver&&"currentDirection"in RTCRtpTransceiver.prototype))return!1;var o=!1;try{(e=new RTCPeerConnection).addTransceiver("audio"),o=!0}catch(n){}finally{e&&e.close()}return o},e.prototype.toString=function(){return"Supports: \n    browser:"+this.getBrowser()+" \n    version:"+this.getVersion()+" \n    isIOS:"+this.isIOS+" \n    isWebRTCSupported:"+this.isWebRTCSupported()+" \n    isBrowserSupported:"+this.isBrowserSupported()+" \n    isUnifiedPlanSupported:"+this.isUnifiedPlanSupported()},e}());
},{"./adapter":"sXtV"}],"BHXf":[function(require,module,exports) {
"use strict";var r=this&&this.__importStar||function(r){if(r&&r.__esModule)return r;var t={};if(null!=r)for(var e in r)Object.hasOwnProperty.call(r,e)&&(t[e]=r[e]);return t.default=r,t};Object.defineProperty(exports,"__esModule",{value:!0});var t=r(require("peerjs-js-binarypack")),e=require("./supports"),o={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"turn:0.peerjs.com:3478",username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};exports.util=new(function(){function r(){this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.chunkedMTU=16300,this.defaultConfig=o,this.browser=e.Supports.getBrowser(),this.browserVersion=e.Supports.getVersion(),this.supports=function(){var r,t={browser:e.Supports.isBrowserSupported(),webRTC:e.Supports.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;try{r=new RTCPeerConnection(o),t.audioVideo=!0;var n=void 0;try{n=r.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!n.ordered;try{n.binaryType="blob",t.binaryBlob=!e.Supports.isIOS}catch(a){}}catch(a){}finally{n&&n.close()}}catch(a){}finally{r&&r.close()}return t}(),this.pack=t.pack,this.unpack=t.unpack,this._dataCount=1}return r.prototype.noop=function(){},r.prototype.validateId=function(r){return!r||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(r)},r.prototype.chunk=function(r){for(var t=[],e=r.size,o=Math.ceil(e/exports.util.chunkedMTU),n=0,a=0;a<e;){var i=Math.min(e,a+exports.util.chunkedMTU),s=r.slice(a,i),u={__peerData:this._dataCount,n:n,data:s,total:o};t.push(u),a=i,n++}return this._dataCount++,t},r.prototype.blobToArrayBuffer=function(r,t){var e=new FileReader;return e.onload=function(r){r.target&&t(r.target.result)},e.readAsArrayBuffer(r),e},r.prototype.binaryStringToArrayBuffer=function(r){for(var t=new Uint8Array(r.length),e=0;e<r.length;e++)t[e]=255&r.charCodeAt(e);return t.buffer},r.prototype.randomToken=function(){return Math.random().toString(36).substr(2)},r.prototype.isSecure=function(){return"https:"===location.protocol},r}());
},{"peerjs-js-binarypack":"kdPp","./supports":"I31f"}],"JJlS":[function(require,module,exports) {
"use strict";var e=Object.prototype.hasOwnProperty,t="~";function n(){}function r(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function o(e,n,o,s,i){if("function"!=typeof o)throw new TypeError("The listener must be a function");var c=new r(o,s||e,i),f=t?t+n:n;return e._events[f]?e._events[f].fn?e._events[f]=[e._events[f],c]:e._events[f].push(c):(e._events[f]=c,e._eventsCount++),e}function s(e,t){0==--e._eventsCount?e._events=new n:delete e._events[t]}function i(){this._events=new n,this._eventsCount=0}Object.create&&(n.prototype=Object.create(null),(new n).__proto__||(t=!1)),i.prototype.eventNames=function(){var n,r,o=[];if(0===this._eventsCount)return o;for(r in n=this._events)e.call(n,r)&&o.push(t?r.slice(1):r);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(n)):o},i.prototype.listeners=function(e){var n=t?t+e:e,r=this._events[n];if(!r)return[];if(r.fn)return[r.fn];for(var o=0,s=r.length,i=new Array(s);o<s;o++)i[o]=r[o].fn;return i},i.prototype.listenerCount=function(e){var n=t?t+e:e,r=this._events[n];return r?r.fn?1:r.length:0},i.prototype.emit=function(e,n,r,o,s,i){var c=t?t+e:e;if(!this._events[c])return!1;var f,u,a=this._events[c],l=arguments.length;if(a.fn){switch(a.once&&this.removeListener(e,a.fn,void 0,!0),l){case 1:return a.fn.call(a.context),!0;case 2:return a.fn.call(a.context,n),!0;case 3:return a.fn.call(a.context,n,r),!0;case 4:return a.fn.call(a.context,n,r,o),!0;case 5:return a.fn.call(a.context,n,r,o,s),!0;case 6:return a.fn.call(a.context,n,r,o,s,i),!0}for(u=1,f=new Array(l-1);u<l;u++)f[u-1]=arguments[u];a.fn.apply(a.context,f)}else{var v,h=a.length;for(u=0;u<h;u++)switch(a[u].once&&this.removeListener(e,a[u].fn,void 0,!0),l){case 1:a[u].fn.call(a[u].context);break;case 2:a[u].fn.call(a[u].context,n);break;case 3:a[u].fn.call(a[u].context,n,r);break;case 4:a[u].fn.call(a[u].context,n,r,o);break;default:if(!f)for(v=1,f=new Array(l-1);v<l;v++)f[v-1]=arguments[v];a[u].fn.apply(a[u].context,f)}}return!0},i.prototype.on=function(e,t,n){return o(this,e,t,n,!1)},i.prototype.once=function(e,t,n){return o(this,e,t,n,!0)},i.prototype.removeListener=function(e,n,r,o){var i=t?t+e:e;if(!this._events[i])return this;if(!n)return s(this,i),this;var c=this._events[i];if(c.fn)c.fn!==n||o&&!c.once||r&&c.context!==r||s(this,i);else{for(var f=0,u=[],a=c.length;f<a;f++)(c[f].fn!==n||o&&!c[f].once||r&&c[f].context!==r)&&u.push(c[f]);u.length?this._events[i]=1===u.length?u[0]:u:s(this,i)}return this},i.prototype.removeAllListeners=function(e){var r;return e?(r=t?t+e:e,this._events[r]&&s(this,r)):(this._events=new n,this._eventsCount=0),this},i.prototype.off=i.prototype.removeListener,i.prototype.addListener=i.prototype.on,i.prefixed=t,i.EventEmitter=i,"undefined"!=typeof module&&(module.exports=i);
},{}],"WOs9":[function(require,module,exports) {
"use strict";var r=this&&this.__read||function(r,e){var o="function"==typeof Symbol&&r[Symbol.iterator];if(!o)return r;var t,n,l=o.call(r),i=[];try{for(;(void 0===e||e-- >0)&&!(t=l.next()).done;)i.push(t.value)}catch(s){n={error:s}}finally{try{t&&!t.done&&(o=l.return)&&o.call(l)}finally{if(n)throw n.error}}return i},e=this&&this.__spread||function(){for(var e=[],o=0;o<arguments.length;o++)e=e.concat(r(arguments[o]));return e};Object.defineProperty(exports,"__esModule",{value:!0});var o,t="PeerJS: ";!function(r){r[r.Disabled=0]="Disabled",r[r.Errors=1]="Errors",r[r.Warnings=2]="Warnings",r[r.All=3]="All"}(o=exports.LogLevel||(exports.LogLevel={}));var n=function(){function r(){this._logLevel=o.Disabled}return Object.defineProperty(r.prototype,"logLevel",{get:function(){return this._logLevel},set:function(r){this._logLevel=r},enumerable:!0,configurable:!0}),r.prototype.log=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];this._logLevel>=o.All&&this._print.apply(this,e([o.All],r))},r.prototype.warn=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];this._logLevel>=o.Warnings&&this._print.apply(this,e([o.Warnings],r))},r.prototype.error=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];this._logLevel>=o.Errors&&this._print.apply(this,e([o.Errors],r))},r.prototype.setLogFunction=function(r){this._print=r},r.prototype._print=function(r){for(var n=[],l=1;l<arguments.length;l++)n[l-1]=arguments[l];var i=e([t],n);for(var s in i)i[s]instanceof Error&&(i[s]="("+i[s].name+") "+i[s].message);r>=o.All?console.log.apply(console,e(i)):r>=o.Warnings?console.warn.apply(console,e(["WARNING"],i)):r>=o.Errors&&console.error.apply(console,e(["ERROR"],i))},r}();exports.default=new n;
},{}],"ZRYf":[function(require,module,exports) {
"use strict";var e,r,n,o,t,a,i;Object.defineProperty(exports,"__esModule",{value:!0}),function(e){e.Open="open",e.Stream="stream",e.Data="data",e.Close="close",e.Error="error",e.IceStateChanged="iceStateChanged"}(e=exports.ConnectionEventType||(exports.ConnectionEventType={})),function(e){e.Data="data",e.Media="media"}(r=exports.ConnectionType||(exports.ConnectionType={})),function(e){e.Open="open",e.Close="close",e.Connection="connection",e.Call="call",e.Disconnected="disconnected",e.Error="error"}(n=exports.PeerEventType||(exports.PeerEventType={})),function(e){e.BrowserIncompatible="browser-incompatible",e.Disconnected="disconnected",e.InvalidID="invalid-id",e.InvalidKey="invalid-key",e.Network="network",e.PeerUnavailable="peer-unavailable",e.SslUnavailable="ssl-unavailable",e.ServerError="server-error",e.SocketError="socket-error",e.SocketClosed="socket-closed",e.UnavailableID="unavailable-id",e.WebRTC="webrtc"}(o=exports.PeerErrorType||(exports.PeerErrorType={})),function(e){e.Binary="binary",e.BinaryUTF8="binary-utf8",e.JSON="json"}(t=exports.SerializationType||(exports.SerializationType={})),function(e){e.Message="message",e.Disconnected="disconnected",e.Error="error",e.Close="close"}(a=exports.SocketEventType||(exports.SocketEventType={})),function(e){e.Heartbeat="HEARTBEAT",e.Candidate="CANDIDATE",e.Offer="OFFER",e.Answer="ANSWER",e.Open="OPEN",e.Error="ERROR",e.IdTaken="ID-TAKEN",e.InvalidKey="INVALID-KEY",e.Leave="LEAVE",e.Expire="EXPIRE"}(i=exports.ServerMessageType||(exports.ServerMessageType={}));
},{}],"wJlv":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function s(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(s.prototype=n.prototype,new s)}}(),t=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var s,o,r=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(s=r.next()).done;)i.push(s.value)}catch(c){o={error:c}}finally{try{s&&!s.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return i},n=this&&this.__spread||function(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(t(arguments[n]));return e},s=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],s=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&s>=e.length&&(e=void 0),{value:e&&e[s++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("eventemitter3"),i=o(require("./logger")),c=require("./enums"),a=function(t){function o(e,n,s,o,r,i){void 0===i&&(i=5e3);var c=t.call(this)||this;c.pingInterval=i,c._disconnected=!0,c._messagesQueue=[];var a=e?"wss://":"ws://";return c._baseUrl=a+n+":"+s+o+"peerjs?key="+r,c}return e(o,t),o.prototype.start=function(e,t){var n=this;this._id=e;var s=this._baseUrl+"&id="+e+"&token="+t;!this._socket&&this._disconnected&&(this._socket=new WebSocket(s),this._disconnected=!1,this._socket.onmessage=function(e){var t;try{t=JSON.parse(e.data),i.default.log("Server message received:",t)}catch(s){return void i.default.log("Invalid server message",e.data)}n.emit(c.SocketEventType.Message,t)},this._socket.onclose=function(e){n._disconnected||(i.default.log("Socket closed.",e),n._cleanup(),n._disconnected=!0,n.emit(c.SocketEventType.Disconnected))},this._socket.onopen=function(){n._disconnected||(n._sendQueuedMessages(),i.default.log("Socket open"),n._scheduleHeartbeat())})},o.prototype._scheduleHeartbeat=function(){var e=this;this._wsPingTimer=setTimeout(function(){e._sendHeartbeat()},this.pingInterval)},o.prototype._sendHeartbeat=function(){if(this._wsOpen()){var e=JSON.stringify({type:c.ServerMessageType.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}else i.default.log("Cannot send heartbeat, because socket closed")},o.prototype._wsOpen=function(){return!!this._socket&&1===this._socket.readyState},o.prototype._sendQueuedMessages=function(){var e,t,o=n(this._messagesQueue);this._messagesQueue=[];try{for(var r=s(o),i=r.next();!i.done;i=r.next()){var c=i.value;this.send(c)}}catch(a){e={error:a}}finally{try{i&&!i.done&&(t=r.return)&&t.call(r)}finally{if(e)throw e.error}}},o.prototype.send=function(e){if(!this._disconnected)if(this._id)if(e.type){if(this._wsOpen()){var t=JSON.stringify(e);this._socket.send(t)}}else this.emit(c.SocketEventType.Error,"Invalid message");else this._messagesQueue.push(e)},o.prototype.close=function(){this._disconnected||(this._cleanup(),this._disconnected=!0)},o.prototype._cleanup=function(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)},o}(r.EventEmitter);exports.Socket=a;
},{"eventemitter3":"JJlS","./logger":"WOs9","./enums":"ZRYf"}],"HCdX":[function(require,module,exports) {
"use strict";var e=this&&this.__assign||function(){return(e=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)},n=this&&this.__awaiter||function(e,n,t,o){return new(t||(t=Promise))(function(i,r){function c(e){try{s(o.next(e))}catch(n){r(n)}}function a(e){try{s(o.throw(e))}catch(n){r(n)}}function s(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t(function(e){e(n)})).then(c,a)}s((o=o.apply(e,n||[])).next())})},t=this&&this.__generator||function(e,n){var t,o,i,r,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(r){return function(a){return function(r){if(t)throw new TypeError("Generator is already executing.");for(;c;)try{if(t=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return c.label++,{value:r[1],done:!1};case 5:c.label++,o=r[1],r=[0];continue;case 7:r=c.ops.pop(),c.trys.pop();continue;default:if(!(i=(i=c.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){c=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){c.label=r[1];break}if(6===r[0]&&c.label<i[1]){c.label=i[1],i=r;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(r);break}i[2]&&c.ops.pop(),c.trys.pop();continue}r=n.call(e,c)}catch(a){r=[6,a],o=0}finally{t=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,a])}}},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var i=require("./util"),r=o(require("./logger")),c=require("./enums"),a=function(){function o(e){this.connection=e}return o.prototype.startConnection=function(e){var n=this._startPeerConnection();if(this.connection.peerConnection=n,this.connection.type===c.ConnectionType.Media&&e._stream&&this._addTracksToConnection(e._stream,n),e.originator){if(this.connection.type===c.ConnectionType.Data){var t=this.connection,o={ordered:!!e.reliable},i=n.createDataChannel(t.label,o);t.initialize(i)}this._makeOffer()}else this.handleSDP("OFFER",e.sdp)},o.prototype._startPeerConnection=function(){r.default.log("Creating RTCPeerConnection.");var e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e},o.prototype._setupListeners=function(e){var n=this,t=this.connection.peer,o=this.connection.connectionId,a=this.connection.type,s=this.connection.provider;r.default.log("Listening for ICE candidates."),e.onicecandidate=function(e){e.candidate&&e.candidate.candidate&&(r.default.log("Received ICE candidates for "+t+":",e.candidate),s.socket.send({type:c.ServerMessageType.Candidate,payload:{candidate:e.candidate,type:a,connectionId:o},dst:t}))},e.oniceconnectionstatechange=function(){switch(e.iceConnectionState){case"failed":r.default.log("iceConnectionState is failed, closing connections to "+t),n.connection.emit(c.ConnectionEventType.Error,new Error("Negotiation of connection to "+t+" failed.")),n.connection.close();break;case"closed":r.default.log("iceConnectionState is closed, closing connections to "+t),n.connection.emit(c.ConnectionEventType.Error,new Error("Connection to "+t+" closed.")),n.connection.close();break;case"disconnected":r.default.log("iceConnectionState is disconnected, closing connections to "+t),n.connection.emit(c.ConnectionEventType.Error,new Error("Connection to "+t+" disconnected.")),n.connection.close();break;case"completed":e.onicecandidate=i.util.noop}n.connection.emit(c.ConnectionEventType.IceStateChanged,e.iceConnectionState)},r.default.log("Listening for data channel"),e.ondatachannel=function(e){r.default.log("Received data channel");var n=e.channel;s.getConnection(t,o).initialize(n)},r.default.log("Listening for remote stream"),e.ontrack=function(e){r.default.log("Received remote stream");var i=e.streams[0],a=s.getConnection(t,o);if(a.type===c.ConnectionType.Media){var d=a;n._addStreamToMediaConnection(i,d)}}},o.prototype.cleanup=function(){r.default.log("Cleaning up PeerConnection to "+this.connection.peer);var e=this.connection.peerConnection;if(e){this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=function(){};var n="closed"!==e.signalingState,t=!1;if(this.connection.type===c.ConnectionType.Data){var o=this.connection.dataChannel;o&&(t=!!o.readyState&&"closed"!==o.readyState)}(n||t)&&e.close()}},o.prototype._makeOffer=function(){return n(this,void 0,Promise,function(){var n,o,a,s,d,l,u;return t(this,function(t){switch(t.label){case 0:n=this.connection.peerConnection,o=this.connection.provider,t.label=1;case 1:return t.trys.push([1,7,,8]),[4,n.createOffer(this.connection.options.constraints)];case 2:a=t.sent(),r.default.log("Created offer."),this.connection.options.sdpTransform&&"function"==typeof this.connection.options.sdpTransform&&(a.sdp=this.connection.options.sdpTransform(a.sdp)||a.sdp),t.label=3;case 3:return t.trys.push([3,5,,6]),[4,n.setLocalDescription(a)];case 4:return t.sent(),r.default.log("Set localDescription:",a,"for:"+this.connection.peer),s={sdp:a,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata,browser:i.util.browser},this.connection.type===c.ConnectionType.Data&&(d=this.connection,s=e(e({},s),{label:d.label,reliable:d.reliable,serialization:d.serialization})),o.socket.send({type:c.ServerMessageType.Offer,payload:s,dst:this.connection.peer}),[3,6];case 5:return"OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"!=(l=t.sent())&&(o.emitError(c.PeerErrorType.WebRTC,l),r.default.log("Failed to setLocalDescription, ",l)),[3,6];case 6:return[3,8];case 7:return u=t.sent(),o.emitError(c.PeerErrorType.WebRTC,u),r.default.log("Failed to createOffer, ",u),[3,8];case 8:return[2]}})})},o.prototype._makeAnswer=function(){return n(this,void 0,Promise,function(){var e,n,o,a,s;return t(this,function(t){switch(t.label){case 0:e=this.connection.peerConnection,n=this.connection.provider,t.label=1;case 1:return t.trys.push([1,7,,8]),[4,e.createAnswer()];case 2:o=t.sent(),r.default.log("Created answer."),this.connection.options.sdpTransform&&"function"==typeof this.connection.options.sdpTransform&&(o.sdp=this.connection.options.sdpTransform(o.sdp)||o.sdp),t.label=3;case 3:return t.trys.push([3,5,,6]),[4,e.setLocalDescription(o)];case 4:return t.sent(),r.default.log("Set localDescription:",o,"for:"+this.connection.peer),n.socket.send({type:c.ServerMessageType.Answer,payload:{sdp:o,type:this.connection.type,connectionId:this.connection.connectionId,browser:i.util.browser},dst:this.connection.peer}),[3,6];case 5:return a=t.sent(),n.emitError(c.PeerErrorType.WebRTC,a),r.default.log("Failed to setLocalDescription, ",a),[3,6];case 6:return[3,8];case 7:return s=t.sent(),n.emitError(c.PeerErrorType.WebRTC,s),r.default.log("Failed to create answer, ",s),[3,8];case 8:return[2]}})})},o.prototype.handleSDP=function(e,o){return n(this,void 0,Promise,function(){var n,i,a,s;return t(this,function(t){switch(t.label){case 0:o=new RTCSessionDescription(o),n=this.connection.peerConnection,i=this.connection.provider,r.default.log("Setting remote description",o),a=this,t.label=1;case 1:return t.trys.push([1,5,,6]),[4,n.setRemoteDescription(o)];case 2:return t.sent(),r.default.log("Set remoteDescription:"+e+" for:"+this.connection.peer),"OFFER"!==e?[3,4]:[4,a._makeAnswer()];case 3:t.sent(),t.label=4;case 4:return[3,6];case 5:return s=t.sent(),i.emitError(c.PeerErrorType.WebRTC,s),r.default.log("Failed to setRemoteDescription, ",s),[3,6];case 6:return[2]}})})},o.prototype.handleCandidate=function(e){return n(this,void 0,Promise,function(){var n,o,i,a,s,d;return t(this,function(t){switch(t.label){case 0:r.default.log("handleCandidate:",e),n=e.candidate,o=e.sdpMLineIndex,i=e.sdpMid,a=this.connection.peerConnection,s=this.connection.provider,t.label=1;case 1:return t.trys.push([1,3,,4]),[4,a.addIceCandidate(new RTCIceCandidate({sdpMid:i,sdpMLineIndex:o,candidate:n}))];case 2:return t.sent(),r.default.log("Added ICE candidate for:"+this.connection.peer),[3,4];case 3:return d=t.sent(),s.emitError(c.PeerErrorType.WebRTC,d),r.default.log("Failed to handleCandidate, ",d),[3,4];case 4:return[2]}})})},o.prototype._addTracksToConnection=function(e,n){if(r.default.log("add tracks from stream "+e.id+" to peer connection"),!n.addTrack)return r.default.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(function(t){n.addTrack(t,e)})},o.prototype._addStreamToMediaConnection=function(e,n){r.default.log("add stream "+e.id+" to media connection "+n.connectionId),n.addStream(e)},o}();exports.Negotiator=a;
},{"./util":"BHXf","./logger":"WOs9","./enums":"ZRYf"}],"tQFK":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var e=require("eventemitter3"),r=function(e){function r(t,r,n){var o=e.call(this)||this;return o.peer=t,o.provider=r,o.options=n,o._open=!1,o.metadata=n.metadata,o}return t(r,e),Object.defineProperty(r.prototype,"open",{get:function(){return this._open},enumerable:!0,configurable:!0}),r}(e.EventEmitter);exports.BaseConnection=r;
},{"eventemitter3":"JJlS"}],"dbHP":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function r(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),t=this&&this.__assign||function(){return(t=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},o=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,o=t&&e[t],r=0;if(o)return o.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("./util"),i=r(require("./logger")),a=require("./negotiator"),s=require("./enums"),l=require("./baseconnection"),c=function(r){function l(e,t,o){var i=r.call(this,e,t,o)||this;return i._localStream=i.options._stream,i.connectionId=i.options.connectionId||l.ID_PREFIX+n.util.randomToken(),i._negotiator=new a.Negotiator(i),i._localStream&&i._negotiator.startConnection({_stream:i._localStream,originator:!0}),i}return e(l,r),Object.defineProperty(l.prototype,"type",{get:function(){return s.ConnectionType.Media},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"localStream",{get:function(){return this._localStream},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"remoteStream",{get:function(){return this._remoteStream},enumerable:!0,configurable:!0}),l.prototype.addStream=function(e){i.default.log("Receiving stream",e),this._remoteStream=e,r.prototype.emit.call(this,s.ConnectionEventType.Stream,e)},l.prototype.handleMessage=function(e){var t=e.type,o=e.payload;switch(e.type){case s.ServerMessageType.Answer:this._negotiator.handleSDP(t,o.sdp),this._open=!0;break;case s.ServerMessageType.Candidate:this._negotiator.handleCandidate(o.candidate);break;default:i.default.warn("Unrecognized message type:"+t+" from peer:"+this.peer)}},l.prototype.answer=function(e,r){var n,a;if(void 0===r&&(r={}),this._localStream)i.default.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");else{this._localStream=e,r&&r.sdpTransform&&(this.options.sdpTransform=r.sdpTransform),this._negotiator.startConnection(t(t({},this.options._payload),{_stream:e}));var s=this.provider._getMessages(this.connectionId);try{for(var l=o(s),c=l.next();!c.done;c=l.next()){var p=c.value;this.handleMessage(p)}}catch(u){n={error:u}}finally{try{c&&!c.done&&(a=l.return)&&a.call(l)}finally{if(n)throw n.error}}this._open=!0}},l.prototype.close=function(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,r.prototype.emit.call(this,s.ConnectionEventType.Close))},l.ID_PREFIX="mc_",l}(l.BaseConnection);exports.MediaConnection=c;
},{"./util":"BHXf","./logger":"WOs9","./negotiator":"HCdX","./enums":"ZRYf","./baseconnection":"tQFK"}],"GGp6":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("eventemitter3"),o=t(require("./logger")),n=function(t){function r(){var e=t.call(this)||this;return e.fileReader=new FileReader,e._queue=[],e._processing=!1,e.fileReader.onload=function(t){e._processing=!1,t.target&&e.emit("done",t.target.result),e.doNextTask()},e.fileReader.onerror=function(t){o.default.error("EncodingQueue error:",t),e._processing=!1,e.destroy(),e.emit("error",t)},e}return e(r,t),Object.defineProperty(r.prototype,"queue",{get:function(){return this._queue},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"size",{get:function(){return this.queue.length},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"processing",{get:function(){return this._processing},enumerable:!0,configurable:!0}),r.prototype.enque=function(e){this.queue.push(e),this.processing||this.doNextTask()},r.prototype.destroy=function(){this.fileReader.abort(),this._queue=[]},r.prototype.doNextTask=function(){0!==this.size&&(this.processing||(this._processing=!0,this.fileReader.readAsArrayBuffer(this.queue.shift())))},r}(r.EventEmitter);exports.EncodingQueue=n;
},{"eventemitter3":"JJlS","./logger":"WOs9"}],"GBTQ":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),t=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],i=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var i=require("./util"),o=n(require("./logger")),r=require("./negotiator"),a=require("./enums"),s=require("./baseconnection"),u=require("./encodingQueue"),l=function(n){function s(e,t,l){var f=n.call(this,e,t,l)||this;return f.stringify=JSON.stringify,f.parse=JSON.parse,f._buffer=[],f._bufferSize=0,f._buffering=!1,f._chunkedData={},f._encodingQueue=new u.EncodingQueue,f.connectionId=f.options.connectionId||s.ID_PREFIX+i.util.randomToken(),f.label=f.options.label||f.connectionId,f.serialization=f.options.serialization||a.SerializationType.Binary,f.reliable=!!f.options.reliable,f._encodingQueue.on("done",function(e){f._bufferedSend(e)}),f._encodingQueue.on("error",function(){o.default.error("DC#"+f.connectionId+": Error occured in encoding from blob to arraybuffer, close DC"),f.close()}),f._negotiator=new r.Negotiator(f),f._negotiator.startConnection(f.options._payload||{originator:!0}),f}return e(s,n),Object.defineProperty(s.prototype,"type",{get:function(){return a.ConnectionType.Data},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"dataChannel",{get:function(){return this._dc},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"bufferSize",{get:function(){return this._bufferSize},enumerable:!0,configurable:!0}),s.prototype.initialize=function(e){this._dc=e,this._configureDataChannel()},s.prototype._configureDataChannel=function(){var e=this;i.util.supports.binaryBlob&&!i.util.supports.reliable||(this.dataChannel.binaryType="arraybuffer"),this.dataChannel.onopen=function(){o.default.log("DC#"+e.connectionId+" dc connection success"),e._open=!0,e.emit(a.ConnectionEventType.Open)},this.dataChannel.onmessage=function(t){o.default.log("DC#"+e.connectionId+" dc onmessage:",t.data),e._handleDataMessage(t)},this.dataChannel.onclose=function(){o.default.log("DC#"+e.connectionId+" dc closed for:",e.peer),e.close()}},s.prototype._handleDataMessage=function(e){var t=this,o=e.data,r=o.constructor,s=o;if(this.serialization===a.SerializationType.Binary||this.serialization===a.SerializationType.BinaryUTF8){if(r===Blob)return void i.util.blobToArrayBuffer(o,function(e){var n=i.util.unpack(e);t.emit(a.ConnectionEventType.Data,n)});if(r===ArrayBuffer)s=i.util.unpack(o);else if(r===String){var u=i.util.binaryStringToArrayBuffer(o);s=i.util.unpack(u)}}else this.serialization===a.SerializationType.JSON&&(s=this.parse(o));s.__peerData?this._handleChunk(s):n.prototype.emit.call(this,a.ConnectionEventType.Data,s)},s.prototype._handleChunk=function(e){var t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=e.data,n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];var i=new Blob(n.data);this._handleDataMessage({data:i})}},s.prototype.close=function(){this._buffer=[],this._bufferSize=0,this._chunkedData={},this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this._dc=null),this._encodingQueue&&(this._encodingQueue.destroy(),this._encodingQueue.removeAllListeners(),this._encodingQueue=null),this.open&&(this._open=!1,n.prototype.emit.call(this,a.ConnectionEventType.Close))},s.prototype.send=function(e,t){if(this.open)if(this.serialization===a.SerializationType.JSON)this._bufferedSend(this.stringify(e));else if(this.serialization===a.SerializationType.Binary||this.serialization===a.SerializationType.BinaryUTF8){var o=i.util.pack(e);if(!t&&o.size>i.util.chunkedMTU)return void this._sendChunks(o);i.util.supports.binaryBlob?this._bufferedSend(o):this._encodingQueue.enque(o)}else this._bufferedSend(e);else n.prototype.emit.call(this,a.ConnectionEventType.Error,new Error("Connection is not open. You should listen for the `open` event before sending messages."))},s.prototype._bufferedSend=function(e){!this._buffering&&this._trySend(e)||(this._buffer.push(e),this._bufferSize=this._buffer.length)},s.prototype._trySend=function(e){var t=this;if(!this.open)return!1;if(this.dataChannel.bufferedAmount>s.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(function(){t._buffering=!1,t._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(n){return o.default.error("DC#:"+this.connectionId+" Error when sending:",n),this._buffering=!0,this.close(),!1}return!0},s.prototype._tryBuffer=function(){if(this.open&&0!==this._buffer.length){var e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}},s.prototype._sendChunks=function(e){var n,r,a=i.util.chunk(e);o.default.log("DC#"+this.connectionId+" Try to send "+a.length+" chunks...");try{for(var s=t(a),u=s.next();!u.done;u=s.next()){var l=u.value;this.send(l,!0)}}catch(f){n={error:f}}finally{try{u&&!u.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}},s.prototype.handleMessage=function(e){var t=e.payload;switch(e.type){case a.ServerMessageType.Answer:this._negotiator.handleSDP(e.type,t.sdp);break;case a.ServerMessageType.Candidate:this._negotiator.handleCandidate(t.candidate);break;default:o.default.warn("Unrecognized message type:",e.type,"from peer:",this.peer)}},s.ID_PREFIX="dc_",s.MAX_BUFFERED_AMOUNT=8388608,s}(s.BaseConnection);exports.DataConnection=l;
},{"./util":"BHXf","./logger":"WOs9","./negotiator":"HCdX","./enums":"ZRYf","./baseconnection":"tQFK","./encodingQueue":"GGp6"}],"in7L":[function(require,module,exports) {
"use strict";var t=this&&this.__awaiter||function(t,e,r,o){return new(r||(r=Promise))(function(n,s){function i(t){try{a(o.next(t))}catch(e){s(e)}}function u(t){try{a(o.throw(t))}catch(e){s(e)}}function a(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r(function(t){t(e)})).then(i,u)}a((o=o.apply(t,e||[])).next())})},e=this&&this.__generator||function(t,e){var r,o,n,s,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return s={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function u(s){return function(u){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,o&&(n=2&s[0]?o.return:s[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,s[1])).done)return n;switch(o=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,o=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(n=(n=i.trys).length>0&&n[n.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){i.label=s[1];break}if(6===s[0]&&i.label<n[1]){i.label=n[1],n=s;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(s);break}n[2]&&i.ops.pop(),i.trys.pop();continue}s=e.call(t,i)}catch(u){s=[6,u],o=0}finally{r=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}},r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var o=require("./util"),n=r(require("./logger")),s=function(){function r(t){this._options=t}return r.prototype._buildUrl=function(t){var e=(this._options.secure?"https://":"http://")+this._options.host+":"+this._options.port+this._options.path+this._options.key+"/"+t;return e+="?ts="+(new Date).getTime()+Math.random()},r.prototype.retrieveId=function(){return t(this,void 0,Promise,function(){var t,r,s,i;return e(this,function(e){switch(e.label){case 0:t=this._buildUrl("id"),e.label=1;case 1:return e.trys.push([1,3,,4]),[4,fetch(t)];case 2:if(200!==(r=e.sent()).status)throw new Error("Error. Status:"+r.status);return[2,r.text()];case 3:throw s=e.sent(),n.default.error("Error retrieving ID",s),i="","/"===this._options.path&&this._options.host!==o.util.CLOUD_HOST&&(i=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+i);case 4:return[2]}})})},r.prototype.listAllPeers=function(){return t(this,void 0,Promise,function(){var t,r,s,i;return e(this,function(e){switch(e.label){case 0:t=this._buildUrl("peers"),e.label=1;case 1:return e.trys.push([1,3,,4]),[4,fetch(t)];case 2:if(200!==(r=e.sent()).status){if(401===r.status)throw s="",s=this._options.host===o.util.CLOUD_HOST?"It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":"You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+s);throw new Error("Error. Status:"+r.status)}return[2,r.json()];case 3:throw i=e.sent(),n.default.error("Error retrieving list peers",i),new Error("Could not get list peers from the server."+i);case 4:return[2]}})})},r}();exports.API=s;
},{"./util":"BHXf","./logger":"WOs9"}],"Hxpd":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),t=this&&this.__assign||function(){return(t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},n=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},r=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var i=require("eventemitter3"),s=require("./util"),a=o(require("./logger")),c=require("./socket"),l=require("./mediaconnection"),d=require("./dataconnection"),u=require("./enums"),p=require("./api"),h=function(){return function(){}}(),f=function(o){function i(e,n){var r,c=o.call(this)||this;return c._id=null,c._lastServerId=null,c._destroyed=!1,c._disconnected=!1,c._open=!1,c._connections=new Map,c._lostMessages=new Map,e&&e.constructor==Object?n=e:e&&(r=e.toString()),n=t({debug:0,host:s.util.CLOUD_HOST,port:s.util.CLOUD_PORT,path:"/",key:i.DEFAULT_KEY,token:s.util.randomToken(),config:s.util.defaultConfig},n),c._options=n,"/"===c._options.host&&(c._options.host=window.location.hostname),c._options.path&&("/"!==c._options.path[0]&&(c._options.path="/"+c._options.path),"/"!==c._options.path[c._options.path.length-1]&&(c._options.path+="/")),void 0===c._options.secure&&c._options.host!==s.util.CLOUD_HOST?c._options.secure=s.util.isSecure():c._options.host==s.util.CLOUD_HOST&&(c._options.secure=!0),c._options.logFunction&&a.default.setLogFunction(c._options.logFunction),a.default.logLevel=c._options.debug||0,c._api=new p.API(n),c._socket=c._createServerConnection(),s.util.supports.audioVideo||s.util.supports.data?r&&!s.util.validateId(r)?(c._delayedAbort(u.PeerErrorType.InvalidID,'ID "'+r+'" is invalid'),c):(r?c._initialize(r):c._api.retrieveId().then(function(e){return c._initialize(e)}).catch(function(e){return c._abort(u.PeerErrorType.ServerError,e)}),c):(c._delayedAbort(u.PeerErrorType.BrowserIncompatible,"The current browser does not support WebRTC"),c)}return e(i,o),Object.defineProperty(i.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"options",{get:function(){return this._options},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"open",{get:function(){return this._open},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"socket",{get:function(){return this._socket},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"connections",{get:function(){var e,t,o=Object.create(null);try{for(var i=n(this._connections),s=i.next();!s.done;s=i.next()){var a=r(s.value,2),c=a[0],l=a[1];o[c]=l}}catch(d){e={error:d}}finally{try{s&&!s.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}return o},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"destroyed",{get:function(){return this._destroyed},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"disconnected",{get:function(){return this._disconnected},enumerable:!0,configurable:!0}),i.prototype._createServerConnection=function(){var e=this,t=new c.Socket(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return t.on(u.SocketEventType.Message,function(t){e._handleMessage(t)}),t.on(u.SocketEventType.Error,function(t){e._abort(u.PeerErrorType.SocketError,t)}),t.on(u.SocketEventType.Disconnected,function(){e.disconnected||(e.emitError(u.PeerErrorType.Network,"Lost connection to server."),e.disconnect())}),t.on(u.SocketEventType.Close,function(){e.disconnected||e._abort(u.PeerErrorType.SocketClosed,"Underlying socket is already closed.")}),t},i.prototype._initialize=function(e){this._id=e,this.socket.start(e,this._options.token)},i.prototype._handleMessage=function(e){var t,r,o=e.type,i=e.payload,s=e.src;switch(o){case u.ServerMessageType.Open:this._lastServerId=this.id,this._open=!0,this.emit(u.PeerEventType.Open,this.id);break;case u.ServerMessageType.Error:this._abort(u.PeerErrorType.ServerError,i.msg);break;case u.ServerMessageType.IdTaken:this._abort(u.PeerErrorType.UnavailableID,'ID "'+this.id+'" is taken');break;case u.ServerMessageType.InvalidKey:this._abort(u.PeerErrorType.InvalidKey,'API KEY "'+this._options.key+'" is invalid');break;case u.ServerMessageType.Leave:a.default.log("Received leave message from "+s),this._cleanupPeer(s),this._connections.delete(s);break;case u.ServerMessageType.Expire:this.emitError(u.PeerErrorType.PeerUnavailable,"Could not connect to peer "+s);break;case u.ServerMessageType.Offer:var c=i.connectionId;if((_=this.getConnection(s,c))&&(_.close(),a.default.warn("Offer received for existing Connection ID:"+c)),i.type===u.ConnectionType.Media)_=new l.MediaConnection(s,this,{connectionId:c,_payload:i,metadata:i.metadata}),this._addConnection(s,_),this.emit(u.PeerEventType.Call,_);else{if(i.type!==u.ConnectionType.Data)return void a.default.warn("Received malformed connection type:"+i.type);_=new d.DataConnection(s,this,{connectionId:c,_payload:i,metadata:i.metadata,label:i.label,serialization:i.serialization,reliable:i.reliable}),this._addConnection(s,_),this.emit(u.PeerEventType.Connection,_)}var p=this._getMessages(c);try{for(var h=n(p),f=h.next();!f.done;f=h.next()){var y=f.value;_.handleMessage(y)}}catch(v){t={error:v}}finally{try{f&&!f.done&&(r=h.return)&&r.call(h)}finally{if(t)throw t.error}}break;default:if(!i)return void a.default.warn("You received a malformed message from "+s+" of type "+o);var _;c=i.connectionId;(_=this.getConnection(s,c))&&_.peerConnection?_.handleMessage(e):c?this._storeMessage(c,e):a.default.warn("You received an unrecognized message:",e)}},i.prototype._storeMessage=function(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)},i.prototype._getMessages=function(e){var t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]},i.prototype.connect=function(e,t){if(void 0===t&&(t={}),this.disconnected)return a.default.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),void this.emitError(u.PeerErrorType.Disconnected,"Cannot connect to new Peer after disconnecting from server.");var n=new d.DataConnection(e,this,t);return this._addConnection(e,n),n},i.prototype.call=function(e,t,n){if(void 0===n&&(n={}),this.disconnected)return a.default.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),void this.emitError(u.PeerErrorType.Disconnected,"Cannot connect to new Peer after disconnecting from server.");if(t){n._stream=t;var r=new l.MediaConnection(e,this,n);return this._addConnection(e,r),r}a.default.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.")},i.prototype._addConnection=function(e,t){a.default.log("add connection "+t.type+":"+t.connectionId+" to peerId:"+e),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)},i.prototype._removeConnection=function(e){var t=this._connections.get(e.peer);if(t){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)},i.prototype.getConnection=function(e,t){var r,o,i=this._connections.get(e);if(!i)return null;try{for(var s=n(i),a=s.next();!a.done;a=s.next()){var c=a.value;if(c.connectionId===t)return c}}catch(l){r={error:l}}finally{try{a&&!a.done&&(o=s.return)&&o.call(s)}finally{if(r)throw r.error}}return null},i.prototype._delayedAbort=function(e,t){var n=this;setTimeout(function(){n._abort(e,t)},0)},i.prototype._abort=function(e,t){a.default.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()},i.prototype.emitError=function(e,t){var n;a.default.error("Error:",t),(n="string"==typeof t?new Error(t):t).type=e,this.emit(u.PeerEventType.Error,n)},i.prototype.destroy=function(){this.destroyed||(a.default.log("Destroy peer with ID:"+this.id),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit(u.PeerEventType.Close))},i.prototype._cleanup=function(){var e,t;try{for(var r=n(this._connections.keys()),o=r.next();!o.done;o=r.next()){var i=o.value;this._cleanupPeer(i),this._connections.delete(i)}}catch(s){e={error:s}}finally{try{o&&!o.done&&(t=r.return)&&t.call(r)}finally{if(e)throw e.error}}this.socket.removeAllListeners()},i.prototype._cleanupPeer=function(e){var t,r,o=this._connections.get(e);if(o)try{for(var i=n(o),s=i.next();!s.done;s=i.next()){s.value.close()}}catch(a){t={error:a}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}},i.prototype.disconnect=function(){if(!this.disconnected){var e=this.id;a.default.log("Disconnect peer with ID:"+e),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit(u.PeerEventType.Disconnected,e)}},i.prototype.reconnect=function(){if(this.disconnected&&!this.destroyed)a.default.log("Attempting reconnection to server with ID "+this._lastServerId),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(this.disconnected||this.open)throw new Error("Peer "+this.id+" cannot reconnect because it is not disconnected from the server!");a.default.error("In a hurry? We're still trying to make the initial connection!")}},i.prototype.listAllPeers=function(e){var t=this;void 0===e&&(e=function(e){}),this._api.listAllPeers().then(function(t){return e(t)}).catch(function(e){return t._abort(u.PeerErrorType.ServerError,e)})},i.DEFAULT_KEY="peerjs",i}(i.EventEmitter);exports.Peer=f;
},{"eventemitter3":"JJlS","./util":"BHXf","./logger":"WOs9","./socket":"wJlv","./mediaconnection":"dbHP","./dataconnection":"GBTQ","./enums":"ZRYf","./api":"in7L"}],"iTK6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./util"),r=require("./peer");exports.peerjs={Peer:r.Peer,util:e.util},exports.default=r.Peer,window.peerjs=exports.peerjs,window.Peer=r.Peer;
},{"./util":"BHXf","./peer":"Hxpd"}]},{},["iTK6"], null)
//# sourceMappingURL=/peerjs.min.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-review/create-review.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-review/create-review.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"dismiss()\">\n                <ion-icon name=\"close\"></ion-icon>\n            </ion-button>          \n        </ion-buttons>    \n        \n        <ion-title>Write Review</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"create-review\">\n\n    \n    \n    <ion-item class=\"create-review__rating\">\n        <ion-label>Select a rating</ion-label>\n        <div class=\"create-review__rating__stars\">\n            <ion-icon [name]=\"review.rating > 0 ? 'star' : 'star-outline'\" (click)=\"review.rating = 1\"></ion-icon>\n            <ion-icon [name]=\"review.rating > 1 ? 'star' : 'star-outline'\" (click)=\"review.rating = 2\"></ion-icon>\n            <ion-icon [name]=\"review.rating > 2 ? 'star' : 'star-outline'\" (click)=\"review.rating = 3\"></ion-icon>\n            <ion-icon [name]=\"review.rating > 3 ? 'star' : 'star-outline'\" (click)=\"review.rating = 4\"></ion-icon>\n            <ion-icon [name]=\"review.rating > 4 ? 'star' : 'star-outline'\" (click)=\"review.rating = 5\"></ion-icon>\n        </div>\n    </ion-item>\n    \n    \n    \n    <ion-item>\n       <ion-label position=\"floating\">Comments</ion-label>\n       <ion-textarea clearInput name=\"comments\" [(ngModel)]=\"review.comments\" autoGrow=\"true\" (ionChange)=\"commentChanged($event)\"></ion-textarea>\n   </ion-item>     \n    \n    \n</ion-content>\n\n\n\n\n\n<ion-footer class=\"create-review-footer\">\n\n\n    <ion-button color='primary' expand=\"full\" class=\"create-review__button\" (click)=\"createReview()\">\n        Submit Review&nbsp;&nbsp;\n        <ion-icon name=\"arrow-forward\" *ngIf=\"!review.loading\"></ion-icon>\n        <ion-spinner *ngIf=\"review.loading\"></ion-spinner>\n    </ion-button>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gig/gig.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gig/gig.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"gig-toolbar ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button>\n                <ion-back-button defaultHref=\"/tabs/gigs\"></ion-back-button>\n            </ion-button>            \n        </ion-buttons>   \n        \n        <ion-title></ion-title>\n        \n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"gig\" fullscreen>\n    \n    \n    <div class=\"gig__loading\" *ngIf=\"loading\">\n        <ion-spinner color=\"primary\"></ion-spinner>\n    </div>\n    \n    \n    \n    \n    <div class=\"gig__booking-details\" *ngIf=\"gig.status === 'pending' && gig.booked_user_id === user.id\">\n        \n        <p class=\"gig__booking-details__info\">\n            You have received a booking request from <a [routerLink]=\"['/profile/' + gig.customer_profile.user_id]\" routerDirection=\"forward\">{{gig.customer_profile.name}}</a> on {{formatDate(gig.date_required)}} for {{gig.duration}} hours. To accept this request, tap confirm booking below.</p>\n\n        <p class=\"gig__booking-details__terms\">\n           The amount charged is dependant on the total time spent in stream. If the duration is more or less, the final payment may be adjusted. You will be informed of this cost owed to you after the stream has completed. By confirming this booking, you are obligated to this customer. A minimum hiring fee will apply for the customer regardless of total time spent in stream.\n        </p>\n    </div>\n    \n    \n    \n    \n    \n    <div class=\"gig__booking-details\" *ngIf=\"gig.status === 'pending' && gig.booked_user_id !== user.id\">\n        \n        <p class=\"gig__booking-details__info\">\n            You made a booking request for <a [routerLink]=\"['/profile/' + gig.musician_profile.user_id]\" routerDirection=\"forward\">{{gig.musician_profile.name}}</a> on {{formatDate(gig.date_required)}} for {{gig.duration}} hours. The musician has yet to confirm this. You will be notified once they do.</p>\n\n        <p class=\"gig__booking-details__terms\">\n           The amount charged is dependant on the total time spent in stream. If the duration is more or less, the cost may be adjusted. You will be informed of this cost before paying the final bill. By confirming this booking, you are obligated to this musician. A minimum hiring fee will apply regardless of total time spent in stream.\n        </p>\n    </div>    \n    \n    \n\n    \n    \n    <div class=\"gig__booking-details\" *ngIf=\"gig.status === 'upcoming' && (gig.booked_user_id !== user.id || !canGoLive())\">\n        \n        <div class=\"gig__booking-details__countdown\">\n            <div class=\"gig__booking-details__countdown__days\">\n                {{timeToLive.days}}\n                <span>days</span>\n            </div>\n            <div class=\"gig__booking-details__countdown__hours\">\n                {{timeToLive.hours}}\n                <span>hours</span>\n            </div>\n            <div class=\"gig__booking-details__countdown__minutes\">\n                {{timeToLive.minutes}}\n                <span>minutes</span>\n            </div>\n            <div class=\"gig__booking-details__countdown__seconds\">\n                {{timeToLive.seconds}} \n                <span>seconds</span>\n            </div>\n        </div>\n        \n        \n        <p class=\"gig__booking-details__info\" *ngIf=\"gig.booked_user_id === user.id\">\n           You have a booking from <a [routerLink]=\"['/profile/' + gig.customer_profile.user_id]\" routerDirection=\"forward\">{{gig.customer_profile.name}}</a> on {{formatDate(gig.date_required)}} for {{gig.duration}} hours. You will be able to go live at this time.\n        </p>\n        \n        <p class=\"gig__booking-details__info\" *ngIf=\"gig.user_id !== user.id\">\n           You have a booking for <a [routerLink]=\"['/profile/' + gig.musician_profile.user_id]\" routerDirection=\"forward\">{{gig.musician_profile.name}}</a> on {{formatDate(gig.date_required)}} for {{gig.duration}} hours. The musician will go live at this time and you will be able to join this gig.\n        </p> \n        \n    </div>\n    \n    \n    \n    <div class=\"gig__booking-details\" *ngIf=\"gig.status === 'upcoming' && gig.booked_user_id === user.id && (canGoLive() || timerComplete)\">\n\n        <p class=\"gig__booking-details__go-live\">\n            Go live now!\n        </p>\n        \n        <p class=\"gig__booking-details__info\">Go live to start your booking from <a [routerLink]=\"['/profile/' + gig.customer_profile.user_id]\" routerDirection=\"forward\">{{gig.customer_profile.name}}</a> set to start on {{formatDate(gig.date_required)}}. Tap go live below to start.</p>\n \n    </div>    \n    \n    \n    \n    <div *ngIf=\"gig.status === 'live'\">\n        <div class=\"gig__video\">\n            \n            \n            <video id=\"video-stream\" autoplay playsinline></video>                \n\n            <ion-icon name=\"expand-outline\" (click)=\"goFullscreen()\"></ion-icon>\n\n        </div>\n\n\n        <div class=\"gig__header\">\n\n            <div class=\"gig__header__live\">\n                <span>Live</span> {{formatStreamTime(streamTime)}}\n                <ion-button color='primary' size='small' class=\"gig__header__live__button\" (click)=\"stopShow()\">\n                    Stop Show\n                </ion-button>  \n            </div>\n            \n            \n \n            <ion-item *ngIf=\"gig.booked_user_id === user.id\" [routerLink]=\"['/profile/' + gig.customer_profile.user_id]\" routerDirection=\"forward\">\n                <ion-avatar slot=\"start\">\n                    <img [src]=\"gig.customer_profile.avatar\">\n                </ion-avatar>\n                <ion-label>\n                    <h2>{{gig.customer_profile.name}}</h2>\n                </ion-label>\n            </ion-item>  \n            \n            \n            <ion-item *ngIf=\"gig.booked_user_id !== user.id\" [routerLink]=\"['/profile/' + gig.musician_profile.user_id]\" routerDirection=\"forward\">\n                <ion-avatar slot=\"start\">\n                    <img [src]=\"gig.musician_profile.avatar\">\n                </ion-avatar>\n                <ion-label>\n                    <h2>{{gig.musician_profile.name}}</h2>\n                </ion-label>\n            </ion-item>              \n            \n            \n\n        </div>\n\n\n        <ion-content #messagesbox id=\"messages-box\">\n            <ion-list class=\"gig__chat\" >\n                <ion-item class=\"gig__chat__message\" *ngFor=\"let message of messages\" (click)=\"message.showTime = !message.showTime\" [ngClass]=\"{'to-message':message.user_id === user.id, 'from-message':message.user_id !== user.id, 'before' : message.isBefore, 'after' : message.isAfter, 'show-time': message.showTime}\" >\n\n                    <ion-avatar slot='start' *ngIf=\"message.user_id !== user.id\">\n                        <img [src]=\"message.avatar\">\n                    </ion-avatar>              \n                    <ion-note *ngIf=\"message.showTime\">{{getMessageTime(message.sent_at)}}</ion-note>\n                    <ion-label [slot]=\"message.user_id === user.id ? 'end' : 'start'\">\n                    <p>{{message.message}}</p>\n                    </ion-label>\n                </ion-item>\n\n\n            </ion-list>\n            \n        </ion-content>\n\n    </div>\n    \n    \n    \n    <div class=\"gig__booking-details\" *ngIf=\"gig.status === 'completed'\">\n        \n        <p class=\"gig__booking-details__info\">\n            You went live with \n            <span  *ngIf=\"gig.booked_user_id === user.id\">\n                <a [routerLink]=\"['/profile/' + gig.customer_profile.user_id]\" routerDirection=\"forward\">{{gig.customer_profile.name}}</a>\n            </span>\n            <span  *ngIf=\"gig.booked_user_id !== user.id\">\n                <a [routerLink]=\"['/profile/' + gig.musician_profile.user_id]\" routerDirection=\"forward\">{{gig.musician_profile.name}}</a>\n            </span>\n            on {{formatDate(gig.date_required)}}. <span *ngIf=\"gig.streams && gig.streams.length > 0\">The gig lasted {{gig.streams[0].actual_duration / 3600 | number:'1.2-2'}} hours and the total cost was ${{(gig.streams[0].actual_duration / 3600)*gig.hourly_rate | number:'1.2-2'}}</span>.\n            \n        </p>    \n        \n        \n        <div *ngIf=\"gig.user_id === user.id\" class=\"gig__booking-details__payment\" padding>\n\n            <h3>Payment Details</h3>\n\n            <p>Musician: {{gig.musician_profile.name}}</p>\n            <p>Hourly rate: ${{gig.hourly_rate}}</p>\n            <p *ngIf=\"gig.streams && gig.streams.length > 0\">Duration: {{gig.streams[0].actual_duration / 3600 | number:'1.2-2'}} hours</p>\n            <p *ngIf=\"gig.streams && gig.streams.length > 0\">Amount to be paid: ${{(gig.streams[0].actual_duration / 3600)*gig.hourly_rate | number:'1.2-2'}}</p>\n            <p>Our fees: ${{((gig.streams[0].actual_duration / 3600)*gig.hourly_rate)*0.1 | number:'1.2-2'}}</p>\n\n            <h4>Total: ${{((gig.streams[0].actual_duration / 3600)*gig.hourly_rate)*1.1 | number:'1.2-2'}}</h4>\n\n\n\n        </div>            \n            \n        \n\n\n\n    </div>    \n    \n    \n</ion-content>\n\n<ion-footer class=\"gig-footer\" [ngClass]=\"{'gig-footer--send-message' : gig.status === 'live'}\">\n    \n    \n\n    <ion-button color='primary' expand=\"full\" class=\"gig-footer__button\" (click)=\"confirmBooking()\" *ngIf=\"gig.status === 'pending' && gig.booked_user_id === user.id\">\n        Confirm Booking\n    </ion-button>    \n    \n    <ion-button color='primary' expand=\"full\" class=\"gig-footer__button\" (click)=\"goLive()\"  *ngIf=\"gig.status === 'upcoming' && gig.booked_user_id === user.id && (canGoLive() || timerComplete)\">\n        Go Live\n    </ion-button>    \n    \n    <ion-button color='primary' expand=\"full\" class=\"gig-footer__button\" (click)=\"getGig()\"  *ngIf=\"gig.status === 'upcoming' && gig.booked_user_id !== user.id && (canGoLive() || timerComplete)\">\n        Check Musician Status\n    </ion-button>      \n \n    <ion-button color='primary' expand=\"full\" class=\"gig-footer__button\" (click)=\"makePayment()\"  *ngIf=\"gig.status === 'completed' && gig.user_id === user.id && gig.payments.length < 1\">\n        Pay Now\n    </ion-button>   \n\n\n    <ion-button color='primary' expand=\"full\" class=\"gig-footer__button\" (click)=\"writeReview(gig.booked_user_id)\"  *ngIf=\"gig.status === 'completed' && gig.user_id === user.id && gig.payments.length > 0 && gig.reviews.length < 1\">\n        Write A Review\n    </ion-button>     \n    \n    \n    <ion-button color='primary' expand=\"full\" class=\"gig-footer__button\" (click)=\"writeReview(gig.user_id)\"  *ngIf=\"gig.status === 'completed' && gig.user_id !== user.id && gig.reviews.length < 1\">\n        Write A Review\n    </ion-button>         \n    \n    \n    <form name=\"chat-form\" (ngSubmit)=\"sendMessage()\" *ngIf=\"gig.status === 'live'\">\n\n        <ion-input color=\"dark\" name=\"message\" type=\"text\" placeholder=\"Send a message...\" [(ngModel)]=\"message\"></ion-input>\n        <div class=\"gig-footer__send-message\">\n            <ion-button fill=\"clear\" type=\"submit\">\n                <ion-icon slot=\"icon-only\" name=\"send-outline\"></ion-icon>\n            </ion-button>\n        </div>\n    </form>\n    \n    \n    \n    \n</ion-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pay/pay.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pay/pay.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        \n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"dismiss()\">\n                <ion-icon name=\"close\"></ion-icon>\n            </ion-button>          \n        </ion-buttons>       \n\n        <ion-title>Card Details</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"pay\">\n   \n    \n\n    <ion-list class=\"pay__form ion-padding\">\n        \n        \n        <ion-row>\n            \n            <ion-col size=\"auto\">\n                <ion-icon name=\"card\"></ion-icon>\n            </ion-col>\n            \n            <ion-col>\n                <ion-item>\n\n                    <ion-label position=\"floating\">Card Number</ion-label>\n                    <ion-input clearInput type=\"text\" [(ngModel)]=\"card.number\"></ion-input>\n                </ion-item>\n                \n\n                <ion-item>\n                    <ion-label position=\"floating\">Name On Card</ion-label>\n                    <ion-input clearInput type=\"text\" [(ngModel)]=\"card.name\"></ion-input>\n                </ion-item>\n\n\n                <ion-row class=\"pay__card-details\">\n                    <ion-col class=\"pay__card-details__date\">\n                        <ion-item>\n                            <ion-label position=\"floating\">Expiration</ion-label>\n                            <ion-datetime [(ngModel)]=\"card.expiry\" display-format=\"MM/YYYY\" picker-format=\"MM/YYYY\" [max]=\"maxDate\"></ion-datetime>        \n                        </ion-item>\n                    </ion-col>\n\n                    <ion-col class=\"pay__card-details__cvc\">\n                        <ion-item>\n                            <ion-label position=\"floating\">CVC</ion-label>\n                            <ion-input clearInput type=\"text\" [(ngModel)]=\"card.cvc\"></ion-input>\n                        </ion-item> \n                    </ion-col>\n                </ion-row>\n                \n            </ion-col>\n        </ion-row>\n        \n        \n        \n        <p *ngIf=\"error\" class=\"pay__error\">\n            {{error}}\n        </p>\n        \n        \n    </ion-list>\n    \n</ion-content>\n\n\n\n<ion-footer class=\"pay-footer\">\n\n    <ion-button color='primary' expand=\"full\" class=\"pay-footer__button\" [disabled]=\"loading\" (click)=\"makePayment()\">\n        Pay Now&nbsp;&nbsp;\n        <ion-icon name=\"arrow-forward\" *ngIf=\"!loading\"></ion-icon>\n        <ion-spinner *ngIf=\"loading\"></ion-spinner>\n    </ion-button>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/create-review/create-review.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/create-review/create-review.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".create-review .create-review__rating .create-review__rating__stars ion-icon {\n  width: 30px;\n  height: 30px;\n  color: #f3cd00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3JlYXRlLXJldmlldy9EOlxcVGF5bG9yXFxEb2N1bWVudHNcXFdlYnNpdGVzXFxtdXNpY2J1ZGR5XFxhcHAvc3JjXFxhcHBcXHBhZ2VzXFxjcmVhdGUtcmV2aWV3XFxjcmVhdGUtcmV2aWV3LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3JlYXRlLXJldmlldy9jcmVhdGUtcmV2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0hoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWF0ZS1yZXZpZXcvY3JlYXRlLXJldmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlYXRlLXJldmlld3tcclxuICAgIFxyXG4gICAgLmNyZWF0ZS1yZXZpZXdfX3JhdGluZ3tcclxuICAgICAgICAuY3JlYXRlLXJldmlld19fcmF0aW5nX19zdGFyc3tcclxuICAgICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZjNjZDAwOyAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG59IiwiLmNyZWF0ZS1yZXZpZXcgLmNyZWF0ZS1yZXZpZXdfX3JhdGluZyAuY3JlYXRlLXJldmlld19fcmF0aW5nX19zdGFycyBpb24taWNvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjZjNjZDAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/create-review/create-review.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/create-review/create-review.page.ts ***!
  \***********************************************************/
/*! exports provided: CreateReviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateReviewPage", function() { return CreateReviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _services_review_review_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/review/review.service */ "./src/app/services/review/review.service.ts");




var CreateReviewPage = /** @class */ (function () {
    function CreateReviewPage(modalController, reviewService, alertCtrl, navParams) {
        this.modalController = modalController;
        this.reviewService = reviewService;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        var gig = this.navParams.get('gig');
        var userId = this.navParams.get('user_id');
        this.review = { gig_id: gig.id, user_id: userId, comments: "" };
    }
    CreateReviewPage.prototype.ngOnInit = function () {
    };
    CreateReviewPage.prototype.dismiss = function () {
        this.modalController.dismiss();
    };
    CreateReviewPage.prototype.createReview = function () {
        var _this = this;
        this.review.loading = true;
        console.log(this.review);
        this.reviewService.createReview(this.review).then(function () {
            _this.review.loading = false;
            var alert = _this.alertCtrl.create({
                header: 'Review Sent!',
                message: 'Your review has been sent and will be displayed on the users profile.',
                buttons: [
                    {
                        text: 'Dismiss',
                        role: 'cancel',
                        handler: function (data) {
                        }
                    }
                ]
            }).then(function (el) {
                el.present();
            });
            _this.modalController.dismiss({ reviewed: true });
        }).catch(function () {
            _this.review.loading = false;
            var alert = _this.alertCtrl.create({
                header: 'Error',
                message: 'There was an error submitting this review. Please try again soon.',
                buttons: [
                    {
                        text: 'Dismiss',
                        role: 'cancel',
                        handler: function (data) {
                        }
                    }
                ]
            }).then(function (el) {
                el.present();
            });
        });
    };
    CreateReviewPage.prototype.commentChanged = function (ev) {
        this.review.comments = ev.detail.value;
    };
    CreateReviewPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _services_review_review_service__WEBPACK_IMPORTED_MODULE_3__["ReviewService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }
    ]; };
    CreateReviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-review',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-review.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-review/create-review.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create-review.page.scss */ "./src/app/pages/create-review/create-review.page.scss")).default]
        })
    ], CreateReviewPage);
    return CreateReviewPage;
}());



/***/ }),

/***/ "./src/app/pages/gig/gig-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/gig/gig-routing.module.ts ***!
  \*************************************************/
/*! exports provided: GigPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GigPageRoutingModule", function() { return GigPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _gig_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gig.page */ "./src/app/pages/gig/gig.page.ts");




var routes = [
    {
        path: '',
        component: _gig_page__WEBPACK_IMPORTED_MODULE_3__["GigPage"]
    }
];
var GigPageRoutingModule = /** @class */ (function () {
    function GigPageRoutingModule() {
    }
    GigPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], GigPageRoutingModule);
    return GigPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/gig/gig.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/gig/gig.module.ts ***!
  \*****************************************/
/*! exports provided: GigPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GigPageModule", function() { return GigPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _gig_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gig-routing.module */ "./src/app/pages/gig/gig-routing.module.ts");
/* harmony import */ var _gig_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gig.page */ "./src/app/pages/gig/gig.page.ts");
/* harmony import */ var _pay_pay_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pay/pay.page */ "./src/app/pages/pay/pay.page.ts");
/* harmony import */ var _create_review_create_review_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../create-review/create-review.page */ "./src/app/pages/create-review/create-review.page.ts");









var GigPageModule = /** @class */ (function () {
    function GigPageModule() {
    }
    GigPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _gig_routing_module__WEBPACK_IMPORTED_MODULE_5__["GigPageRoutingModule"]
            ],
            declarations: [_gig_page__WEBPACK_IMPORTED_MODULE_6__["GigPage"], _pay_pay_page__WEBPACK_IMPORTED_MODULE_7__["PayPage"], _create_review_create_review_page__WEBPACK_IMPORTED_MODULE_8__["CreateReviewPage"]],
            entryComponents: [_pay_pay_page__WEBPACK_IMPORTED_MODULE_7__["PayPage"], _create_review_create_review_page__WEBPACK_IMPORTED_MODULE_8__["CreateReviewPage"]],
        })
    ], GigPageModule);
    return GigPageModule;
}());



/***/ }),

/***/ "./src/app/pages/gig/gig.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pages/gig/gig.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".gig-toolbar ion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n\n.gig .gig__loading {\n  text-align: center;\n  margin-top: 60px;\n}\n\n.gig .gig__booking-details p a {\n  color: White;\n}\n\n.gig .gig__booking-details .gig__booking-details__info {\n  text-align: Center;\n  padding-left: 30px;\n  padding-right: 30px;\n  margin-top: 40px;\n}\n\n.gig .gig__booking-details .gig__booking-details__terms {\n  font-size: 12px;\n  text-align: center;\n  padding-left: 30px;\n  padding-right: 30px;\n  opacity: 0.5;\n  margin-top: 40px;\n}\n\n.gig .gig__booking-details .gig__booking-details__countdown {\n  text-align: center;\n  white-space: nowrap;\n  margin-top: 40px;\n}\n\n.gig .gig__booking-details .gig__booking-details__countdown > div {\n  display: inline-block;\n  font-size: 40px;\n  margin: 0px 15px;\n}\n\n.gig .gig__booking-details .gig__booking-details__countdown > div span {\n  font-size: 12px;\n  display: block;\n}\n\n.gig .gig__booking-details .gig__booking-details__go-live {\n  font-size: 30px;\n  text-align: center;\n}\n\n.gig .gig__booking-details .gig__booking-details__payment {\n  background-color: rgba(36, 151, 232, 0.15);\n  text-align: center;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  border-top: 2px dotted #2497e8;\n  border-bottom: 2px dotted #2497e8;\n  margin-bottom: 30px;\n  margin-top: 50px;\n}\n\n.gig .gig__booking-details .gig__booking-details__payment h3 {\n  margin: 0px;\n  font-size: 18px;\n  margin-bottom: 10px;\n}\n\n.gig .gig__booking-details .gig__booking-details__payment p {\n  margin: 0px;\n  font-size: 15px;\n}\n\n.gig .gig__booking-details .gig__booking-details__payment h4 {\n  margin: 0px;\n  margin-top: 10px;\n  font-size: 16px;\n}\n\n.gig .gig__video {\n  width: 100%;\n  height: 270px;\n  margin-top: -56px;\n  background-color: black;\n  position: relative;\n}\n\n.gig .gig__video video {\n  width: 100%;\n  height: 270px;\n}\n\n.gig .gig__video ion-icon {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n  font-size: 26px;\n}\n\n.gig .gig__header {\n  padding: 20px 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n  height: 140px;\n}\n\n.gig .gig__header .gig__header__live span {\n  background-color: Red;\n  padding: 4px 12px;\n  font-size: 11px;\n  line-height: 11px;\n  text-transform: uppercase;\n  font-weight: bold;\n  letter-spacing: 1px;\n  border-radius: 3px;\n  margin-right: 10px;\n}\n\n.gig .gig__header ion-button {\n  float: right;\n  margin: 0px;\n}\n\n.gig .gig__header ion-item {\n  margin-top: 20px;\n  --background: transparent;\n  --border-color: transparent;\n  --padding-start: 0px;\n}\n\n.gig #messages-box {\n  min-height: 100px;\n}\n\n.gig .gig__chat {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  background: transparent;\n}\n\n.gig .gig__chat .gig__chat__message {\n  width: 100%;\n  --border-color: transparent;\n  --background: transaprent;\n}\n\n.gig .gig__chat .gig__chat__message ion-label {\n  flex: none;\n  margin: 0px;\n  padding: 0px;\n  padding: 10px 15px;\n  border-radius: 15px;\n  overflow: visible;\n  transition: margin-top linear 200ms;\n}\n\n.gig .gig__chat .gig__chat__message.show-time ion-label {\n  margin-top: 16px;\n}\n\n.gig .gig__chat .gig__chat__message ion-note {\n  position: absolute;\n  top: -16px;\n  font-size: 10px;\n  z-index: -1;\n}\n\n.gig .gig__chat .gig__chat__message.from-message ion-note {\n  left: 73px;\n  top: 0;\n}\n\n.gig .gig__chat .gig__chat__message.to-message ion-note {\n  right: 0px;\n}\n\n.gig .gig__chat .gig__chat__message.from-message.before ion-label {\n  border-bottom-left-radius: 5px;\n}\n\n.gig .gig__chat .gig__chat__message.from-message.after ion-label {\n  border-top-left-radius: 5px;\n}\n\n.gig .gig__chat .gig__chat__message.to-message.before ion-label {\n  border-bottom-right-radius: 5px;\n}\n\n.gig .gig__chat .gig__chat__message.to-message.after ion-label {\n  border-top-right-radius: 5px;\n}\n\n.gig .gig__chat .gig__chat__message.from-message ion-avatar {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\n.gig .gig__chat .gig__chat__message.from-message.before ion-avatar {\n  opacity: 0;\n}\n\n.gig .gig__chat .gig__chat__message.from-message ion-label {\n  background-color: #eee;\n  max-width: 75%;\n  margin-bottom: 5px;\n}\n\n.gig .gig__chat .gig__chat__message.to-message {\n  position: relative;\n  right: 15px;\n  max-width: 75%;\n  float: right;\n  margin-bottom: 5px;\n}\n\n.gig .gig__chat .gig__chat__message.to-message .input-wrapper {\n  display: block;\n}\n\n.gig .gig__chat .gig__chat__message.to-message ion-label {\n  float: right;\n  background-color: #2497e8;\n}\n\n.gig .gig__chat .gig__chat__message ion-label p {\n  min-height: 17px;\n  white-space: normal;\n  color: black;\n}\n\n.gig .gig__chat .gig__chat__message.to-message ion-label p {\n  color: white;\n}\n\n.gig .gig__chat .gig__chat__message .item-inner {\n  border-bottom: none;\n}\n\n.gig .gig__chat.message-list > .item-block {\n  border: none;\n}\n\n.gig-footer {\n  border-top: 1px solid rgba(255, 255, 255, 0.05);\n  background-color: #121212;\n}\n\n.gig-footer ion-input {\n  width: 75%;\n  display: inline-block;\n  --padding-start: 20px;\n  vertical-align: bottom;\n  --padding-bottom: 12px;\n}\n\n.gig-footer .gig-footer__send-message {\n  width: 25%;\n  display: inline-block;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2lnL0Q6XFxUYXlsb3JcXERvY3VtZW50c1xcV2Vic2l0ZXNcXG11c2ljYnVkZHlcXGFwcC9zcmNcXGFwcFxccGFnZXNcXGdpZ1xcZ2lnLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZ2lnL2dpZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0FDQ0E7O0FETUk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDSFI7O0FEUVE7RUFDSSxZQUFBO0FDTlo7O0FEVVE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ1JaOztBRFdRO0VBQ0ksZUFBQTtFQUNKLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1RSOztBRGFRO0VBRUksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDWlo7O0FEYVk7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1hoQjs7QURZZ0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ1ZwQjs7QURrQlE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNoQlo7O0FEb0JRO0VBQ0ksMENBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ2xCWjs7QURvQlk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDbEJoQjs7QURxQlk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ25CaEI7O0FEc0JZO0VBRUksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ3JCaEI7O0FEZ0NJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUM5QlI7O0FEZ0NRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUM5Qlo7O0FEaUNRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUMvQlo7O0FEdUNJO0VBQ0osa0JBQUE7RUFDSSxrREFBQTtFQUNBLGFBQUE7QUNyQ0o7O0FEdUNRO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNyQ1o7O0FEd0NRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUN0Q1o7O0FEMENRO0VBQ0ksZ0JBQUE7RUFDUix5QkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUN4Q0o7O0FEOENJO0VBQ0ksaUJBQUE7QUM1Q1I7O0FEK0NJO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNJLHVCQUFBO0FDN0NaOztBRCtDUTtFQUNJLFdBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0FDN0NaOztBRGtEUTtFQUNJLFVBQUE7RUFDSSxXQUFBO0VBQ0osWUFBQTtFQUNJLGtCQUFBO0VBQ0osbUJBQUE7RUFDQyxpQkFBQTtFQUNBLG1DQUFBO0FDaERiOztBRG9EUTtFQUNRLGdCQUFBO0FDbERoQjs7QURxRFE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDSixlQUFBO0VBQ0EsV0FBQTtBQ25EUjs7QURzRFE7RUFDSSxVQUFBO0VBQ0EsTUFBQTtBQ3BEWjs7QUR1RFE7RUFDSSxVQUFBO0FDckRaOztBRHdEUTtFQUNJLDhCQUFBO0FDdERaOztBRHlEUTtFQUNJLDJCQUFBO0FDdkRaOztBRDBEUTtFQUNJLCtCQUFBO0FDeERaOztBRDJEUTtFQUNJLDRCQUFBO0FDekRaOztBRDREUTtFQUNRLGVBQUE7RUFDSixrQkFBQTtBQzFEWjs7QUQ2RFE7RUFDSSxVQUFBO0FDM0RaOztBRDhEUTtFQUNJLHNCQUFBO0VBQ0EsY0FBQTtFQUNJLGtCQUFBO0FDNURoQjs7QURpRVE7RUFFSSxrQkFBQTtFQUNBLFdBQUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNJLGtCQUFBO0FDaEVwQjs7QURtRVE7RUFDSSxjQUFBO0FDakVaOztBRG9FUTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtBQ2xFWjs7QURxRVE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ25FWjs7QURzRVE7RUFDSSxZQUFBO0FDcEVaOztBRHdFUTtFQUNJLG1CQUFBO0FDdEVaOztBRHlFUTtFQUNJLFlBQUE7QUN2RVo7O0FEOEVBO0VBQ0ksK0NBQUE7RUFDQSx5QkFBQTtBQzNFSjs7QURpRkE7RUFDUSxVQUFBO0VBQ0oscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUMvRUo7O0FEa0ZBO0VBQ0EsVUFBQTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7QUMvRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9naWcvZ2lnLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5naWctdG9vbGJhciBpb24tdG9vbGJhciB7XHJcbi0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbi0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLmdpZ3tcclxuICAgIFxyXG4gICAgLmdpZ19fbG9hZGluZ3tcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNjBweDsgICAgICAgIFxyXG4gICAgfSAgICBcclxuICAgIFxyXG4gICAgLmdpZ19fYm9va2luZy1kZXRhaWxze1xyXG4gICAgICAgIFxyXG4gICAgICAgIHAgYXtcclxuICAgICAgICAgICAgY29sb3I6V2hpdGU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuZ2lnX19ib29raW5nLWRldGFpbHNfX2luZm97XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IENlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmdpZ19fYm9va2luZy1kZXRhaWxzX190ZXJtc3tcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICB9ICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC5naWdfX2Jvb2tpbmctZGV0YWlsc19fY291bnRkb3due1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDo0MHB4O1xyXG4gICAgICAgICAgICA+ZGl2e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMTVweDtcclxuICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuZ2lnX19ib29raW5nLWRldGFpbHNfX2dvLWxpdmV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAuZ2lnX19ib29raW5nLWRldGFpbHNfX3BheW1lbnR7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzYsIDE1MSwgMjMyLCAwLjE1KTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBkb3R0ZWQgIzI0OTdlODtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IGRvdHRlZCAjMjQ5N2U4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG5cclxuICAgICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIH0gICBcclxuXHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46MHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoNHtcclxuXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIC5naWdfX3ZpZGVve1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjcwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTU2cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZpZGVve1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNzBweDsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC5naWdfX2hlYWRlcntcclxucGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XHJcbiAgICBoZWlnaHQ6MTQwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmdpZ19faGVhZGVyX19saXZlIHNwYW57XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IFJlZDtcclxuICAgICAgICAgICAgcGFkZGluZzogNHB4IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDExcHg7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAjbWVzc2FnZXMtYm94e1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6MTAwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5naWdfX2NoYXR7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MjBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgIC5naWdfX2NoYXRfX21lc3NhZ2V7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc2FwcmVudDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLmdpZ19fY2hhdF9fbWVzc2FnZSBpb24tbGFiZWx7XHJcbiAgICAgICAgICAgIGZsZXg6bm9uZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgICAgICAgIHRyYW5zaXRpb246bWFyZ2luLXRvcCBsaW5lYXIgMjAwbXM7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmdpZ19fY2hhdF9fbWVzc2FnZS5zaG93LXRpbWUgaW9uLWxhYmVse1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5naWdfX2NoYXRfX21lc3NhZ2UgaW9uLW5vdGV7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAtMTZweDtcclxuICAgICAgICBmb250LXNpemU6MTBweDtcclxuICAgICAgICB6LWluZGV4Oi0xO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmdpZ19fY2hhdF9fbWVzc2FnZS5mcm9tLW1lc3NhZ2UgaW9uLW5vdGV7XHJcbiAgICAgICAgICAgIGxlZnQ6IDczcHg7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5naWdfX2NoYXRfX21lc3NhZ2UudG8tbWVzc2FnZSBpb24tbm90ZXtcclxuICAgICAgICAgICAgcmlnaHQ6MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmdpZ19fY2hhdF9fbWVzc2FnZS5mcm9tLW1lc3NhZ2UuYmVmb3JlIGlvbi1sYWJlbHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmdpZ19fY2hhdF9fbWVzc2FnZS5mcm9tLW1lc3NhZ2UuYWZ0ZXIgaW9uLWxhYmVse1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZ2lnX19jaGF0X19tZXNzYWdlLnRvLW1lc3NhZ2UuYmVmb3JlIGlvbi1sYWJlbHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5naWdfX2NoYXRfX21lc3NhZ2UudG8tbWVzc2FnZS5hZnRlciBpb24tbGFiZWx7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZ2lnX19jaGF0X19tZXNzYWdlLmZyb20tbWVzc2FnZSBpb24tYXZhdGFye1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZ2lnX19jaGF0X19tZXNzYWdlLmZyb20tbWVzc2FnZS5iZWZvcmUgaW9uLWF2YXRhcntcclxuICAgICAgICAgICAgb3BhY2l0eTowO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmdpZ19fY2hhdF9fbWVzc2FnZS5mcm9tLW1lc3NhZ2UgaW9uLWxhYmVse1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZWU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNzUlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAuZ2lnX19jaGF0X19tZXNzYWdlLnRvLW1lc3NhZ2V7XHJcblxyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZ2lnX19jaGF0X19tZXNzYWdlLnRvLW1lc3NhZ2UgLmlucHV0LXdyYXBwZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuZ2lnX19jaGF0X19tZXNzYWdlLnRvLW1lc3NhZ2UgaW9uLWxhYmVse1xyXG4gICAgICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI0OTdlODtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5naWdfX2NoYXRfX21lc3NhZ2UgaW9uLWxhYmVsIHB7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6MTdweDtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgICAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZ2lnX19jaGF0X19tZXNzYWdlLnRvLW1lc3NhZ2UgaW9uLWxhYmVsIHAge1xyXG4gICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAuZ2lnX19jaGF0X19tZXNzYWdlIC5pdGVtLWlubmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTpub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5tZXNzYWdlLWxpc3QgPiAuaXRlbS1ibG9ja3tcclxuICAgICAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9ICAgIFxyXG4gICBcclxufVxyXG5cclxuLmdpZy1mb290ZXJ7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XHJcbiAgICAmLmdpZy1mb290ZXItLXNlbmQtbWVzc2FnZXtcclxuXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4uZ2lnLWZvb3RlciBpb24taW5wdXR7XHJcbiAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEycHg7ICAgIFxyXG59XHJcblxyXG4uZ2lnLWZvb3RlciAuZ2lnLWZvb3Rlcl9fc2VuZC1tZXNzYWdle1xyXG53aWR0aDogMjUlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn0gICAgXHJcbiIsIi5naWctdG9vbGJhciBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5naWcgLmdpZ19fbG9hZGluZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cbi5naWcgLmdpZ19fYm9va2luZy1kZXRhaWxzIHAgYSB7XG4gIGNvbG9yOiBXaGl0ZTtcbn1cbi5naWcgLmdpZ19fYm9va2luZy1kZXRhaWxzIC5naWdfX2Jvb2tpbmctZGV0YWlsc19faW5mbyB7XG4gIHRleHQtYWxpZ246IENlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuLmdpZyAuZ2lnX19ib29raW5nLWRldGFpbHMgLmdpZ19fYm9va2luZy1kZXRhaWxzX190ZXJtcyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIG9wYWNpdHk6IDAuNTtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbi5naWcgLmdpZ19fYm9va2luZy1kZXRhaWxzIC5naWdfX2Jvb2tpbmctZGV0YWlsc19fY291bnRkb3duIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuLmdpZyAuZ2lnX19ib29raW5nLWRldGFpbHMgLmdpZ19fYm9va2luZy1kZXRhaWxzX19jb3VudGRvd24gPiBkaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbWFyZ2luOiAwcHggMTVweDtcbn1cbi5naWcgLmdpZ19fYm9va2luZy1kZXRhaWxzIC5naWdfX2Jvb2tpbmctZGV0YWlsc19fY291bnRkb3duID4gZGl2IHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmdpZyAuZ2lnX19ib29raW5nLWRldGFpbHMgLmdpZ19fYm9va2luZy1kZXRhaWxzX19nby1saXZlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZ2lnIC5naWdfX2Jvb2tpbmctZGV0YWlscyAuZ2lnX19ib29raW5nLWRldGFpbHNfX3BheW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM2LCAxNTEsIDIzMiwgMC4xNSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICBib3JkZXItdG9wOiAycHggZG90dGVkICMyNDk3ZTg7XG4gIGJvcmRlci1ib3R0b206IDJweCBkb3R0ZWQgIzI0OTdlODtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5naWcgLmdpZ19fYm9va2luZy1kZXRhaWxzIC5naWdfX2Jvb2tpbmctZGV0YWlsc19fcGF5bWVudCBoMyB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uZ2lnIC5naWdfX2Jvb2tpbmctZGV0YWlscyAuZ2lnX19ib29raW5nLWRldGFpbHNfX3BheW1lbnQgcCB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uZ2lnIC5naWdfX2Jvb2tpbmctZGV0YWlscyAuZ2lnX19ib29raW5nLWRldGFpbHNfX3BheW1lbnQgaDQge1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmdpZyAuZ2lnX192aWRlbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI3MHB4O1xuICBtYXJnaW4tdG9wOiAtNTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5naWcgLmdpZ19fdmlkZW8gdmlkZW8ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNzBweDtcbn1cbi5naWcgLmdpZ19fdmlkZW8gaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICBib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cbi5naWcgLmdpZ19faGVhZGVyIHtcbiAgcGFkZGluZzogMjBweCAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbiAgaGVpZ2h0OiAxNDBweDtcbn1cbi5naWcgLmdpZ19faGVhZGVyIC5naWdfX2hlYWRlcl9fbGl2ZSBzcGFuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogUmVkO1xuICBwYWRkaW5nOiA0cHggMTJweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmdpZyAuZ2lnX19oZWFkZXIgaW9uLWJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAwcHg7XG59XG4uZ2lnIC5naWdfX2hlYWRlciBpb24taXRlbSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG4uZ2lnICNtZXNzYWdlcy1ib3gge1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbn1cbi5naWcgLmdpZ19fY2hhdCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmdpZyAuZ2lnX19jaGF0IC5naWdfX2NoYXRfX21lc3NhZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zYXByZW50O1xufVxuLmdpZyAuZ2lnX19jaGF0IC5naWdfX2NoYXRfX21lc3NhZ2UgaW9uLWxhYmVsIHtcbiAgZmxleDogbm9uZTtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgdHJhbnNpdGlvbjogbWFyZ2luLXRvcCBsaW5lYXIgMjAwbXM7XG59XG4uZ2lnIC5naWdfX2NoYXQgLmdpZ19fY2hhdF9fbWVzc2FnZS5zaG93LXRpbWUgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi5naWcgLmdpZ19fY2hhdCAuZ2lnX19jaGF0X19tZXNzYWdlIGlvbi1ub3RlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xNnB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIHotaW5kZXg6IC0xO1xufVxuLmdpZyAuZ2lnX19jaGF0IC5naWdfX2NoYXRfX21lc3NhZ2UuZnJvbS1tZXNzYWdlIGlvbi1ub3RlIHtcbiAgbGVmdDogNzNweDtcbiAgdG9wOiAwO1xufVxuLmdpZyAuZ2lnX19jaGF0IC5naWdfX2NoYXRfX21lc3NhZ2UudG8tbWVzc2FnZSBpb24tbm90ZSB7XG4gIHJpZ2h0OiAwcHg7XG59XG4uZ2lnIC5naWdfX2NoYXQgLmdpZ19fY2hhdF9fbWVzc2FnZS5mcm9tLW1lc3NhZ2UuYmVmb3JlIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbn1cbi5naWcgLmdpZ19fY2hhdCAuZ2lnX19jaGF0X19tZXNzYWdlLmZyb20tbWVzc2FnZS5hZnRlciBpb24tbGFiZWwge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG59XG4uZ2lnIC5naWdfX2NoYXQgLmdpZ19fY2hhdF9fbWVzc2FnZS50by1tZXNzYWdlLmJlZm9yZSBpb24tbGFiZWwge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuLmdpZyAuZ2lnX19jaGF0IC5naWdfX2NoYXRfX21lc3NhZ2UudG8tbWVzc2FnZS5hZnRlciBpb24tbGFiZWwge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuLmdpZyAuZ2lnX19jaGF0IC5naWdfX2NoYXRfX21lc3NhZ2UuZnJvbS1tZXNzYWdlIGlvbi1hdmF0YXIge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5naWcgLmdpZ19fY2hhdCAuZ2lnX19jaGF0X19tZXNzYWdlLmZyb20tbWVzc2FnZS5iZWZvcmUgaW9uLWF2YXRhciB7XG4gIG9wYWNpdHk6IDA7XG59XG4uZ2lnIC5naWdfX2NoYXQgLmdpZ19fY2hhdF9fbWVzc2FnZS5mcm9tLW1lc3NhZ2UgaW9uLWxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgbWF4LXdpZHRoOiA3NSU7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5naWcgLmdpZ19fY2hhdCAuZ2lnX19jaGF0X19tZXNzYWdlLnRvLW1lc3NhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAxNXB4O1xuICBtYXgtd2lkdGg6IDc1JTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uZ2lnIC5naWdfX2NoYXQgLmdpZ19fY2hhdF9fbWVzc2FnZS50by1tZXNzYWdlIC5pbnB1dC13cmFwcGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZ2lnIC5naWdfX2NoYXQgLmdpZ19fY2hhdF9fbWVzc2FnZS50by1tZXNzYWdlIGlvbi1sYWJlbCB7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0OTdlODtcbn1cbi5naWcgLmdpZ19fY2hhdCAuZ2lnX19jaGF0X19tZXNzYWdlIGlvbi1sYWJlbCBwIHtcbiAgbWluLWhlaWdodDogMTdweDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmdpZyAuZ2lnX19jaGF0IC5naWdfX2NoYXRfX21lc3NhZ2UudG8tbWVzc2FnZSBpb24tbGFiZWwgcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5naWcgLmdpZ19fY2hhdCAuZ2lnX19jaGF0X19tZXNzYWdlIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi5naWcgLmdpZ19fY2hhdC5tZXNzYWdlLWxpc3QgPiAuaXRlbS1ibG9jayB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmdpZy1mb290ZXIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcbn1cbi5naWctZm9vdGVyIGlvbi1pbnB1dCB7XG4gIHdpZHRoOiA3NSU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAtLXBhZGRpbmctYm90dG9tOiAxMnB4O1xufVxuXG4uZ2lnLWZvb3RlciAuZ2lnLWZvb3Rlcl9fc2VuZC1tZXNzYWdlIHtcbiAgd2lkdGg6IDI1JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/gig/gig.page.ts":
/*!***************************************!*\
  !*** ./src/app/pages/gig/gig.page.ts ***!
  \***************************************/
/*! exports provided: GigPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GigPage", function() { return GigPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _services_gig_gig_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/gig/gig.service */ "./src/app/services/gig/gig.service.ts");
/* harmony import */ var _services_stream_stream_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/stream/stream.service */ "./src/app/services/stream/stream.service.ts");
/* harmony import */ var _services_message_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/message/message.service */ "./src/app/services/message/message.service.ts");
/* harmony import */ var _pay_pay_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pay/pay.page */ "./src/app/pages/pay/pay.page.ts");
/* harmony import */ var _create_review_create_review_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../create-review/create-review.page */ "./src/app/pages/create-review/create-review.page.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var peerjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! peerjs */ "./node_modules/peerjs/dist/peerjs.min.js");
/* harmony import */ var peerjs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(peerjs__WEBPACK_IMPORTED_MODULE_11__);












var GigPage = /** @class */ (function () {
    function GigPage(authenticationService, gigService, route, alertCtrl, streamService, messageService, modalController, loadingCtrl, ngZone) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.gigService = gigService;
        this.route = route;
        this.alertCtrl = alertCtrl;
        this.streamService = streamService;
        this.messageService = messageService;
        this.modalController = modalController;
        this.loadingCtrl = loadingCtrl;
        this.ngZone = ngZone;
        var gigId = this.route.snapshot.params['id'];
        this.loading = true;
        this.gig = { id: gigId };
        this.getGig();
        this.streamTime = 0;
        this.stream = {};
        this.messages = [];
        this.message = "";
        this.authenticationService.getUserData().subscribe(function (data) {
            _this.user = data;
        });
        this.timerComplete = false;
        this.timeToLive = {};
    }
    GigPage.prototype.ngOnInit = function () {
    };
    GigPage.prototype.ionViewWillLeave = function () {
        if (this.timeToLiveInterval) {
            clearInterval(this.timeToLiveInterval);
        }
        if (this.streamTimeInterval) {
            clearInterval(this.streamTimeInterval);
        }
        if (this.messageInterval) {
            clearInterval(this.messageInterval);
        }
        if (this.videoStream) {
            this.videoStream.getTracks().forEach(function (stream) { return stream.stop(); });
        }
        if (this.stream.id) {
            this.streamService.deleteParticipant(this.stream.id).then(function () { });
        }
    };
    GigPage.prototype.getGig = function () {
        var _this = this;
        this.gigService.getGig(this.gig.id).then(function (data) {
            if (data.date_required) {
                var localeOffset = (new Date().getTimezoneOffset());
                data.date_required = moment__WEBPACK_IMPORTED_MODULE_10__(data.date_required).add(localeOffset, 'm').format("YYYY-MM-DD HH:mm:ss");
                console.log(_this.gig);
            }
            _this.ngZone.run(function () {
                _this.gig = data;
            });
            if (_this.gig.status === "live") {
                _this.getStream();
                _this.setupMessageBox();
            }
            if (_this.gig.status === "upcoming") {
                _this.setTimeToLive();
                _this.timeToLiveInterval = setInterval(function () {
                    _this.setTimeToLive();
                }, 1000);
            }
            _this.loading = false;
        });
    };
    GigPage.prototype.confirmBooking = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            header: 'Are You Sure?',
            subHeader: 'You are about to confirm this booking',
            message: 'Once confirmed, you are obligated to perform on this date and time.',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Confirm',
                    handler: function (data) {
                        _this.gigService.updateGig({ id: _this.gig.id, status: "upcoming" }).then(function () {
                            _this.gig.status = "upcoming";
                            var alert = _this.alertCtrl.create({
                                header: 'Booking Confirmed',
                                message: 'Congratulations! Your booking has now been confirmed. Ensure you go live at the date and time of this booking.',
                                buttons: [
                                    {
                                        text: 'Dismiss',
                                        role: 'cancel',
                                        handler: function (data) {
                                        }
                                    }
                                ]
                            }).then(function (el) {
                                el.present();
                            });
                            _this.setTimeToLive();
                            _this.timeToLiveInterval = setInterval(function () {
                                _this.setTimeToLive();
                            }, 1000);
                        });
                    }
                }
            ]
        }).then(function (el) {
            el.present();
        });
    };
    GigPage.prototype.goLive = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            header: 'Are You Sure?',
            subHeader: 'You are about to go live',
            message: 'The customer will then be able to join the gig. Once the customer joins, you will earn money based on the hourly rate set for this gig.',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Go Live',
                    handler: function (data) {
                        _this.gigService.updateGig({ id: _this.gig.id, status: "live", golive: true }).then(function () {
                            _this.gig.status = "live";
                            _this.streamService.createStream(_this.gig.id).then(function (data) {
                                _this.stream = data;
                                _this.streamTime = 0;
                                _this.setupMessages();
                                _this.joinStream();
                            });
                            var alert = _this.alertCtrl.create({
                                header: 'You Are Live!',
                                message: 'You are now live. The customer has been notified and will join the gig shortly.',
                                buttons: [
                                    {
                                        text: 'Dismiss',
                                        role: 'cancel',
                                        handler: function (data) {
                                        }
                                    }
                                ]
                            }).then(function (el) {
                                el.present();
                            });
                        }).catch(function () {
                            var alert = _this.alertCtrl.create({
                                header: 'Error',
                                message: 'There was an error going live, please try again soon.',
                                buttons: [
                                    {
                                        text: 'Dismiss',
                                        role: 'cancel',
                                        handler: function (data) {
                                        }
                                    }
                                ]
                            }).then(function (el) {
                                el.present();
                            });
                        });
                    }
                }
            ]
        }).then(function (el) {
            el.present();
        });
    };
    GigPage.prototype.stopShow = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            header: 'Are You Sure?',
            subHeader: 'You are about to end the stream which will complete this gig',
            message: 'Once completed, the final total duration will be calculcated and payment will be required from the customer.',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Stop Show',
                    handler: function (data) {
                        _this.gigService.updateGig({ id: _this.gig.id, status: "completed" }).then(function () {
                            if (_this.streamTimeInterval) {
                                clearInterval(_this.streamTimeInterval);
                            }
                            if (_this.messageInterval) {
                                clearInterval(_this.messageInterval);
                            }
                            if (_this.videoStream) {
                                _this.videoStream.getTracks().forEach(function (stream) { return stream.stop(); });
                            }
                            if (_this.stream.id) {
                                _this.streamService.deleteParticipant(_this.stream.id).then(function () { });
                            }
                            _this.gig.status = "completed";
                            var alert = _this.alertCtrl.create({
                                header: 'Gig Completed',
                                message: 'Congratulations! You have completed this gig. If you are the customer, dismiss this message and make payment. If you are the musician, you will be notified once payment has been made.',
                                buttons: [
                                    {
                                        text: 'Dismiss',
                                        role: 'cancel',
                                        handler: function (data) {
                                        }
                                    }
                                ]
                            }).then(function (el) {
                                el.present();
                            });
                        }).catch(function () {
                            var alert = _this.alertCtrl.create({
                                header: 'Error',
                                message: 'There was an error stopping this show, please try again soon.',
                                buttons: [
                                    {
                                        text: 'Dismiss',
                                        role: 'cancel',
                                        handler: function (data) {
                                        }
                                    }
                                ]
                            }).then(function (el) {
                                el.present();
                            });
                        });
                    }
                }
            ]
        }).then(function (el) {
            el.present();
        });
    };
    GigPage.prototype.makePayment = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _pay_pay_page__WEBPACK_IMPORTED_MODULE_8__["PayPage"],
                            componentProps: {}
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            if (data && data.data) {
                                //send
                                var token = data.data;
                                _this.completeOrder(token.id);
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GigPage.prototype.completeOrder = function (cardToken) {
        var _this = this;
        var loading;
        this.loadingCtrl.create({
            message: 'Completing payment. Please wait...',
            duration: 20000
        }).then(function (el) {
            loading = el;
            el.present();
        });
        var cost = (this.gig.streams[0].actual_duration / 3600) * this.gig.hourly_rate;
        var fees = cost * 0.1;
        this.gigService.completePayment({ gig_id: this.gig.id, payment: (cost + fees).toFixed(2), payment_date: moment__WEBPACK_IMPORTED_MODULE_10__().format("YYYY-MM-DD HH:mm:ss"), recipient_user_id: this.gig.booked_user_id, card_token: cardToken }).then(function (data) {
            loading.dismiss();
            _this.alertCtrl.create({
                header: "Thank You!",
                message: "Your payment was successful. You can view all billing and payment in your Settings. Write a review to tell other users about this musician.",
                buttons: [
                    {
                        text: 'Dismiss',
                        role: 'cancel',
                        handler: function (data) {
                        }
                    },
                    {
                        text: 'Write Review',
                        handler: function (data) {
                            _this.writeReview(_this.gig.booked_user_id);
                        }
                    }
                ]
            }).then(function (el) {
                el.present();
            });
            //this.navController.back();     
        }).catch(function () {
            loading.dismiss();
            _this.alertCtrl.create({
                header: "Error",
                message: "There was an error making payment.",
                buttons: [
                    {
                        text: 'Dismiss',
                        role: 'cancel'
                    }
                ]
            }).then(function (el) {
                el.present();
            });
        });
    };
    GigPage.prototype.writeReview = function (userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _create_review_create_review_page__WEBPACK_IMPORTED_MODULE_9__["CreateReviewPage"],
                            componentProps: { gig: this.gig, user_id: userId }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            if (data && data.data) {
                                if (data.data.reviewed) {
                                    _this.gig.reviews.push({ user_id: _this.user.id });
                                    _this.getGig();
                                }
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GigPage.prototype.getStream = function () {
        var _this = this;
        this.streamService.getStream(this.gig.id).then(function (data) {
            _this.stream = data;
            _this.streamTime = _this.stream.actual_duration ? _this.stream.actual_duration : 0;
            _this.setupMessages();
            _this.joinStream();
        });
    };
    GigPage.prototype.joinStream = function () {
        var _this = this;
        this.peer = new peerjs__WEBPACK_IMPORTED_MODULE_11___default.a();
        this.peer.on('open', function (id) {
            _this.peerId = id;
            _this.streamService.createParticipant(_this.stream.id, id).then(function () {
            });
            navigator.getUserMedia({ audio: true, video: true }, function (stream) {
                var e_1, _a;
                _this.videoStream = stream;
                var videoElement = document.querySelector('#video-stream');
                videoElement.srcObject = stream;
                var participants = _this.stream.participants;
                try {
                    for (var participants_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(participants), participants_1_1 = participants_1.next(); !participants_1_1.done; participants_1_1 = participants_1.next()) {
                        var participant = participants_1_1.value;
                        if (participant.user_id !== _this.user.id) {
                            _this.peer.call(participant.peer_id, _this.videoStream);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (participants_1_1 && !participants_1_1.done && (_a = participants_1.return)) _a.call(participants_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }, function (error) {
                alert("There was an error streaming your camera or microphone");
            });
        });
        this.peer.on('call', function (call) {
            call.answer(_this.videoStream);
            //receiving participant stream
            call.on('stream', function (stream) {
                var videoElement = document.querySelector('#video-stream');
                videoElement.srcObject = stream;
                //this.streamTime = this.stream.actual_duration ? this.stream.actual_duration : 0;
                _this.streamTimeInterval = setInterval(function () {
                    _this.streamTime += 1;
                    if (_this.streamTime % 10 === 0 && _this.user.id === _this.gig.booked_user_id) {
                        _this.saveStreamDuration();
                    }
                }, 1000);
            });
        });
    };
    GigPage.prototype.saveStreamDuration = function () {
        this.streamService.saveDuration(this.stream.id, this.streamTime).then(function () {
        });
    };
    GigPage.prototype.goFullscreen = function () {
        var videoElement = document.querySelector('#video-stream');
        if (videoElement.mozRequestFullScreen) {
            videoElement.mozRequestFullScreen();
        }
        else if (videoElement.webkitRequestFullScreen) {
            videoElement.webkitRequestFullScreen();
        }
    };
    GigPage.prototype.setupMessageBox = function () {
        var _this = this;
        setTimeout(function () {
            var screenHeight = window.screen.height;
            var box = document.getElementById("messages-box");
            box.style.height = (screenHeight - 270 - 140 - 44) + "px"; //stream, header, footer
            _this.content.scrollToBottom(300);
        }, 500);
    };
    GigPage.prototype.setupMessages = function () {
        var _this = this;
        this.messageService.getMessages(this.stream.id).then(function (data) {
            _this.messages = data;
            _this.calculateMessages();
            _this.content.scrollToBottom(300);
        });
        this.messageInterval = setInterval(function () {
            _this.messageService.getMessages(_this.stream.id).then(function (data) {
                var currentMessages = _this.messages.length;
                var newMessages = data.length;
                if (currentMessages !== newMessages) {
                    _this.messages = data;
                    _this.calculateMessages();
                    _this.content.scrollToBottom(300);
                }
            });
        }, 5000);
    };
    GigPage.prototype.sendMessage = function () {
        var localeOffset = -(new Date().getTimezoneOffset());
        var sentAt = moment__WEBPACK_IMPORTED_MODULE_10__().add(localeOffset, 'm').format("YYYY-MM-DD HH:mm:ss");
        var message = this.message;
        var messageObj = { id: 0, stream_id: this.stream.id, user_id: this.user.id, message: message, sent_at: sentAt };
        this.messages.push(messageObj);
        this.calculateMessages();
        this.content.scrollToBottom(300);
        this.message = "";
        this.messageService.createMessage(this.stream.id, message, sentAt).then(function (data) {
            messageObj.id = data.id;
        });
    };
    GigPage.prototype.stopShowParticipant = function () {
        if (this.streamTimeInterval) {
            clearInterval(this.streamTimeInterval);
        }
        if (this.messageInterval) {
            clearInterval(this.messageInterval);
        }
        if (this.videoStream) {
            this.videoStream.getTracks().forEach(function (stream) { return stream.stop(); });
        }
        if (this.stream.id) {
            this.streamService.deleteParticipant(this.stream.id).then(function () { });
        }
        this.gig.status = "completed";
        if (this.user.id === this.gig.booked_user_id) {
            var alert_1 = this.alertCtrl.create({
                header: 'Gig Completed',
                subHeader: 'The customer has stopped this show',
                message: 'The customer will now pay for the duration of the gig. You will be notified once payment has been made.',
                buttons: [
                    {
                        text: 'Dismiss',
                        role: 'cancel',
                        handler: function (data) {
                        }
                    }
                ]
            }).then(function (el) {
                el.present();
            });
        }
        else {
            var alert_2 = this.alertCtrl.create({
                header: 'Gig Completed',
                subHeader: 'The musician has stopped this show',
                message: 'Dismiss this message to see details of the stream and to make payment.',
                buttons: [
                    {
                        text: 'Dismiss',
                        role: 'cancel',
                        handler: function (data) {
                        }
                    }
                ]
            }).then(function (el) {
                el.present();
            });
        }
    };
    GigPage.prototype.calculateMessages = function () {
        for (var index in this.messages) {
            if (this.messages[index].status === "system") {
                //indicates the stream was ended by the other party, complete the stream
                this.stopShowParticipant();
                return;
            }
            //check message before is befrom same user
            //check message after is from same user
            var indexInt = parseInt(index);
            var message = this.messages[indexInt];
            var previousMessage = this.messages[indexInt - 1];
            var nextMessage = this.messages[indexInt + 1];
            var isBefore = false;
            var isAfter = false;
            if (previousMessage && message.userid === previousMessage.userid) {
                isAfter = true;
            }
            if (nextMessage && message.userid === nextMessage.userid) {
                isBefore = true;
            }
            message.isBefore = isBefore;
            message.isAfter = isAfter;
        }
    };
    GigPage.prototype.getMessageTime = function (date) {
        var localeOffset = (new Date().getTimezoneOffset());
        return moment__WEBPACK_IMPORTED_MODULE_10__(date).add(localeOffset, 'm').fromNow();
    };
    GigPage.prototype.canGoLive = function () {
        return moment__WEBPACK_IMPORTED_MODULE_10__().isSameOrAfter(moment__WEBPACK_IMPORTED_MODULE_10__(this.gig.date_required));
    };
    GigPage.prototype.formatDate = function (date) {
        return moment__WEBPACK_IMPORTED_MODULE_10__(date).format("DD/MM/YYYY [at] h:mma");
    };
    GigPage.prototype.formatStreamTime = function (totalSeconds) {
        var hours = Math.floor(totalSeconds / 3600);
        var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
        var seconds = (totalSeconds - (hours * 3600) - (minutes * 60));
        var stringT = (hours > 0 ? (hours < 10 ? "0" + hours : hours) + ':' : '') +
            (minutes < 10 ? "0" + minutes : minutes) + ':' +
            (seconds < 10 ? "0" + seconds : seconds);
        return stringT;
    };
    GigPage.prototype.setTimeToLive = function () {
        this.getDaysToLive();
        this.getHoursToLive();
        this.getMinutesToLive();
        this.getSecondsToLive();
        if (this.timeToLive.days <= 0 && this.timeToLive.hours <= 0 && this.timeToLive.minutes <= 0 && this.timeToLive.seconds <= 0) {
            if (this.timeToLiveInterval) {
                clearInterval(this.timeToLiveInterval);
            }
            this.timerComplete = true;
        }
    };
    GigPage.prototype.getDaysToLive = function () {
        this.timeToLive.days = moment__WEBPACK_IMPORTED_MODULE_10__(this.gig.date_required).diff(moment__WEBPACK_IMPORTED_MODULE_10__(), 'days');
        if (this.timeToLive.days < 0) {
            this.timeToLive.days = 0;
        }
    };
    GigPage.prototype.getHoursToLive = function () {
        var days = this.timeToLive.days;
        var hourDate = moment__WEBPACK_IMPORTED_MODULE_10__(this.gig.date_required);
        hourDate.subtract(days, "days");
        this.timeToLive.hours = hourDate.diff(moment__WEBPACK_IMPORTED_MODULE_10__(), 'hours');
        if (this.timeToLive.hours < 0) {
            this.timeToLive.hours = 0;
        }
    };
    GigPage.prototype.getMinutesToLive = function () {
        var days = this.timeToLive.days;
        var hours = this.timeToLive.hours;
        var minuteDate = moment__WEBPACK_IMPORTED_MODULE_10__(this.gig.date_required);
        minuteDate.subtract(days, "days").subtract(hours, "hours");
        this.timeToLive.minutes = minuteDate.diff(moment__WEBPACK_IMPORTED_MODULE_10__(), 'minutes');
        if (this.timeToLive.minutes < 0) {
            this.timeToLive.minutes = 0;
        }
    };
    GigPage.prototype.getSecondsToLive = function () {
        var days = this.timeToLive.days;
        var hours = this.timeToLive.hours;
        var minutes = this.timeToLive.minutes;
        var secondsDate = moment__WEBPACK_IMPORTED_MODULE_10__(this.gig.date_required);
        secondsDate.subtract(days, "days").subtract(hours, "hours").subtract(minutes, "minutes");
        this.timeToLive.seconds = secondsDate.diff(moment__WEBPACK_IMPORTED_MODULE_10__(), 'seconds');
        if (this.timeToLive.seconds < 0) {
            this.timeToLive.seconds = 0;
        }
    };
    GigPage.ctorParameters = function () { return [
        { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
        { type: _services_gig_gig_service__WEBPACK_IMPORTED_MODULE_5__["GigService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _services_stream_stream_service__WEBPACK_IMPORTED_MODULE_6__["StreamService"] },
        { type: _services_message_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('messagesbox')
    ], GigPage.prototype, "content", void 0);
    GigPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gig',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./gig.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gig/gig.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./gig.page.scss */ "./src/app/pages/gig/gig.page.scss")).default]
        })
    ], GigPage);
    return GigPage;
}());



/***/ }),

/***/ "./src/app/pages/pay/pay.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pages/pay/pay.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pay ion-col ion-icon {\n  font-size: 24px;\n  margin-top: 20px;\n}\n.pay .pay__card-details ion-col {\n  padding-left: 0px;\n  padding-right: 0px;\n  align-self: stretch;\n  align-self: flex-end;\n}\n.pay .pay__card-details ion-col.pay__card-details__cvc {\n  padding-left: 15px;\n}\n.pay .pay__error {\n  color: red;\n  margin-top: 15px;\n  text-align: center;\n}\n.pay-footer {\n  background-color: #121212;\n}\n.pay-footer:before {\n  display: none;\n}\n.pay-footer .pay-footer__button ion-spinner {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5L0Q6XFxUYXlsb3JcXERvY3VtZW50c1xcV2Vic2l0ZXNcXG11c2ljYnVkZHlcXGFwcC9zcmNcXGFwcFxccGFnZXNcXHBheVxccGF5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGF5L3BheS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNIWjtBRFdRO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNUWjtBRFdZO0VBQ0ksa0JBQUE7QUNUaEI7QURjSTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDWlI7QURvQkE7RUFDSSx5QkFBQTtBQ2pCSjtBRG1CSTtFQUNJLGFBQUE7QUNqQlI7QURzQlk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ3BCaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXkvcGF5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXl7XHJcbiAgICBcclxuICAgIGlvbi1jb2x7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgLnBheV9fY2FyZC1kZXRhaWxze1xyXG4gICAgICAgIGlvbi1jb2x7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDowcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MHB4O1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICYucGF5X19jYXJkLWRldGFpbHNfX2N2Y3tcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucGF5X19lcnJvcntcclxuICAgICAgICBjb2xvcjpyZWQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoxNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG4ucGF5LWZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzEyMTIxMjtcclxuICAgIFxyXG4gICAgJjpiZWZvcmV7XHJcbiAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgICAgLnBheS1mb290ZXJfX2J1dHRvbntcclxuXHJcbiAgICAgICAgICAgIGlvbi1zcGlubmVye1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4OyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbn0iLCIucGF5IGlvbi1jb2wgaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ucGF5IC5wYXlfX2NhcmQtZGV0YWlscyBpb24tY29sIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG4ucGF5IC5wYXlfX2NhcmQtZGV0YWlscyBpb24tY29sLnBheV9fY2FyZC1kZXRhaWxzX19jdmMge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG4ucGF5IC5wYXlfX2Vycm9yIHtcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGF5LWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG59XG4ucGF5LWZvb3RlcjpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnBheS1mb290ZXIgLnBheS1mb290ZXJfX2J1dHRvbiBpb24tc3Bpbm5lciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/pay/pay.page.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pay/pay.page.ts ***!
  \***************************************/
/*! exports provided: PayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPage", function() { return PayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);




var PayPage = /** @class */ (function () {
    function PayPage(modalController, loadingController, alertController, platform) {
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.platform = platform;
        this.card = {};
        this.maxDate = (new Date()).getFullYear() + 10;
    }
    PayPage.prototype.ngOnInit = function () {
    };
    PayPage.prototype.dismiss = function () {
        this.modalController.dismiss();
    };
    PayPage.prototype.makePayment = function () {
        var _this = this;
        this.loading = true;
        this.error = "";
        var card = {
            number: this.card.number,
            name: this.card.name,
            cvc: this.card.cvc,
            expMonth: moment__WEBPACK_IMPORTED_MODULE_3__(this.card.expiry).format("MM"),
            expYear: moment__WEBPACK_IMPORTED_MODULE_3__(this.card.expiry).format("YYYY")
        };
        cordova.plugins.stripe.createCardToken(card, function (data) {
            _this.loading = false;
            _this.modalController.dismiss(data);
        }, function (e) {
            _this.error = e;
            _this.loading = false;
        });
    };
    PayPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
    ]; };
    PayPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pay',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pay.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pay/pay.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pay.page.scss */ "./src/app/pages/pay/pay.page.scss")).default]
        })
    ], PayPage);
    return PayPage;
}());



/***/ }),

/***/ "./src/app/services/message/message.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/message/message.service.ts ***!
  \*****************************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm5/ionic-storage.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var MessageService = /** @class */ (function () {
    function MessageService(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    MessageService.prototype.getMessages = function (streamId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("mb_token").then(function (token) {
                if (token) {
                    _this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/messages/" + streamId + "?token=" + token).subscribe(function (res) {
                        resolve(res);
                    }, function (e) {
                        reject(e);
                    });
                }
                else {
                    reject();
                }
            });
        });
    };
    MessageService.prototype.createMessage = function (streamId, message, sentAt) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("mb_token").then(function (token) {
                if (token) {
                    _this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/messages?token=" + token, { stream_id: streamId, message: message, sent_at: sentAt }).subscribe(function (res) {
                        resolve(res);
                    }, function (e) {
                        reject(e);
                    });
                }
                else {
                    reject();
                }
            });
        });
    };
    MessageService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
    ]; };
    MessageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/services/stream/stream.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/stream/stream.service.ts ***!
  \***************************************************/
/*! exports provided: StreamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamService", function() { return StreamService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm5/ionic-storage.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var StreamService = /** @class */ (function () {
    function StreamService(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    StreamService.prototype.getStream = function (gigId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("mb_token").then(function (token) {
                if (token) {
                    _this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/streams/" + gigId + "?token=" + token).subscribe(function (res) {
                        resolve(res);
                    }, function (e) {
                        reject(e);
                    });
                }
                else {
                    reject();
                }
            });
        });
    };
    StreamService.prototype.createStream = function (gigId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("mb_token").then(function (token) {
                if (token) {
                    _this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/streams?token=" + token, { gig_id: gigId }).subscribe(function (res) {
                        resolve(res);
                    }, function (e) {
                        reject(e);
                    });
                }
                else {
                    reject();
                }
            });
        });
    };
    StreamService.prototype.createParticipant = function (streamId, peerId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("mb_token").then(function (token) {
                if (token) {
                    _this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/streamparticipants?token=" + token, { stream_id: streamId, peer_id: peerId }).subscribe(function (res) {
                        resolve(res);
                    }, function (e) {
                        reject(e);
                    });
                }
                else {
                    reject();
                }
            });
        });
    };
    StreamService.prototype.deleteParticipant = function (streamId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("mb_token").then(function (token) {
                if (token) {
                    _this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/streamparticipants/" + streamId + "?token=" + token).subscribe(function (res) {
                        resolve(res);
                    }, function (e) {
                        reject(e);
                    });
                }
                else {
                    reject();
                }
            });
        });
    };
    StreamService.prototype.saveDuration = function (streamId, duration) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("mb_token").then(function (token) {
                if (token) {
                    _this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/streams/" + streamId + "?token=" + token, { actual_duration: duration }).subscribe(function (res) {
                        resolve(res);
                    }, function (e) {
                        reject(e);
                    });
                }
                else {
                    reject();
                }
            });
        });
    };
    StreamService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
    ]; };
    StreamService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], StreamService);
    return StreamService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-gig-gig-module.js.map