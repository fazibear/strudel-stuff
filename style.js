var css = `
body { background: red; }

`;
var head = document.head || document.getElementsByTagName('head')[0];
var style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(css));

head.appendChild(style);
