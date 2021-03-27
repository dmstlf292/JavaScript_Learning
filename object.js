//Objects
// one of the JavaScript's data types.
// a collection of related data and /or functionality.
// Nearly all objects in JavaScript are instances of Object



//변수 하나당 값을 하나만 담을 수 있다. 
//오브젝트를 만드는 방법 2가지
//object = {key : value}; 의 집합체이다. 
//1. Literals and properties
const obj1={};//1. 퀄리 사용하기 ('object literal' syntax)
const obj2 = new Object();//new 연산자 이용 ('object constructor' syntax)



function print(person){
    console.log(person.name);
    console.log(person.age);
}
//key : name & value : selene....
const selene = {name :'selene', age: 4}; // 클래스가 없어도 괄호로 바로 오브젝트 생성가능함
print(selene);

//이미 object를 정의 한 이후에 뒤늦게 속성 추가도 가능하다 -> 유지보수 어렵다
selene.hasJob = true;
console.log(selene.hasJob);

delete selene.hasJob;
console.log(selene.hasJob);



//2. Computed properties (계산된)
//key should be always string type
console.log(selene.name);
console.log(selene['name']);
selene['hasJob'] = true;
console.log(selene.hasJob);

//동적으로, 실시간으로 key에 관련된 값을 받아와야 할 때 아래처럼 사용
function printValue(obj, key){
    console.log(obj[key]);
}
printValue(selene, 'name');
printValue(selene, 'age');


//3. Property value shorthand
const person1 = {name : 'bob', age :2};
const person2 = {name:'selene', age :3};
const person3 = {name:'dave', age:4};

//함수를 이용하여 값만 전달하기 (반복 피하기)
const person4 = new Person('selene', 30);
console.log(person4);

//Construtor function 
function Person(name, age){
    //this ={}; 생략됨 !!!!
    this.name = name;
    this.age = age;
    //return this 생략됨 !!!!
}

//5. in operator : property existence check (key in obj)
//해당하는 오브젝트 안에 key가 있는지 없는지 확인하는것 
console.log('name' in selene);//t
console.log('age' in selene);//t
console.log('random' in selene);//f
console.log(selene.random);//undefined

//6. for..in vs for..of
//-1 모든키 받아와보기 ==> for (key in obj) 오브젝트 사용하는것
console.clear();
for(key in selene){
    console.log(key);
}

//for (value of iterable) 배열, 리스트 사용
const array =[1,2,4,5];
for(value of array){
    console.log(value);
}

//7. Fun cloning
//Object.assign(dest, [obj1, obj2, obj3...])
const user = {name :'selene', age :'20'};
const user2 = user;
//user2.name = 'coder';
console.log(user);//name : "coder", age:"20" 변경된다@@

//오브젝트 복제 old way
const user3 ={};
for(key in user){
    user3[key] = user[key]; // name -> age 순으로 값 할당
}
console.clear();
console.log(user3);

//다른 방법
const user4=Object.assign({}, user);
console.log(user4);

//another example
const fruit1 = {color: 'red'};
const fruit2 = {color:'blue', size : 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);//제일 마지막 적힌게 출력
console.log(mixed.size);







