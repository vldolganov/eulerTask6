consol
function squareSum(num) {
    let sum = 0;
    let count = 0;

    while (num) {
        count++;
        sum += count ** 2;
        num--;
    }
    return sum;
}

function sumSquares(num) {
    let sumSquare = 0;
    let count = 0;

    while(num !=-1) {
        sumSquare+= count++;
        num--;
    }

    return sumSquare**2;
}


function delta(num){
    console.log(sumSquares(num) - squareSum(num))
}
delta(100);