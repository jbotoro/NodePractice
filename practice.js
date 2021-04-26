var reverseString = function (s) {
   
    for(let i = 0, j = s.length - 1; i < j; i++ , j-- ) {
        const x = s[i] 
        const y = s[j]
        s[j] = x
        s[i] = y
    }
};
/// reverse array by mutating original

let test = ["h", "e", "l", "l", "o"];

reverseString(test);

/// find max depth of binary tree where 
// * function TreeNode(val) {
//  * this.val = val;
//  * this.left = this.right = null;
//  * }
function maxDepth(root) {
    if( root === undefined  || root === null) {
        return 0;
    }

    Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

// Given a non - empty array of integers, every element appears twice except for one.Find that single one.

//     Note:

// Your algorithm should have a linear runtime complexity.Could you implement it without using extra memory ?

function singleNumber(nums) {
    return nums.reduce((prev, curr) => prev ^ curr, 0);
}

//  crazy fizzbuzz one liner
var fizzBuzz = function (n) {
    return new Array(n).fill(0).map((a, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || '' + i);
};


