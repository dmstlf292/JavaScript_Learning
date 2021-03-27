//Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value


//1. Function declaration
// function name (param1, param2, param3){body...return;}
// one function === one thing
// naming : doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS // object의 일종이다...?


// 2. Parameters (매개변수)
// premitive parameters : 메모리에 passed by value 전달
// object parameters : 메모리에 passed by reference 전달
function changeName (obj){
    obj.name='coder';
}
const selene = {name : 'selene'};
changeName(selene);
console.log(selene);//출력 : {name: "coder"}


//3. Default parameters (added in ES6)
function showMessage(message, from='unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('hi');

//4. (...) Rest parameters(added in ES6) ----> 배열형태로 전달 
function printAll(...args){
    for(let i=0; i<args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args){
        console.log(arg);
    }

}
printAll('dream', 'coding', 'selene');


//5. Local Scope
//밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다. 
let globalMessage = 'global';//global variable
function printMessage(){//블럭안 = 함수, if 구문 안에 변수 선언된것 ? 지역변수 
    let message = 'hello';//local variable
    console.log(message);
    console.log(globalMessage);

    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
    //console.log(childMessage); 에러발생
}
printMessage();
//console.log(message); 에러발생




//6. Return a value
function sum(a,b){
    return a+b;
}
const result = sum(1,2) //3
console.log(`sum : ${sum(1,2)}`);


//7. Real Tip@
// Early return, early exit
// bad coding
function upgradeUser(user){
    if(user.point >10){
        //long upgrade logic...
    }
}

// good codingn(조건이 맞지 않는 경우, 값이 undefinded 된 경우, 값이 -1인경우--> 빨리 return 하고 필요한 로직은 뒤에 작성하기)
function upgradeUser(user){
    if(user.point<=10){
        return;
    }
    //long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

//1. Function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.

const print = function(){
    //anonymous function
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));


//2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer == 'love you'){
        printYes();
    }else{
        printNo();
    }
}
//anonymous function
const printYes = function(){
    console.log('yes!');
};

//named function
//better debugging in debugger's stack traces
//recursions (함수 안에서 함수 자신 스스로 부르는 것)
const printNo= function print(){
    console.log('no!');
    //print(); //call stack 이 꽉찬다
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


//Arrow function
//always anonymous
const simplePrint = function(){
    console.log('simplePrint!');
}

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a+b;
const simpleMultiply = (a,b) =>{
    //do sth more
    return a*b;
};

//IIFE : Immediately Invoked Function Expression
(function hello(){
    console.log('IIFE');
})();// 함수 선언하자마자 바로 함수 호출하는 방법이다. 