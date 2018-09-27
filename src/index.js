module.exports = function getZerosCount(number, base) {

 let bas = base;
 let answer = 0;
 let numb;
 let min = 0;
 for (let i = 2; i <= base; i++) {
     if (base % i == 0)
     {
         let deg = 0;
         while(bas % i === 0)
         {
             deg++;
             bas /= i;
         }
         answer = 0;
         numb = number;
        
         while (numb / i > 1) {
             answer += Math.floor(numb / i);
             numb /= i;
         }
         if(min == 0) {
             min = answer/deg;
         }

         else if (min > answer/deg)
         {
            min = answer/deg;
        }
     }
 }
 return Math.floor(min);
}
