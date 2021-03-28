//Json
//JavaScript Object Notation

//1. Object to JSON
//stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json=JSON.stringify(['apple', 'banana']);
console.log(json);//["apple","banana"] 배열타입처럼 보여진다

//object  정의
const rabbit = {
    name : 'selene',
    size : 'white',
    size:null,
    birthday : new Date(),//date오브젝트 정의 
    jump:()=>{//콘솔 한줄 출력이라서 괄호 생략 가능 
        console.log(`${name} can jump`);
    }
};
json=JSON.stringify(rabbit);
console.log(json);
//{"name":"selene","size":null,"birthday":"2021-03-28T01:58:05.114Z"}
//여기서 jump 라는 함수는 json 에 포함되지 않는다(함수는 object에 있는 데이터가 아니다 )

json=JSON.stringify(rabbit, ["name"]);//{"name":"selene"}
console.log(json);

//callback 함수로 호출하기 
json=JSON.stringify(rabbit, (key,value)=>{
    console.log(`key:${key}, value:${value}`);
    return key==='name' ? 'selene' : value;
});
console.log(json);






//2, Json to Object
//parse
console.clear();
json=JSON.stringify(rabbit);
console.log(json);// birthday가 string 형태로 만들어졌음 "birthday":"2021-03-28T02:10:01.541Z"
const obj = JSON.parse(json, (key, value) =>{
    console.log(`key:${key}, value:${value}`);
    return key === 'birthday' ? new Date(value) : value;//Sun Mar 28 2021 11:12:35 GMT+0900 (대한민국 표준시)
});
console.log(obj);//{name: "selene", size: null, birthday: "2021-03-28T02:06:07.686Z"}
rabbit.jump();// can jump
//obj.jump();//error!

console.log(rabbit.birthday.getDate());//28
console.log(obj.birthday);//2021-03-28T02:08:53.600Z(json 에 있는 데이터 자체 string 이 object 에 할당이 되어서 @)
console.log(obj.birthday.getDate());//28