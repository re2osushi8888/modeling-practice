module Lib
  ( someFunc,
    add,
  )
where

someFunc :: IO ()
someFunc = putStrLn "someFunc"

add :: (Num a) => a -> a -> a
add x y = x + y

