chrome.browserAction.onClicked.addListener(function (tab) {
  // 拡張機能アイコンクリック時に起動
  // 現在、最前線で参照しているアクティブウィンドウブラウザのうち
  chrome.tabs.sendMessage(tab.id, { message: 'DomJsonizeDownload' }, function (response) {
    // 参照しているタブに対して実行
    console.log('DomJsonizeDownloadのレスポンスだよーん')
    console.log(response)
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
