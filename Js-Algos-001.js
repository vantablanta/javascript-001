function sumUp(n){
    let result =0;
    for (let i =1; i<=n; i++){
         result+=i;
    };
    return result;
}

//Primarity test
//* It starts from 2
/* time complexity is O(n) checks variable all 
numbers leading to n */
function isPrime(n){
    if (n<=1){
        return false //number isnt prime 
    }
    for (let i= 2; i< n; i++){
        if ( (n % i) ==0){
            false /*number isnt prime // we 
            cant do i<= n coz that would definately 
            return 0 when the 
            value of n== i ;and test would end 
            without answering any questions */
        }
    }
return true /*the number is indeed prime 
coz(i) it is either less than or equal to 1
and (ii) there was a number less than it that coul
return a remainder of 0 on division */
}
//END 
 function isPrime (n){
     if (n<=1){return false}
     if (n<=3){return true}
     for (let i= 5; i<n ;i++){
         for (let x= 1; x<i; x++)
         if ((6*x)-1){return true}
         if((6*x)+1){return true}
     }
     
}
function findPrime(){
    if (n<= 1){return false}
    for (let i = 2; i <n; i++){
        if (n % i == 0){
            return false 
        }
    return true
    }
}

function pFactorial(n){
    while (n %2 ==0){
        console.log (n)
        n= n/2;
    }
    for (let i = 3; i<n; i+=2){
        while (n % i ==0){
            console. log (n)
            n= n/i
        } 
    }
}