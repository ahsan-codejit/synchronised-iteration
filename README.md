# synchronised-iteration
Array iterator in synchronised way. It takes array,  promise function to run for each item of the array and limit to run the promise function to run at a time, default limit is 1. It returns promise of all promisses of given promise functions.

## Example:
```
const si = require('synchronised-iteration');
function show(n)
si.iterate([1,2], function(n){
  return new Promise((resolve, reject)=>{
    resolve(n)
  })
})
.then(res => {
  console.log(res) // [show(1), show(2)]
  res[0].then(val=>{
    console.log(val); // 1
  });
  res[1].then(val=>{
    console.log(val); // 2
  });
```
