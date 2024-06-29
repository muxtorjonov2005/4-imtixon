// 1-masala
// function reverseArray(str){
//     return str.split('').reverse()
// }
// console.log(reverseArray('34567'));

// 2-masala
// == bu belgi qiymatni ozini tegligin tekshiradi
// ===bu belgi ham qiymat ham tip jihatdan tekshiradi

// 3-masala
// function array(num){
//     let res = []
//     for (let i  = 1; i < num; i++){
//     return res.push(i)
//     }
//     return res
// }
// console.log(array(10));

// 4-masala
// function toqVaJuftgaAjratish(arr){
//     let toq = []
//     let juft = []
//     let sum = 0
//     for(let i = 0; i < arr.length; i++){
//         if(i % 2 == 0){
//            juft.push(sum += i)
//         } else{
//            toq.push(sum += i)
//         }
//     }
//     return 
// }
// console.log(toqVaJuftgaAjratish([4,5,6,7,]));

// 5-masala
// function delet(str){
//     return str.replaceAll('!')
// }
// console.log(delet('!hello!'));

// 6-masala
// function ikkitMassivYigindisi(arr1, arr2){
//     arr1.push(arr2)
    // for(let i = 1; i < res.length; i++){
    //     return sum += res[i]
    // }
    // return sum
//     return res
// }
// console.log(ikkitMassivYigindisi([4, 5], [8, 5]));

// 7-masala
// function deletFirstAndLast(str){
//     return str.slice(1,-1)
// }
// console.log(deletFirstAndLast('hello'));

// 8-masala
// function teskariMassiv(arr){
//     return arr.reverse()
// }
// console.log(teskariMassiv([1, 2, 3, 4, 5]));

// 9-masala
// function nolniOchirish(str){
//     if(str[str.length-1] === '0'){
//         str.slice(-1)
//     }
// }
// console.log('123540');

// 10-masala
function minArray(arr){
    let min = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < arr[min]){
            return min = arr[i]**4
        }
    }
    return min
}
console.log(minArray([2, 5, 8, 9]));