
let scriptCache = {};
window.script = async function(url) {
  if (typeof url !== 'string') {
    throw new Error('script: expected url string');
  }
  if (url.startsWith('github:')) {
    const [_, path] = url.split('github:');
    url = 'https://raw.githubusercontent.com/' + path;
  }
  if (!scriptCache[url]) {
    const response = await fetch(url);
    const text = await response.text();
    scriptCache[url] = text;
  }
  eval(scriptCache[url]);
}
