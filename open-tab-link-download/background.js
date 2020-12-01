chrome.browserAction.onClicked.addListener(function (tab) {
  // 拡張機能アイコンクリック時に起動
  // https://developer.chrome.com/extensions/windows#method-getAll
  chrome.windows.getAll((windowInfoList)=>{
    windowInfoList.map((windowInfo)=>{
      let resultList = []
      let windowId = windowInfo.id
      chrome.tabs.getAllInWindow(windowId,(tabList)=>{
        tabList.map((tabInfo)=>{
          let result = {
            windowId: windowId,
            tabId: tabInfo.id,
            title: tabInfo.title,
            url: tabInfo.url,
            favIconUrl: tabInfo.favIconUrl,
          }
          resultList.push(result)
        })
        const timeStamp = formatDateTime(new Date(), "yyyy-MM-ddTHH-mm-ss");

        const blob = new Blob([JSON.stringify(resultList)], { type: "text/plain" });

        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");

        document.body.appendChild(a);

        a.download = "history-dump-" + windowId + "-" + timeStamp + ".json";

        a.href = url;

        a.click();

        a.remove();

        URL.revokeObjectURL(url);
      })
    })
  })
});
