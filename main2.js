//함수도 object 에 포함된다! 함수의 reference 가 메모리에 만들어진다
function add (num1, num2){
     return num1+num2;
 }



function devide(num1, num2){
    return num1/num2;
}


function surprise(operator){//실행
    const result=operator(2,3);//할당 === //add(2,3)이랑 동일한 효과  & devide(2,3)이랑 동일한 효과 
    console.log(result);
}

surprise(devide);


 //함수의 이름을 다른 변수에 할당해도 레퍼런스는 같다. 
//  const doSomething = add;
//  const result = doSomething(2,3);
//  console.log(result);//5
//  const result2 = doSomething(2,3);
//  console.log(result2);//5
