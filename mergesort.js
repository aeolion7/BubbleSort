// split an array down the middle into two halves
function split(arr) {
  let splitIndex = Math.floor(arr.length / 2);
  let firstHalf = arr.slice(0, splitIndex);
  let secondHalf = arr.slice(splitIndex);
  return [firstHalf, secondHalf];
}

// merge two sorted arrays into one sorted array
function merge(leftHalf, rightHalf) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // push the lesser of the first element of the left half and
  // the first element of the right half into a new array
  // as long as both arrays still contain something
  while (leftIndex < leftHalf.length && rightIndex < rightHalf.length) {
    if (leftHalf[leftIndex] < rightHalf[rightIndex]) {
      result.push(leftHalf[leftIndex++]);
    } else {
      result.push(rightHalf[rightIndex++]);
    }
  }

  // when one array is empty, concatenate the remainder of the other
  // array directly onto the result
  if (leftIndex === leftHalf.length) {
    while (rightIndex < rightHalf.length) {
      result.push(rightHalf[rightIndex++]);
    }
  } else {
    while (leftIndex < leftHalf.length) {
      result.push(leftHalf[leftIndex++]);
    }
  }

  return result;
}

// split arrays until each element is in its own array (aka sorted)
// then merge them by sorting from the first element of each
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    let splitArr = split(arr);
    return merge(mergeSort(splitArr[0]), mergeSort(splitArr[1]));
  }
}
