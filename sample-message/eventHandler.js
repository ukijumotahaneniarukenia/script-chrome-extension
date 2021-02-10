const infoButtonDom = document.getElementById("info-button");

infoButtonDom.addEventListener("click", () => {
  chrome.runtime.sendMessage({text: "めっせぇじ"}, function (response){
    console.log("受け取ったデータ：", response)
    setUpResult(JSON.stringify(response))
  })
});

function setUpResult(targetText) {
  let insertDom = document.createElement("div");
  insertDom.innerHTML = targetText;
  document.body.appendChild(insertDom);
}
