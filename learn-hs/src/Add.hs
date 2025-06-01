add :: Num a => a -> a -> a
add x y = x + y

main :: IO ()
main = do
    print $ add 1 2 
    print $ 1 `add` 2