if(!document.getElementById('fazi-style')){

  var css = `
    body { background: #000000 !important; }
    body::-webkit-scrollbar { background-color: #00000000; }
    cm-gutter { background: none !important; }
  `;

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  style.id = 'fazi-style'
  style.appendChild(document.createTextNode(css));

  head.appendChild(style);
}
