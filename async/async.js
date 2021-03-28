//async & await
//clear style of using promise :)

//1. async 키워드를 함수 앞에 쓰면 코드 블럭이 자동으로 promise 로 바뀐다. 
async function fetchUser(){
    //do network request in 10 secs....
    //return 'selene';
    // return new Promise((resolve, reject) => {
    //     resolve('selene');
    // });
    return 'selene';
}

const user = fetchUser();
user.then(console.log);
console.log(user);


//2. await 
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
    await delay(2000);
    return '🍑';
}

async function getBanana(){
    await delay(1000);
    return '🥝';
}

//1초만에 동시에 병렬적으로 실행된다 (2초 걸릴걸 -> 1초로 줄임)
async function pickFruits(){
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);





//동시다발적으로 수행이 가능한 경우(즉, 서로의 코드가 영향을 받지 않는 경우 ) 병렬적으로 기능을 수행할 수 있을경우 
//아래와 같이 간단하게 코드 작성 가능하다 
//3. useful Promise APIs
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));//배열을 스트링으로 묶을 수 있는것 :  join @@
}
pickAllFruits().then(console.log);

function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);