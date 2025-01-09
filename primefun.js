function isPrime(i){
    if(i<=1){
        return false
    }
    for(x=2;x<i;x++){
        if(i%x==0){
            return false
        }
    }
    return true
}
console.log(isPrime(1))
console.log(isPrime(3))
