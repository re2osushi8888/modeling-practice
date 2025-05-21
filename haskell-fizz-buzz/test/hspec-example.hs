-- test/hspec-example.hs
module Main where

import Test.Hspec
import Lib (add)  -- Lib.hs に定義した関数をテストする場合

main :: IO ()
main = hspec $ do
  describe "add" $ do
    it "adds two numbers correctly" $ do
      add 2 3 `shouldBe` 5
    it "returns 0 when both arguments are 0" $ do
      add 0 0 `shouldBe` 0
