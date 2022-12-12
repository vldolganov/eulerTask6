let number = 100;

function squareSum (num) {
    let sum = 0;
    let count = 0;

    while(num){
        count++;
        sum+=count**2;
        num--;
    }
}

function sumSquares(num){
    let sumSquare = 0;
    let count = 0;

    while(num){
        count++;
        sum+=(count)**2;
        num--;
    }
    console.log(sum)
}