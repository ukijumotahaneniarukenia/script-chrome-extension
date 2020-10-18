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

document.getElementById('SameOriginXpathJsonDownload').addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // 現在、最前線で参照しているアクティブウィンドウブラウザのうち
    chrome.tabs.sendMessage(tabs[0].id, { message: 'SameOriginXpathJsonDownload' }, function (response) {
      console.log('SameOriginXpathJsonDownloadのレスポンスだよーん')
      // 先頭のタブに対して実行
      const timeStamp = formatDateTime(new Date(), "yyyy-MM-ddTHH-mm-ss");

      const blob = new Blob([JSON.stringify(response)], { type: 'text/plain' })

      const url = URL.createObjectURL(blob)

      const a = document.createElement('a')

      document.body.appendChild(a)

      a.download = "dom-jsonize-" + timeStamp + ".json";

      a.href = url

      a.click()

      a.remove()

      URL.revokeObjectURL(url)
    });
  });
});
