{-# OPTIONS_GHC -Wno-type-defaults #-}

import Test.Hspec

fibonacci :: Integer -> Integer
fibonacci 0 = 0
fibonacci 1 = 1
fibonacci 2 = 1
fibonacci n = fibonacci (n - 1) + fibonacci (n - 2)

-- main :: IO ()
-- main = hspec $ do
--   describe "Fibonacci" $ do
--     it "1を入力すると1が返る" $ do
--       fibonacci 1 `shouldBe` 1
--     it "2を入力すると1が返る" $ do
--       fibonacci 2 `shouldBe` 1
--     it "3を入力すると2が返る" $ do
--       fibonacci 3 `shouldBe` 2
--     it "4を入力すると3が返る" $ do
--       fibonacci 4 `shouldBe` 3
--     it "5を入力すると5が返る" $ do
--       fibonacci 5 `shouldBe` 5
--     it "6を入力すると8が返る" $ do
--       fibonacci 6 `shouldBe` 8
--     it "7を入力すると13が返る" $ do
--       fibonacci 7 `shouldBe` 13

main :: IO ()
main = hspec $ do
  describe "Fibonacci" $ do
    let testCases = [(1, 1), (2, 1), (3, 2), (4, 3), (5, 5), (6, 8), (7, 13)]
    mapM_ (\(input, expected) ->
      it (show input ++ "を入力すると" ++ show expected ++ "が返る") $
        fibonacci input `shouldBe` expected
      ) testCases
