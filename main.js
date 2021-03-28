//number, string, boolean, null, undefined (데이터 단위가 작아서 메모리에 그대로 들어온다)
//number, string, boolean, null, undefined, symbol 타입을 제외한 모든것들은 object라고 한다.
//object : 최소 한두가지 데이터들을 한군데에 모아둔것을 말한다.(배열, 리스트...함수...등)
let number = 2;
let number2 = number;
console.log(number);
console.log(number2);

number2 = 3;
console.log(number);//2
console.log(number2);//3



//object(오브젝트는 할당이 어딘가에 되어있고, 가르키고 있는 집 주소같은게 있는데 이걸 reference라고 한다, 이 레퍼런스가 메모리에 저장되어있음)
//가르키고 있는 데이터를 잘 봐야한다. 
// let obj = { // key & value로 구성
//     name:'selene',
//     age:5
// };

// console.log(obj.name);

// let obj2 =obj;
// console.log(obj2.name);

// obj.name = 'james';
// console.log('---------');
// console.log(obj.name);//james
// console.log(obj2.name);//james

//object가 할당된 referece 집주소는 잠겨있으나(집주소 변경 불가능하지만) obj가 가리키고 있는 이름은 변경이 가능하다 
//reference는 다른 오브젝트로 변경 불가능해@
const obj = {
    name:'selene',
    age:5
};

obj.name='jaime';
console.log(obj.name);//jaime 출력