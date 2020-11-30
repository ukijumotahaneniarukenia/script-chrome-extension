function formatDateTime(date, format) {
  format = format.replace(/yyyy/g, date.getFullYear());
  format = format.replace(/MM/g, ("0" + (date.getMonth() + 1)).slice(-2));
  format = format.replace(/dd/g, ("0" + date.getDate()).slice(-2));
  format = format.replace(/HH/g, ("0" + date.getHours()).slice(-2));
  format = format.replace(/mm/g, ("0" + date.getMinutes()).slice(-2));
  format = format.replace(/ss/g, ("0" + date.getSeconds()).slice(-2));
  format = format.replace(/SSS/g, ("00" + date.getMilliseconds()).slice(-3));
  return format;
}

chrome.browserAction.onClicked.addListener(function (tab) {
  // 拡張機能アイコンクリック時に起動
  // https://developer.chrome.com/extensions/history#method-search
  chrome.history.search({text:""},(itemList)=>{
    let resultList = []
    itemList.map(item=>{
      resultList.push(item)
    })
    console.log(resultList)
    const timeStamp = formatDateTime(new Date(), "yyyy-MM-ddTHH-mm-ss");

    const blob = new Blob([JSON.stringify(resultList)], { type: "text/plain" });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    document.body.appendChild(a);

    a.download = "history-dump-" + timeStamp + ".json";

    a.href = url;

    a.click();

    a.remove();

    URL.revokeObjectURL(url);
  })
});
