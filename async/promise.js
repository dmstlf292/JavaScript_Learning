'use strict';

//Promise is a JavaScript object for asynchronous operation
//비동기적 수행시 callback 함수 대신 유용하게 쓸 수 있는 object 
//State : pending -> fulfilled or rejected
//Producer vs Consumer



//1. Producer
//promise는 class이다. new 키워드를 통해 obj 만들 수 있다. 
//promise를 만드는 순간 execute 라는 callback 함수 (여기서는 resolve)가 바로 실행된다. 
// when new Promise is created, the executor runs automatically....
const promise = new Promise((resolve, reject)=>{
    //doing some heavy work(network, read files) => 비동기적으로 처리해야한다. 
    //promise 안에 네트워크와 통신하는 코드를 작성했다면 promise를 만드는 순간 네트워크 통신 수행한다. 
    //point : network통신을 사용자가 요청하는 경우에만 실행해야 한다면 이렇게 코드짜는건 비효율적 
    console.log('doing sth......');//promise 만들자 마자 바로 코드 수행함
    setTimeout(()=>{
        //resolve('selene');// 2초 후에 resolve 라는 callback 함수 호출하기 
        reject(new Error('no network'));
    },2000);
});

//2. Consumers : then, catch, finally
promise.
    then((value)=>{// promise가 정상적으로 잘 수행이 되어서 resolve 콜백함수 통해서 2초후에 파라미터 값 받는다
        console.log(value);
    })
    .catch(error =>{
        console.log(error);
    })
    .finally(()=> {console.log('finally');

    });//성공 실패 여부 상관없이 무조건 마지막에 호출되는 것

    //3. Promise chaining (연결하기)
    const fetchNumber = new Promise((resolve, reject)=>{
        setTimeout(() => resolve(1), 1000);//1초 뒤에 숫자 1 전달한다 
    });
    //then : 값을 바로 전달 가능하며 promise 전달도 가능하다 
    fetchNumber
    .then(num => num*2)//2
    .then(num => num*3)//6
    .then(num=>{//6
       return new Promise((resolve, reject) => {//6
           setTimeout(() => resolve(num-1), 1000);//5
       });
    })
    .then(num => console.log(num));//2초 걸리며 5출력한다 



    //4. Error Handling
    const getHen = ()=>
        new Promise((resolve, reject) => {
            setTimeout(()=> resolve('🐓'), 1000);
        });
    
    
    const getEgg = hen =>
        new Promise((resolve, reject) => {
            setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)),1000);
        });
    
    const cook = egg =>
        new Promise((resolve, reject) => {
            setTimeout(() => resolve(`${egg} => 🍳`),1000);
        });

    getHen()//3초 후에 : 🐓 => 🥚 => 🍳
        .then(getEgg)
        .catch(error =>{
            return '🍋';
        })//🍋 => 🍳
        .then(cook)
        .then(console.log)
        .catch(console.log);