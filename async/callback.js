'use strict';

//JavaScript is synchronous (동기적) => 정해진 코드 순서에 맞추어 순서대로 코드 실행되는것 
// Execute the code block by orger after hoisting (hoisting 된 이후부터 나타나는 코드가 순서에 맞춰 하나씩 동기적 실행)
// hoisting ? var변수 또는 function declaration 함수 선언들이 자동으로 제일 위로 올라가는것  

//현재 비동기적으로 출력됨 -> 1,3,2 라고 출력된다. 
console.log('1');//동기
setTimeout(()=>//화살표 함수, {} 필요없다 
    console.log('2'), 1000);//비동기
console.log('3');//동기

// callback 도 2가지의 경우로 나뉜다.
// Synchronous callback (동기적)
function printImmediately(print){
    print();
}

printImmediately(()=>console.log('hello')); // 동기, 1->3->hello->2 출력



// Asynchronous callback (비동기적)
function printWithDelay (print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(()=>console.log('async callback'),2000);//비동기 



//Callback Hell Example
//1. 가독성 떨어진다. 
//2. 유지보수 어렵다.
//3. 디버깅 어렵다
class UserStorage {
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id==='selene' && password === '1234') ||
                (id === 'coder' && password === '1234')
            ) {
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if(user === 'selene'){
                onSuccess({name:'selene' , role:'admin'});
            }else{
                onError(new Error('no access'));
            }
        },1000);
    }
}

const userStorage = new UserStorage();
const id = prompt ('enter your id');
const password = prompt ('enter your password');
//성공해서 사용자를 받아왔을때 처리 코드 블럭
userStorage.loginUser(
    id,
    password, 
    user=>{
        userStorage.getRoles(
            user, 
            userWithRole=>{
                alert(`hello ${userWithRole.name}, you hava a ${userWithRole.role} role`);
            }, 
            error=>{
                console.log(error);
            }
        );
    }, 
    error => {
        console.log(error)
    }
);

