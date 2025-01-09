function findGCD(a,b){
    while(b!==0){
        temp=b;
        b=a%b;
        a=temp;
    }
    return a;
}
console.log(findGCD(60,120))