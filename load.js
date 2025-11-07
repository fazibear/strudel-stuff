window.loadCache = window.loadCache || {};
window.load = async function(url) {
  if (typeof url !== 'string') {
    throw new Error('load: expected url string');
  }

  if (url.startsWith('github:')) {
    let [_, path] = base.split('github:');
    path = path.endsWith('/') ? path.slice(0, -1) : path;
    if (path.split('/').length === 2) {
      path += '/main';
    }

    url = 'https://raw.githubusercontent.com/' + path;
  } else if (url.startsWith('fazibear:')) {
    const [_, path] = url.split('fazibear:');
    url = 'https://raw.githubusercontent.com/fazibear/strudel-stuff/main/' + path;
  }

  if (!window.loadCache[url]) {
    logger('[load] fetching: ' + url);
    const response = await fetch(url);
    const text = await response.text();
    window.loadCache[url] = text;
  }
  logger('[load] loading: ' + url);
  eval(window.loadCache[url]);
}

logger('[load] LOADER LOADED');
logger('[load] Usage: await load(\'github:fazibear/strudel-stuff/ssd.js\') ');
