//MooTools More, <http://mootools.net/more>. Copyright (c) 2006-2009 Aaron Newton <http://clientcide.com/>, Valerio Proietti <http://mad4milk.net> & the MooTools team <http://mootools.net/developers>, MIT Style License.

Hash.implement({getFromPath:function(a){var b=this.getClean();a.replace(/\[([^\]]+)\]|\.([^.[]+)|[^[.]+/g,function(c){if(!b){return null}var d=arguments[2]||arguments[1]||arguments[0];b=(d in b)?b[d]:null;return c});return b},cleanValues:function(a){a=a||$defined;this.each(function(c,b){if(!a(c)){this.erase(b)}},this);return this},run:function(){var a=arguments;this.each(function(c,b){if($type(c)=="function"){c.run(a)}})}});