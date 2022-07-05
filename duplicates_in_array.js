/*
Find duplicates in an array

Given an array a[] of size N which contains elements from 0 to N-1, you need to find all the elements occurring more than once in the given array.

Example 1:

Input:
N = 4
a[] = {0,3,1,2}
Output: -1
Explanation: N=4 and all elements from 0
to (N-1 = 3) are present in the given
array. Therefore output is -1.

Example 2:

Input:
N = 5
a[] = {2,3,1,2,3}
Output: 2 3 
Explanation: 2 and 3 occur more than once
in the given array.

Expected Time Complexity: O(n).
Expected Auxiliary Space: O(n).
Note : The extra space is only for the array to be returned.
Try and perform all operation withing the provided array. 

Constraints:
1 <= N <= 105
0 <= A[i] <= N-1, for each valid i
*/


function duplicates(a, n) {
    a = a.sort((a, b) => a - b)
    const op = [];
    for (let i = 0; i < n; i++) {
        if (op.indexOf(a[i]) == -1 && a.indexOf(a[i], i + 1) != -1) op.push(a[i])
    }
    if (op.length) {
        let s = '';
        for (const data of op) {
            s += data + " ";
        }
        return s;
    } else return -1;
}

console.log(duplicates([2,3,1,2,3], 5));