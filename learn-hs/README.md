# learn-hs

## 環境構築
### GHCupのインストール
[インストール手順](https://www.haskell.org/ghcup/install/)
```
$ curl --proto '=https' --tlsv1.2 -sSf https://get-ghcup.haskell.org | sh
```
HLSはここでインストールしてもよい

### HLS(Haskell Language Server)のインストール
vscodeのhaskell拡張のためにHLSをインストールする
```
$ ghcup install hls
```
インストール後はvscode再起動するとマウスオーバーで説明が出てくる。
※ただしHLSの起動には2~3分待たないと拡張が効かない

## テストの動かし方
```
$ stack test
```
