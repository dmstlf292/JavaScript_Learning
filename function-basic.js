//함수 선언-1
function doSomething(add){
    console.log(add);
    const result = add(1,2);
    console.log(result);
}

//함수 선언-2
function add(a,b){
    const sum = a+b;
    return sum;
}



//함수 호출-1
//doSomething(add);//실행하면 add라는 함수 자체가 호출되어 나타난다 (add()이렇게가 아니고 @@) 
//함수 호출-2
// const result = add(1,2);
// console.log(result);


const addFun = add;
console.log(add);
addFun(1,2); 