if !document.getElementById('fazi-style') {

  var css = `
    body { background: red !important; }

  `;

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  style.id = 'fazi-style'
  style.appendChild(document.createTextNode(css));

  head.appendChild(style);
}
