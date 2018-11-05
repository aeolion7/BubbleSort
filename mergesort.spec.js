describe('Split Array function', function () {
  it('is able to split an array into two halves', function () {
    // your code here
    expect(split([1, 2])).toEqual([[1], [2]]);
    expect(split([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
  });
});

describe('Merge function', function () {
  it('is able to merge two sorted arrays into one sorted array', function () {
    // test the merging algorithm

    expect(merge([1, 3, 10], [7, 8, 9])).toEqual([1, 3, 7, 8, 9, 10]);
  });
});

describe('mergeSort', function () {
  const array1 = [60, 42, 18, 93, 56];
  const array2 = [45, 7, 38, 65, 87];

  it('sorts an array using merge sort', function () {
    expect(mergeSort(array1)).toEqual([18, 42, 56, 60, 93]);
    expect(mergeSort(array2)).toEqual([7, 38, 45, 65, 87]);
  });
});
