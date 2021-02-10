const infoButtonDom = document.getElementById("info-button");

infoButtonDom.addEventListener("click", () => {
  chrome.runtime.sendMessage({message: "please tabs info"}, function (response){
    console.log("受け取ったデータ：", response)
    setUpResult(JSON.stringify(response))
  })
});

function setUpResult(targetText) {
  let insertDom = document.createElement("div");
  insertDom.innerHTML = targetText;
  document.body.appendChild(insertDom);
}
