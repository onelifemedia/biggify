let characters = {
  A: `   A    
  A A   
 A   A  
AAAAAAA 
A     A 
A     A `,
  B: ``,
  C: ` CCCCC  
C     C 
C       
C       
C     C 
 CCCCC  `,
  D: ``,
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
  G: ``,
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
  J: ``,
  K: ``,
  L: ``,
  M: ``,
  N: ``,
  O: ``,
  P: ``,
  Q: ``,
  R: ``,
  S: ` SSSSS  
S       
 SSSSS  
      S 
S     S 
 SSSSS  `,
  T: ``,
  U: ``,
  V: ``,
  W: ``,
  X: ``,
  Y: ``,
  Z: ``,
  space: `    
    
    
    
    
    `,
  period: `   
    
    
    
  ..
  ..`,
  exclaim: ` !!
  !!
  !!
  !!
    
  !!`,
  
}



let word = 'IS A FACE! SHHH...';

const biggify = (word) => {
  let letters = word.split('');
  let results = ['','','','','',''];

  for(let i = 0; i < letters.length; i++) {
    let letter = build_letter_pixels(letters[i]);
    for(let j = 0; j < letter.length; j++) {
      results[j] += letter[j];
    }
  }
  print_results(results);
}

module.exports = biggify;

const build_letter_pixels = (letter) => {
  if(letter === '!') letter = 'exclaim';
  if(letter === '.') letter = 'period';
  if(letter === ' ') letter = 'space';
  
  let pixel_array = characters[letter].split('\n');
  return pixel_array;
}

const print_results = (results) => {
  console.log(results.join('\n'));
}
biggify(word);






 
