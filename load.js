window.loadCache = {};
window.load = async function(url) {
  if (typeof url !== 'string') {
    throw new Error('load: expected url string');
  }
  if (url.startsWith('github:')) {
    const [_, path] = url.split('github:');
    url = 'https://raw.githubusercontent.com/' + path;
  }
  if (!window.loadCache[url]) {
    const response = await fetch(url);
    const text = await response.text();
    window.loadCache[url] = text;
  }
  eval(window.loadCache[url]);
}
