import Test.Hspec

main :: IO ()
main = hspec $ do
  describe "Example test" $ do
    it "should pass" $ do
      (1 + 1) `shouldBe` 2
