chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  console.log(request)
  if (request.message == "hogehogeMessage") {
    let resultList = []

    resultList.push({unko: "うんこ"})

    // 呼び出し元に処理結果をレスポンスする
    sendResponse(resultList)
  }
});
