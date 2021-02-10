function getTabInfo() {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({}, (tabs) => {
      resolve(tabs);
    });
  });
}

async function sendResponseWrapper(message, sendResponse) {
  let resultList = await getTabInfo();
  sendResponse({ a: 1, b: 2, c: message, d: resultList });
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  // https://stackoverflow.com/questions/44056271/chrome-runtime-onmessage-response-with-async-await
  sendResponseWrapper(message, sendResponse);
  return true;
});
