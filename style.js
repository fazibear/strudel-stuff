(function() {
  if(!document.getElementById('fazi-style')){
    var css = `
      body {
        scrollbar-color: var(--gutterForeground) var(--gutterBackground) !important;
        background: black !important;
      }
      #code .cm-gutter {
        background: black !important;
      }
    `;

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';
    style.id = 'fazi-style'
    style.appendChild(document.createTextNode(css));

    head.appendChild(style);
  }
})();
