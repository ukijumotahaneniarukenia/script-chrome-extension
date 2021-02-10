https://qiita.com/sakaimo/items/5e41d6b2ad8d7ee04b12#%E3%83%A1%E3%83%83%E3%82%BB%E3%83%BC%E3%82%B8%E3%83%91%E3%83%83%E3%82%B7%E3%83%B3%E3%82%B0%E3%81%AE%E9%96%A2%E4%BF%82%E5%9B%B3

https://qiita.com/sakaimo/items/edd910a770b3d5ba83e3#%E3%81%A7%E3%81%8D%E3%82%8B%E3%81%93%E3%81%A8

イベントページモード（基本こっちを指定）

- persistentがfalseならEvent Page
  - 呼ばれたときだけ起動する

```
  "background": {
    "scripts": [],
    "persistent": false
  },
```

バックグラウンドページモード

- persistentがtrueならBackground Page
  - Chromeを起動してから終了するまでずっと動き続ける=メモリを使い続ける

```
  "background": {
    "scripts": [],
    "persistent": true
  },
```

バックグラウンドでしかできないことがそれほど多くないのであれば、contents_scriptだけでいいと思う

permissionをリラックスさせて使えるかどうか1つずつチェック

- API一覧
  - https://developer.chrome.com/docs/extensions/reference/


データの保持

window.localstorageだとURL変わるからだめ

例
```
"chrome-extension://ejghhplbeieodiehlgdecchilbkkhcfm/display.html"
```
