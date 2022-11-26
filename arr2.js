const arr = N => { 
  if(!N) {
    return [];
  }
 return Array.from(Array(N).keys());
};


console.log(arr()) //> []
console.log(arr(4)) //> [0,1,2,3]
console.log(arr(5)) //> [0,1,2,3,4]