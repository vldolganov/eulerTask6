let number = 100;

function squareSum(num) {
    let sum = 0;
    let count = 0;

    while (num) {
        count++;
        sum += count ** 2;
        num--;
    }
}

function sumSquares(num) {
    let sumSquare = 0;
    let count = 0;

    while(num !=-1) {
        sumSquare+= count++;
        num--;
    }

    return sumSquare**2
}

sumSquares(10);
