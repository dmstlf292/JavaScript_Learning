'use strict';

//2. Variable
//let (added in ES6 = javascript)
//block scope (괄호 {} 를 이용한것)=> 블럭 밖에서는 안에 있는 내용을 볼 수 없게 된다. 


let globalName = 'global name';//global scope : 어느 곳에서나 접근이 가능하다 
{
    let name = 'selene';
    console.log(name);
    name='hello';
    console.log(name);
    console.log(globalName);
}

console.log(name);//출력결과 없음
console.log(globalName);

//var (don't ever user this)
//var hoisting (hoisting? move declaration from bottom to top)

//3. Constants : 한번 할당 하면 값이 절대 바뀌지 않는다. 
//Mutable : 값이 계속 변경이 가능함
//favor immutable data type always for a few reasons:
//-security (보안상 이유로), thread satety , reduce human mistakes

const daysInWeek =7;
const maxNumber=5;

//4. Variable types
//primitive 타입, single item : number, string, boolean, null, undefind, symbol
//object 타입 (single item 여러개를 묶어 한개의 단위, 박스로 관리), box container
//function, first-class-function 

const count =17;//integer
const size =17.1;//decimal number
console.log(`value : ${count}, type : ${typeof count}` );
console.log(`value : ${size}, type : ${typeof size}` );

//number- special numeric values : infinity, -infinity, NaN(not a number)
const infinity =1/0;
const negativeInfinity =-1/0;
const nAn = 'not a number';
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//String 
const char = 'c';
const brendan ='brendan';
const greeting ='hello' + brendan;
console.log(`value:${greeting}, type:{typeof greeting}`);
const helloBob=`hi ${brendan}!`; // templete literals(string) => backtic 이용 
console.log(`value:${helloBob}, type:${typeof helloBob}`);

//boolean 
//false : 0, null, undefined, NaN, ''
//true : any other value
const canRead = true;
const test = 3<1;
console.log(`value:${canRead}, type:${typeof canRead}`);//true
console.log(`value:${test}, type:${typeof test}`);//false

//null : empty
let nothing = null;
console.log(`value : ${nothing}, type:${typeof nothing}`);
//undefined
let x;
console.log(`value:${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects //고유 식별자 만들때 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1===symbol2);//false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1===gSymbol2);//true
console.log(`value:${symbol1.description}, type : ${typeof symbol1}`);


//object, real-life object, data structure
const selene = {name : 'selene', age:20};
selene.age=21;




//5.Dynamic typing : dynamically typed language
//js는 런타임에서 타입이 정해지기 때문에 런타임 에러가 발생할 수 있다. 
let text = 'hello';
console.log(text.charAt(0));//h
console.log(`value:${text}, type :${typeof text}`);
text =1;
console.log(`value:${text}, type :${typeof text}`);
text=`7`+5;
console.log(`value:${text}, type:${typeof text}`);//75 (숫자로 옆으로 나열)
text='8'/'2';
console.log(`value:${text}, type:${typeof text}`);//4, number
console.log(text.charAt(0));//에러 