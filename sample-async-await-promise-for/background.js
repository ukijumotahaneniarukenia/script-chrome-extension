function getTabInfo() {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({}, (tabs) => {
      chromeTabQueryWrapper(tabs).then(resultList => {
        resolve(resultList)
      })
    });
  });
}

async function chromeTabQueryWrapper(tabs) {
  let promiseList = await listToPromiseList(tabs);
  return new Promise((resolve, reject) => {
    let resultList = [];
    Promise.all(promiseList).then((tabList) => {
      for (let index = 0; index < tabList.length; index++) {
        const tab = tabList[index];
        let resultItem = {
          tabId: tab.id,
          favIconUrl: tab.favIconUrl,
          url: tab.url,
          windowId: tab.windowId,
        };
        resultList.push(resultItem);
      }
    });
    resolve(resultList)
  })
}

function listToPromiseList(targetList) {
  let resultList = [];
  targetList.map((item) => {
    resultList.push(Promise.resolve(item));
  });
  return new Promise((resolve, reject) => {
    resolve(resultList);
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
