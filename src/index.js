module.exports = function getZerosCount(number, base) {

// let bas = base;
// let answer = 0;
// let numb;
// let min = number;
// for (let i = 2; i <= base; i++) {
//     if (base % i == 0)
//     {
//         let div = 0;
//         while(bas % i === 0)
//         {
//             div++;
//             bas /= i;
//         }
//         answer = 0;
//         numb = number;
//        
//         while (numb / i > 1) {
//             answer += Math.floor(numb / i);
//             numb /= i;
//         }
//
//         if (min > answer/div)
//         {
//            min = answer/div;
//        }
//     }
// }
// return Math.floor(min);

    let bas = base;
    let arr = [];
    let numb = number;
    let ans = 0;
    let isPrime;
    for (let i = 2; i <= bas; i++) {
        if (bas % i == 0) {

            for (let j = 2; j <= i / 2; j++) {
                if (i % j == 0) {
                    isPrime = false;
                } else {
                    isPrime = true;
                }
            }

            if (isPrime == true) {
                 bas /= i
                arr.push(i);
            }
        }
    }
//    var div;
//     for (let i = 2; i <= bas; i++) {
//         var div = 0;
//        while ((bas % i) === 0) {
//            div++;
//            arr.push(i);
//            bas /= i;
//        }
//    }
    let min = numb;
    for (let k = 0, leng = arr.length; k < leng; k++) {
        while (numb / arr[k] > 0) {
            numb /= arr[k];
            ans = Math.floor(ans);
            ans += numb;
        }
        if (min > ans) {
            min = ans;
        }

    }
    return Math.floor(min);

}
