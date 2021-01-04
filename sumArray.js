arr1 = [1, 2, 3]
arr2 = [4, 5, 6]
arr3 = [7, 8, 9]

function addArrayNumber(arr) {
  var x = arr.join("+")
  var sum = 0;
  for (var i in arr) {
    sum+= arr[i];
  } 
  console.log(x + " = " + arr[i])
}

addArrayNumber(arr1)
addArrayNumber(arr2)
addArrayNumber(arr3)

function sumArray (arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i ++) {
    sum += arr[i]
  }
  console.log(sum)
}

sumArray(arr1)
sumArray(arr2)
sumArray(arr3)