(function () {

  // Hash-based routing
  function processHash() {
    var hash = location.hash || '#';
    if (!app.router.run(hash.substr(1))) {
      // TODO: Show a 404 page...
      alert('Could not find page: ' + hash);
    }
  }

  window.addEventListener('hashchange', processHash);
  processHash();

})();
