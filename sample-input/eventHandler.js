const infoButtonDom = document.getElementById("info-button");
const textInputDom = document.getElementById("text-input");

let inputText = ""

infoButtonDom.addEventListener("click", () => {
  chrome.runtime.sendMessage({text: inputText}, function (response){
    console.log("受け取ったデータ：", response)
    setUpResult(JSON.stringify(response))
  })
});

textInputDom.addEventListener("blur", (event) => {
  inputText = event.target.value
})

function setUpResult(targetText) {
  let insertDom = document.createElement("div");
  insertDom.innerHTML = targetText;
  document.body.appendChild(insertDom);
}
