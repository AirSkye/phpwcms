(function(){var b=function(c){return c!=null};var a=Object.prototype.hasOwnProperty;Object.extend({getFromPath:function(e,f){if(typeof f=="string"){f=f.split(".")}for(var d=0,c=f.length;d<c;d++){if(a.call(e,f[d])){e=e[f[d]]}else{return null}}return e},cleanValues:function(c,e){e=e||b;for(var d in c){if(!e(c[d])){delete c[d]}}return c},erase:function(c,d){if(a.call(c,d)){delete c[d]}return c},run:function(d){var c=Array.slice(arguments,1);for(var e in d){if(d[e].apply){d[e].apply(d,c)}}return d}})})();