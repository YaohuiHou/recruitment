!function(t,e){"object"==typeof exports?module.exports=exports=e(require("./core.js")):"function"==typeof define&&define.amd?define(["./core"],e):e(t.CryptoJS)}(this,function(t){return function(e){var o=t,i=o.lib,n=i.Base,r=i.WordArray,s=o.x64={};s.Word=n.extend({init:function(t,e){this.high=t,this.low=e}}),s.WordArray=n.extend({init:function(t,e){t=this.words=t||[],this.sigBytes=void 0!=e?e:8*t.length},toX32:function(){for(var t=this.words,e=t.length,o=[],i=0;i<e;i++){var n=t[i];o.push(n.high),o.push(n.low)}return r.create(o,this.sigBytes)},clone:function(){for(var t=n.clone.call(this),e=t.words=this.words.slice(0),o=e.length,i=0;i<o;i++)e[i]=e[i].clone();return t}})}(),t});