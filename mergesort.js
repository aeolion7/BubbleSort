function split(arr) {
  let splitIndex = Math.floor(arr.length / 2);
  let firstHalf = arr.slice(0, splitIndex);
  let secondHalf = arr.slice(splitIndex);
  return [firstHalf, secondHalf];
}

function merge(leftHalf, rightHalf) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftHalf.length && rightIndex < rightHalf.length) {
    if (leftHalf[leftIndex] < rightHalf[rightIndex]) {
      result.push(leftHalf[leftIndex++]);
    } else {
      result.push(rightHalf[rightIndex++]);
    }
  }

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

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    let splitArr = split(arr);
    return merge(mergeSort(splitArr[0]), mergeSort(splitArr[1]));
  }
}
