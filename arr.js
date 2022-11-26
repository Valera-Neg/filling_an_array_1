const arr = N => {
  const res = [];
  for (let i = 0; i < N; i++) {
    res.push(i);
  }
  return res;
};

console.log(arr()) //> []
console.log(arr(4)) //> [0,1,2,3]
console.log(arr(5)) //> [0,1,2,3,4]