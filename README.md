# Tessen - 鉄扇 - 

Sensu monitor for chrome extension.

SensuのAPIを叩いてChromeのBrowserActionでバッジ表示するChrome拡張を作ってみました。

![screenshot](https://raw.github.com/nobuhito/tessen/master/screenshot.png)

## usage

  1. Download zip file.
  2. Open tessen/tessen.js in zip.
  3. Edit sensuApiHost, sensuAipPort, uchiwaHost, uchiwaPort, datacenter value.
  4. Rezip.
  5. Install for chrome.

  1. [GitHub](https://github.com/nobuhito/Tessen/releases)から[Zipファイル](https://github.com/nobuhito/Tessen/releases/download/0.0.1/tessen.zip)をダウンロード
  2. Zipファイル内の `tessen/tessen.js` をエディタで開く
  3. 「SensuApiHost, SensuApiPort, uchiwaHost, uchiwaPort, datacenter」の値を環境に合わせて変更
    - sensuApiHost: SensuのAPIサーバー(require)
    - snesuApiPort: SensuのAPIポート(require)
    - uchiwaHost: Uchiwaを利用していればUchiwaのサーバー
    - uchiwaPort: Uchiwaを利用していればUchiwaのポート
    - datacenter: Uchiwaを利用していればUchiwaで表示されるデータセンター名
  4. 再度Zipファイルに圧縮
  5. Chromeにインストール(要デベロッパーモード)
