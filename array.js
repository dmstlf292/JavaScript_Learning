'use strict';

//Array
//1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

//2. Index position 
const fruits = ['🍏', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length-1]);//마지막 데이터 찾기

//3. Looping over an array 무한루프 돌리기
//print all fruits
 console.clear();
//a. for
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// b. for of 
for(let fruit of fruits){
    console.log(fruit);
}

//c. forEach & 이름이 없는 함수는 화살표 함수 사용한다. (한줄만 있는 경우는 {} 삭제 가능함)
fruits.forEach((fruit)=> console.log(fruit));

//배열에 Addtion, delete, copy
// push : add an item to the end
fruits.push('🍑','🍇');
console.log(fruits);

// pop : remove an item from the end
fruits.pop();
console.log(fruits);//아이템 한개 빠짐 

// 앞에서부터 아이템 넣기 : add an item to the beginning (unshift)
fruits.unshift('🍅','🥝');
console.log(fruits);
// 앞에서부터 아이템 빼기 : remove an item from the beginning (shitf)
fruits.shift();
console.log(fruits);

//note !! : shift, unshift are slower than pop, push
//splice : remove an item by index position
fruits.push('🍺','🍍','🍋');
console.log(fruits);
fruits.splice(1,2);
console.log(fruits);
fruits.splice(1,1,'😀','⛪️');//삭제  및 추가도 가능
console.log(fruits);

//concat : combine tow arrays
const fruits2 = ['⌚️','♤'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5. Searching (indexOf, includes)
//find the index -->  배열안에 해당값이 없을경우 ? -1 출력한다.
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🥝'));
console.log(fruits.includes('🍅'));//f or t 로 반환


//lastIndexOf
console.clear();
fruits.push('🍅');
console.log(fruits.indexOf('🍅'));
console.log(fruits.lastIndexOf('🍅'));