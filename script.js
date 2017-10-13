document.addEventListener("DOMContentLoaded", function(event) {
  var head = document.head
  var html = document.getElementsByTagName('html')[0];
  var body = document.body;
body.innerHTML =
`<div id="container">
  <div class="parent">
    <div class="childb"></div>
    <div class="childr"></div>
    <div class="childb"></div>
    <div class="childr"></div>
  </div>
  <div class="parent">
    <div class="childr"></div>
    <div class="childb"></div>
    <div class="childr"></div>
    <div class="childb"></div>
  </div>
  <div class="parent">
    <div class="childb"></div>
    <div class="childr"></div>
    <div class="childb"></div>
    <div class="childr"></div>
  </div>
    <div class="parent">
    <div class="childr"></div>
    <div class="childb"></div>
    <div class="childr"></div>
    <div class="childb"></div>
  </div>
</div>`

  var styles = document.createElement('style');
  head.appendChild(styles)
  styles.innerHTML = `* {
  margin: 0;
  padding: 0;
}

body, html {
  height: 100%;
}

#container {
  height: 100%
}

.parent {
  display: flex;
  height: 25%;
}

.childb {
  width: 33.33%;
  height: 100%;
  margin: auto;
}

.childr {
  width: 33.33%;
  height: 100%;
  margin: auto;
}

.childb {
  background: black
}
.childr {
  background: red
}`

var colors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];

for(let i=0; i < document.getElementsByClassName('childb').length; i++) {
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.getElementsByClassName('childb')[i].style.background = random_color;
}
for(let j=0; j < document.getElementsByClassName('childr').length; j++) {
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.getElementsByClassName('childr')[j].style.background = random_color;
}

})
