const infoButtonDom = document.getElementById("info-button");
const textInputDom = document.getElementById("text-input");

let defaultValue = { inputText: "うんこ" };

infoButtonDom.addEventListener("click", () => {
  chrome.storage.local.get(defaultValue, function (items) {
    let messageItem = {};
    console.log("get",items);
    messageItem = items
    chrome.runtime.sendMessage(
      messageItem,
      function (response) {
        console.log("受け取ったデータ：", response);
        setUpResult(JSON.stringify(response));
      },
    );
  });
});

textInputDom.addEventListener("blur", (event) => {
  let pushItem = { inputText: event.target.value };
  chrome.storage.local.set(pushItem, function () {
    console.log("stored");
  });
});

function setUpResult(targetText) {
  let insertDom = document.createElement("div");
  insertDom.innerHTML = targetText;
  document.body.appendChild(insertDom);
}
