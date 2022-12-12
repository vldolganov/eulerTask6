function squareSum () {
    let num = 10;
    let sum = 0;
    let count = 0;

    while(num){
        count++;
        sum+=count**2;
        num--;
    }
    console.log(sum);
}

function summ