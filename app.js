import "normalize.css";
import "./css/app.css";

import $ from "jquery";

window.$ = $;
window.jQuery = $;

// `import` statement are lifted to the top of the file, so these files are loaded before window.$ could happen.
// Use require instead of import to prevent these being lifted to the top by webpack.
require("./js/jquery.jplayer.min.js");
require("./js/jquery.gsap.min.js");

// import "scrollmagic";
import "gsap/src/uncompressed/TweenMax.js";
import "gsap/src/uncompressed/plugins/ScrollToPlugin.js"
import "./js/app"