// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)

    let countArrowUp = 0
    let countArrowDown = 0
    let countArrowLeft = 0
    let countArrowRigth = 0
    let wordUp= '^'
    let wordDown= 'v'
    let wordLeft= '<'
    let wordRigth= '>'

    for(let i = 0; i < S.length; i++){
        let letter = S.charAt(i)
        if( letter == wordDown ){
            countArrowDown += 1
        } else if ( letter == wordLeft){
            countArrowLeft += 1
        } else if (letter == wordRigth){
            countArrowRigth += 1
        } else if ( letter == wordUp){
            countArrowUp += 1
        }
    }

    let directions = [countArrowUp, countArrowDown, countArrowLeft, countArrowRigth]
    let maximumIndex = 0
    let maximum = 0
    let lowetSum = 0
    for (let j = 0; j < 4; j++) {
        if (directions[j] > maximum) {
            maximum = directions[j]
            maximumIndex = j
        }   
        console.log(maximumIndex, 'maximumIndex');
    }

    for (let x = 0; x < 4; x++) {
        if ( maximumIndex != x) {
            lowetSum += directions[x]
            console.log(lowetSum, 'algo hace');
        }
    }
    console.log(lowetSum);
    return lowetSum
    
}
solution('v>>>vv')