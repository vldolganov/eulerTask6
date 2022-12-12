function squareSum () {
    let num = 100;
    let sum = 0;
    let count = 1;

    while(num){
        sum+=count**2;
        num--;
    }
    console.log(sum)
}