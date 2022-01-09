let characters = {
  A: `   A    
  A A   
 A   A  
AAAAAAA 
A     A 
A     A `,
  B: `BBBBBB  
B     B 
BBBBBB  
B     B 
B     B 
BBBBBB  `,
  C: ` CCCCC  
C     C 
C       
C       
C     C 
 CCCCC  `,
  D: `DDDDDD  
D     D 
D     D 
D     D 
D     D 
DDDDDD  `,
  E: `EEEEEEE 
E       
EEEEE   
E       
E       
EEEEEEE `,
  F: `FFFFFFF 
F       
FFFFF   
F       
F       
F       `,
  G: ` GGGGG  
G     G 
G       
G  GGGG 
G     G 
 GGGGG  `,
  H: `H     H 
H     H 
HHHHHHH 
H     H 
H     H 
H     H `,
  I: `IIIIIII 
   I    
   I    
   I    
   I    
IIIIIII `,
  J: `      J 
      J 
      J 
J     J 
J     J 
 JJJJJ  `,
  K: `K    K  
K   K   
KKKK    
K   K   
K    K  
K     K `,
  L: `L       
L       
L       
L       
L       
LLLLLLL `,
  M: `M     M 
MM   MM 
M M M M 
M  M  M 
M     M 
M     M `,
  N: `N     N 
NN    N 
N N   N 
N  N  N 
N   N N 
N    NN `,
  O: ` OOOOO  
O     O 
O     O 
O     O 
O     O 
 OOOOO  `,
  P: `PPPPPP  
P     P 
PPPPPP  
P       
P       
P       `,
  Q: ` QQQQQ  
Q     Q 
Q     Q 
Q   Q Q 
Q    Q  
 QQQQ Q `,
  R: `RRRRRR  
R     R 
RRRRRR  
R   R   
R    R  
R     R `,
  S: ` SSSSS  
S       
 SSSSS  
      S 
S     S 
 SSSSS  `,
  T: `TTTTTTT 
   T    
   T    
   T    
   T    
   T    `,
  U: `U     U 
U     U 
U     U 
U     U 
U     U 
 UUUUU  `,
  V: `V     V 
V     V 
V     V 
 V   V  
  V V   
   V    `,
  W: `W     W 
W     W 
W     W 
W  W  W 
W  W  W 
 WW WW  `,
  X: `X     X 
 X   X  
  XXX   
 X   X  
X     X 
X     X `,
  Y: `Y     Y 
 Y   Y  
  YYY   
   Y    
   Y    
   Y    `,
  Z: `ZZZZZZZ 
     Z  
    Z   
   Z    
  Z     
ZZZZZZZ `,
  space: `    
    
    
    
    
    `,
  period: `   
    
    
    
  ..
  ..`,
  comma: `    
    
    
    
  ,,
  ,,`,
  exclaim: `  !! 
  !! 
  !! 
  !! 
     
  !! `,
  quote: `  '' 
  '' 
     
     
     
     `,
  
};

const biggify = (word) => {
  let letters = word.split('');
  let results = ['','','','','',''];

  for(let i = 0; i < letters.length; i++) {
    let letter = build_letter_pixels(letters[i]);
    for(let j = 0; j < letter.length; j++) {
      results[j] += letter[j];
    }
  }

  return results.join('\n');
};

const build_letter_pixels = (letter) => {
  letter = letter.toUpperCase(); // TODO: Implement lowercase letters? Nah.
  if(letter === '!') letter = 'exclaim';
  if(letter === '.') letter = 'period';
  if(letter === ' ') letter = 'space';
  if(letter === ',') letter = 'comma';
  if(letter === '\'') letter = 'quote';
  
  let pixel_array = characters[letter].split('\n');
  return pixel_array;
};

module.exports = biggify;
