import Test.Hspec

add :: Num a => a -> a -> a
add x y = x + y

main :: IO ()

main = hspec $ do
  describe "Example test" $ do
    it "1 + 1 = 2" $ do
      add 1 1 `shouldBe` 2
    it "2 + 2 = 4" $ do
      (2 + 2) `shouldBe` 4
