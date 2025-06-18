{-# OPTIONS_GHC -Wno-type-defaults #-}

import Lib (add)
import Test.Hspec

-- 再帰版のfizzBuzzLoop
fizzBuzzLoop :: Integer -> [String]
fizzBuzzLoop x = fizzBuzzHelper 1 x
  where
    fizzBuzzHelper current limit
      | current > limit = []
      | otherwise = fizzBuzz current : fizzBuzzHelper (current + 1) limit

fizzBuzz :: Integer -> String
fizzBuzz x = 
  if mod x 15 == 0
    then "FizzBuzz"
  else if mod x 3 == 0 
    then "Fizz" 
  else if mod x 5 == 0 
    then "Buzz" 
  else
    show x

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
    it "5を入力するとBuzzが返る" $ do
      fizzBuzz 5 `shouldBe` "Buzz"
    it "15を入力するとFizzBuzzが返る" $ do
      fizzBuzz 15 `shouldBe` "FizzBuzz"

  describe "FizzBuzzLoop" $ do
    it "1を入力すると[1]が返る" $ do
      fizzBuzzLoop 1 `shouldBe` ["1"]
    it "3を入れると[1,2,Fizz]が返る" $ do
      fizzBuzzLoop 3 `shouldBe` ["1", "2", "Fizz"]
    it "15を入れても正しい値が返る" $ do
      fizzBuzzLoop 15 `shouldBe` ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]