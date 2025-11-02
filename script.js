let scriptCache = {};
function script(url) {
  if (typeof url !== 'string') {
    throw new Error('script: expected url string');
  }
  if (url.startsWith('github:')) {
    const [_, path] = url.split('github:');
    url = 'https://raw.githubusercontent.com/' + path;
  }
  if (!scriptCache[url]) {
    scriptCache[url] = fetch(url)
      .then((res) => res.text());
  }
  eval(scriptCache[url]);
}
