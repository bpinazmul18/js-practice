arr1 = [1, 2, 3]
arr2 = [4, 5, 6]
arr3 = [7, 8, 9]

function addArrayNumber(arr) {
  let x = arr.join("+")
  let sum = 0;
  for (let i in arr) {
    sum+= arr[i];
  } 
  console.log(x + " = " + arr[i])
}

addArrayNumber(arr1)
addArrayNumber(arr2)
addArrayNumber(arr3)

function sumArray (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i ++) {
    sum += arr[i]
  }
  console.log(sum)
}

sumArray(arr1)
sumArray(arr2)
sumArray(arr3)