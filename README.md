# biggify

## What is this?
`biggify` is one function. It takes a string, and returns a larger version of the string.

## Why?
Honestly, there are sometimes that my code needs to scream at me.

## Can I see an example?
Sure.

```
const biggify = require('biggify');

console.log(biggify('The quick brown fox.'));
```

Returns:

```
TTTTTTT H     H EEEEEEE      QQQQQ  U     U IIIIIII  CCCCC  K    K      BBBBBB  RRRRRR   OOOOO  W     W N     N     FFFFFFF  OOOOO  X     X    
   T    H     H E           Q     Q U     U    I    C     C K   K       B     B R     R O     O W     W NN    N     F       O     O  X   X      
   T    HHHHHHH EEEEE       Q     Q U     U    I    C       KKKK        BBBBBB  RRRRRR  O     O W     W N N   N     FFFFF   O     O   XXX       
   T    H     H E           Q   Q Q U     U    I    C       K   K       B     B R   R   O     O W  W  W N  N  N     F       O     O  X   X      
   T    H     H E           Q    Q  U     U    I    C     C K    K      B     B R    R  O     O W  W  W N   N N     F       O     O X     X   ..
   T    H     H EEEEEEE      QQQQ Q  UUUUU  IIIIIII  CCCCC  K     K     BBBBBB  R     R  OOOOO   WW WW  N    NN     F        OOOOO  X     X   ..
```

## Why do lower case print upper case?
The name of the package is literally biggify.

## Do you plan on handling multi-line?
Sure. If enough people ask for it.
