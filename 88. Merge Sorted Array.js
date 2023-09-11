var merge = function (nums1, m, nums2, n) {
  let i = m - 1;// 2
  let j = n - 1;// 2
  let k = m + n - 1; //  3
        //   console.log("line9", nums1 + nums2);

  while (j >= 0) {
      if (i >= 0 && nums1[i] > nums2[j]) {
        //   console.log("line8", nums1[k--])
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }
};

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
let m = 3;
let n = 3

merge(nums1, m, nums2, n);
console.log(nums1)