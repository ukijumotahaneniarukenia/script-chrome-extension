const ENTRY = {
  triggerDomId: "#wikipedia",
  siteUrl: "https://en.wikipedia.org/wiki/Main_Page",
  executeScriptPath: "./parseWikipedia.js",
};

async function openNewTab(url, timeoutSeconds = 5) {
  return new Promise((resolve, reject) => {
    let targetTabId = null;

    chrome.tabs.create({ url, active: false }, (tab) => {
      targetTabId = tab.id;
    });

    const listener = (tabId, changeInfo) => {
      console.log(tabId, targetTabId, changeInfo);
      chrome.tabs.onUpdated.removeListener(listener);
      resolve(tabId);
    };
    chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
      listener(tabId, changeInfo);
    });

    setTimeout(() => {
      chrome.tabs.remove(targetTabId, function () {});
      reject(new Error("Timeout..."));
    }, timeoutSeconds * 1000);
  });
}

async function parseWikipedia(tabId, executeScriptPath) {
  return new Promise((resolve, reject) => {
    chrome.tabs.executeScript(
      tabId,
      { file: executeScriptPath },
      (resultList) => {
        console.log(resultList);
        if (resultList.length === 0) {
          reject(new Error("Failed to scrape."));
        }
        if (
          resultList[0] === null ||
          resultList[0] === undefined ||
          resultList[0] === ""
        ) {
          reject(new Error("Failed to scrape."));
        }
        resolve(resultList[0]);
      }
    );
  });
}

function showErrorMessage() {
  const errorMessageDom = document.querySelector("#error-message");
  errorMessageDom.style.display = "block";
}

function hideErrorMessage() {
  const errorMessageDom = document.querySelector("#error-message");
  errorMessageDom.style.display = "none";
}

document
  .querySelector(ENTRY.triggerDomId)
  .addEventListener("click", async (event) => {
    event.preventDefault();
    try {
      const openTabId = await openNewTab(ENTRY.siteUrl);
      const resultText = await parseWikipedia(
        openTabId,
        ENTRY.executeScriptPath
      );
      document.querySelector("#content").textContent = resultText;
    } catch (error) {
      isSomethingWrong = true;
      console.log(error);
      showErrorMessage();
    }
  });

document.querySelector("#copy").addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#content").select();
  document.execCommand("copy");
});

document
  .querySelector("#error-message-close-button")
  .addEventListener("click", (event) => {
    hideErrorMessage();
  });
