// let arr = [1, 4, 5, 7, 9, 10, 14, 22, 55, 57, 61, 63, 66, 69, 82, 93];
//
// // console.log(arr.length);
// // console.log(arr[0]);
//
// function binarySearch(arr, searchNumber, left, right) {
//     let center = Math.floor((left + right) / 2);
//     if (center === left || center === right) {
//         return false;
//     }else if (searchNumber === arr[center]) {
//         console.log(center);
//         return center;
//     } else if (searchNumber > arr[center]) {
//         console.log(center);
//         left = center;
//         return binarySearch(arr, searchNumber, left, right);
//     } else if (searchNumber < arr[center]) {
//         console.log(center);
//         right = center;
//         return binarySearch(arr, searchNumber, left, right);
//     }
// }
//
// console.log(binarySearch(arr, 666, -1, arr.length));
//
// // let x = binarySearch(arr, 66, -1, arr.length);
//
// // console.log(x);
//
// let twoSum = function(nums, target) {
//     for (let x = 0, i = 0; i <= nums.length; i++){
//         if(x === i) continue;
//         // if(i === nums.length){
//         //     i = 0;
//         //     x += 1;
//         // }
//         let w = target - nums[x];
//         console.log(w, x, i)
//
//         if(w === nums[i]) {
//             return [x, i];
//         } else if (i === nums.length){
//             i = 0;
//             x += 1;
//         }
//     }
// };
//
// console.log(twoSum([2, 7, 11, 15], 9));


// var a = {x: 1, y: 2};
// var b = a;
// b.x = 10;
// console.log(a.x)
//
// var c = {};
// var d = {};
// console.log(c === d);

// for (let i = 0; i<10; i++) {
//     setTimeout(function (){
//         alert(i);
//     }, 100);
// }
