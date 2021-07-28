const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    const horizontalArray = letters.map(ls => ls);
    // console.log(horizontalArray)
    if (letters.length === 0) {
        return false;
    }
    const transposed = transpose(letters);
    const verticalJoin = transposed.map(ls => ls.join(''));
    const verticalArray = transposed
    console.log(verticalArray)
    
    for (nested of horizontalArray) {
        const reversed = nested.reverse().join('');
        if (reversed.includes(word)) return true;
    }
    for (nested of verticalArray) {
        const reversed = nested.reverse().join('');
        if (reversed.includes(word)) return true;
    }
    for (l of verticalJoin) {
        if (l.includes(word)) return true;
    }
    for (l of horizontalJoin) {    
        if (l.includes(word)) return true
    }
    return false;
}


const transpose = function (matrix) {
    // Put your solution here
    let newMatrix = [];
    if (matrix.length === 1) {
      for (let i = 0; i < matrix[0].length; i++) {
        newMatrix.push([matrix[0][i]]);
      }
      return newMatrix;
    }
    for (let i = 0; i < matrix[0].length; i++) {
      newMatrix.push([]);
      for (let j = 0; j < matrix.length; j++) {
        newMatrix[i].push(matrix[j][i]);
      }
    }
    return newMatrix;
  };

module.exports = wordSearch


// const result = wordSearch([
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//   ], 'SEINFELD')