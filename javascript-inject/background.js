chrome.browserAction.onClicked.addListener(function (tab) {
  // 拡張機能アイコンクリック時に起動
  // https://developer.chrome.com/extensions/tabs#method-executeScript
  chrome.tabs.executeScript(tab.id, { file: "content_scripts.js" }, function (
    response
  ) {
    console.log("レスポンスだよーん");
    console.log(response);
  });
});
