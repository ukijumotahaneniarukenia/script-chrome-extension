document.getElementById('SameOriginXpathJsonDownload').addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // 現在、最前線で参照しているアクティブウィンドウブラウザのうち
    chrome.tabs.sendMessage(tabs[0].id, { message: 'SameOriginXpathJsonDownload' }, function (response) {
      console.log('SameOriginXpathJsonDownloadのレスポンスだよーん')
      // 先頭のタブに対して実行
      const blob = new Blob([JSON.stringify(response)], { type: 'text/plain' })

      const url = URL.createObjectURL(blob)

      const a = document.createElement('a')

      document.body.appendChild(a)

      a.download = 'dom-jsonize.json'

      a.href = url

      a.click()

      a.remove()

      URL.revokeObjectURL(url)
    });
  });
});
