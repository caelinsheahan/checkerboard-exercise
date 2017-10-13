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
}

`

})
