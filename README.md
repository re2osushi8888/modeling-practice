# modeling-practice
https://yr-camp.connpass.com/ のモデリング練習で使用するリポジトリ


## buildコマンド
```
$ stack build
```

## ビルドしたファイルの実行
```
$ stack exec ${PROJECT_NAME}-exe

# 例
$ stack exec learning-haskell-exe
```

## ビルドしたファイルを~/.local/binに保存して実行
```
$ stack install
$ learning-haskell-exe
```

## テスト実行
```
$ stack test
```
