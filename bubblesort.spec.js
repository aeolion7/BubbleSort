describe('Bubble Sort', function () {
  const array1 = [13, 4, 89, 26, 57, 10, 31];
  const array2 = [2, 6, 1, 15, 4, 12, 9];

  beforeAll(function () {
    spyOn(swap, 'call').and.callThrough();
  });

  it('sorts an array using bubbleSort', function () {
    expect(bubbleSort(array1)).toEqual([4, 10, 13, 26, 31, 57, 89]);
    expect(bubbleSort(array2)).toEqual([1, 2, 4, 6, 9, 12, 15]);
  });

  it('handles an empty array', function () {
    expect(bubbleSort([])).toEqual([]);
  });
});
