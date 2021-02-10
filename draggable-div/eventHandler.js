const infoButtonDom = document.getElementById("info-button");

infoButtonDom.addEventListener("click", () => {
  // alert("infoButtonDom");
  // アクティブウィンドウのうち
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // 左端のタブよりメッセージを送信
    chrome.tabs.sendMessage(
      tabs[0].id,
      { message: "hogehogeMessage" },
      function (response) {
        // alert(JSON.stringify(response)); // debug用
        setUpResult(JSON.stringify(response));
        setUpResult(JSON.stringify(chrome.history));
      },
    );
  });
});

function setUpResult(targetText) {
  let insertDom = document.createElement("div");
  insertDom.innerHTML = targetText;
  document.body.appendChild(insertDom);
}
