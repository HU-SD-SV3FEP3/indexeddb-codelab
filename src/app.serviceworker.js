window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./serviceworker.js')
      .then((registration) => {
        // console.log('[AppService] ServiceWorker registration successful:', registration);
      })
      .catch((err) => {
        // console.log('[AppService] ServiceWorker registration failed:', err);
      })
  }
});
