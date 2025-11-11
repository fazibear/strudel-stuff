(function() {
  if(!document.getElementById('fazi-style')){
    var css = `
      body {
        scrollbar-color: var(--gutterForeground) var(--gutterBackground) !important;
        background: black !important;
      }
      .cm-gutter, .cm-panel {
        background: black !important;
      }
      .cm-vim-panel input {
        border: 0px;
        padding: 0px;
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
