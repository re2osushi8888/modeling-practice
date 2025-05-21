# learning-haskell

## setup
devcontainerを実行後、下記のコマンドを実行
```
$ stack setup
```

## 対話的実行環境
REPL(対話的な実行環境)の起動方法
```
$ stack ghci

# 抜けるには下記のコマンド
ghci> :quit
```

## ファイルの実行
```
$ stack runghc hello.hs
```

## REPLにスクリプトを読み込む
```
$ stack ghci

ghci> :load number.hs
ghci> x100 5
500
```
