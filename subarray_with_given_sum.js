/*
Subarray with given sum

Given an unsorted array A of size N that contains only non-negative integers, find a continuous sub-array which adds to a given number S. In case of multiple subarrays, return the subarray which comes first on moving from left to right.

Example 1:
Input:
N = 5, S = 12
A[] = {1,2,3,7,5}
Output: 2 4
Explanation: The sum of elements 
from 2nd position to 4th position 
is 12.

Example 2:
Input:
N = 10, S = 15
A[] = {1,2,3,4,5,6,7,8,9,10}
Output: 1 5
Explanation: The sum of elements 
from 1st position to 5th position
is 15.

Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)

Constraints:
1 <= N <= 105
1 <= Ai <= 109
*/

function subarraySum(arr, s) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == s) return [i + 1, i + 1]
        if (i == arr.length - 1 && arr[i] == s) return [i + 1, i + 1]
        let sum = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            sum += arr[j]
            if (sum > s) break;
            if (sum == s) return [i + 1, j + 1];
        }
    }
    return [-1];
}

console.log(subarraySum([1,2,3,7,5], 12));