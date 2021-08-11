chrome.runtime.onInstalled.addListener(() => {
  //
});

chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    if (/video-weaver/.test(details.url)) {
      console.log(details.url);
      chrome.tabs.executeScript({
        code: 'document.body.innerHTML = ""; document.body.style.backgroundColor="black";',
      });
    }

    return { cancel: false };
  },
  { urls: ["http://*/*", "https://*/*"] },
  ["blocking"]
);
