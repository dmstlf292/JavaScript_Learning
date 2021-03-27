//1. String concatenation

console.log('my' + ' cat');
console.log('1'+2);
console.log(`string literals: 1 +2 =${1+2}`);
console.log("selene\s \n book");

//6. Logical operators : 
const value1 = true;
const value2 = 4<2;

// || (or), finds the first truthy value
console.log(`or : ${value1 || value2 || check()}`);//expression 이나 함수를 호출하는것은 제일 마지막에 배치 


// && (and), finds the first falsy value
console.log(`and : ${value1 && value2 && check()}`);
//often used to compress long if-statement
//nullableObject && nullableObject.something
// if(nullableObject !=null){
//     nullableObject.something;
// }

//! (not)
console.log(!value1);

function check(){
    for(let i =0; i<10; i++){
        //wasting time
        console.log('jaja');
    }
    return true;
}


//7.Eqality
const stringFive ='5';
const numberFive =5;
// == loose equality, with type conversion
console.log(stringFive==numberFive);
console.log(stringFive!=numberFive);

//=== strict equality, no type conversion(웬만하면 이렇게 === 쓰기)
console.log(stringFive===numberFive);
console.log(stringFive!==numberFive);

//object equality by reference
const selene1 ={name : 'selene'};
const selene2 ={name : 'selene'};
const selene3 = selene1;
console.log(selene1 ==selene2);//f
console.log(selene1===selene2);//f
console.log(selene1 === selene3);//t


//equality - puzzler
console.log(0==false);//t
console.log(0===false);//f
console.log(''==false);//t
console.log(''===false);//f
console.log(null==undefined);//t
console.log(null===undefined);//f


//Conditional operators : if
//if, else if, else

const name = 'selene';
if(name === 'selene'){
    console.log('bienvenido, selene');
} else if (name==='coder'){
    console.log('super cool');
} else{
    console.log('unknown');

}

//if를 조금 더 간단하게 쓰는 방법
//Ternary operator : ?
//condition ? value1: value2;
console.log(name==='selene' ? 'yes' : 'no');

//반복문  Loops
//while loop, while the condition is truthy, body conde is executed.
let i=3;
while(i>3){
    console.log(`while : ${i}`);
    i--;
}

//do while loop, body code is excuted first, then check the condition //블럭을 먼저 실행하고 조건을 보고 후에 판단함 
do{
    console.log(`do while:${i}`);
    i--;
}while(i>0);

