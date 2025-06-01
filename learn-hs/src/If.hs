a :: Integer
a = 1

f :: (Eq a, Num a) => a -> String
f a = if a == 1
        then "1"
        else "?"

main :: IO ()
main = do
    if a == 1 
        then print "1" 
        else print "?"

    -- ifは値を返す
    print $ if a == 1 
        then "1"
        else "?"

    print $ f 0
    print $ f 1
   
