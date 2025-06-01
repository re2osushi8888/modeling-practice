add :: Num a => a -> a -> a
add x y = x + y

main :: IO ()
main = do
    print $ add 1 2 
    print $ 1 `add` 2
    print $ 1 + 2
    print $ (+) 1 2
    print $ 5 + 2
    print $ 5 - 2
    print $ 5 * 2
    print $ 5 / 2
    print $ div 5 2 --割った時の商の数
    print $ mod 5 2 --割った時の剰余（あまりの数））
