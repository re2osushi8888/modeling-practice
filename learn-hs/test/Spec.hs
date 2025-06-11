{-# OPTIONS_GHC -Wno-type-defaults #-}

import Lib (add)
import Test.Hspec

fizzBuzz :: Integer -> String
fizzBuzz x = if mod x 3 == 0 then "Fizz" else show x

main :: IO ()
main = hspec $ do
  describe "Example test" $ do
    it "1 + 1 = 2" $ do
      add 1 1 `shouldBe` 2
    it "2 + 2 = 4" $ do
      (2 + 2) `shouldBe` 4
  describe "Fizz Buzz" $ do
    it "1を入力すると1が返る" $ do
      fizzBuzz 1 `shouldBe` "1"
    it "2を入力すると2が返る" $ do
      fizzBuzz 2 `shouldBe` "2"
    it "3を入力するとfizzが返る" $ do
      fizzBuzz 3 `shouldBe` "Fizz"
    it "6を入力するとfizzが返る" $ do
      fizzBuzz 6 `shouldBe` "Fizz"
      