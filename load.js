(function(){
  window.loadCache = window.loadCache || {};
  window.load = async function(...urls) {
    var toEval = '';
    for(const key in urls) {
      var url = urls[key];
      if (typeof url !== 'string') {
        continue;
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
        logger('[load] Fetching: ' + url);
        const response = await fetch(url);
        logger('[load] ' + response.status + ': ' + url);
        if(response.ok) {
          const text = await response.text();
          window.loadCache[url] = text;
        }
      }
      toEval = toEval + ';' + window.loadCache[url];
    };
    eval(toEval);
  }

  logger('[load] Loaded!');
})();
