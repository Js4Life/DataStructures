let aa = [
  [21, 24, 34, 44, 5],
  [23, 54, 46, 48, 410],
  [34, 564, 49, 12, 415],
  [54, 58, 12, 416, 4420],
  [35, 410, 15, 420, 425],
];



function largestProduct(aa) {

  let largest = aa[0][0] * aa[0][1]
  let row1=0;
  let col1=0
  let row2=0
  let col2=1;


  
  for (let row = 0; row < aa.length; row++) {
    for (let col = 0; col < aa[row].length; col++) {
      let value = aa[row][col];

      if(col + 1 < aa[row].length) {
        let right = aa[row][col+1]
        if(value * right > largest) {
          largest = value * right;
          row1=row;
          col1=col;
          row2=row;
          col2=col-1;
        }
        largest = Math.max(largest,value*right)
      }

      if(col - 1 >=0) {
        let left = aa[row][col - 1]
        largest = Math.max(largest,value*left)
        if(value * left > largest) {
          largest = value * left;
          row1=row;
          col1=col;
          row2=row;
          col2=col-1;
        }
      }

        // leave first top row
      if(row - 1 >= 0) {
          let top = aa[row-1][col];
          largest = Math.max(largest,value*top)
          if(value * top > largest) {
            largest = value * top;
            row1=row;
            col1=col;
            row2=row-1;
            col2=col;
          }
      }
      
      if(row + 1 < aa.length) {
        let bttm = aa[row+1][col]
        largest = Math.max(largest,value*bttm)
        if(value * bttm > largest) {
          largest = value * largest;
          row1=row;
          col1=col;
          row2=row-1;
          col2=col;
        }
      }
  

    }
  }

  console.log(aa[row1][col1],'*',aa[row2][col2])
return largest

}

console.log(largestProduct(aa))
