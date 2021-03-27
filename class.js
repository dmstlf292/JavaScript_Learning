'use strict';

// Object-oriendted programming
// class : template
// object : instance of a class
// JavaScript classed
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Classs declarations
class Person{
    //constructor
    constructor(name, age){
        //fields(name, age)에 전달된 데이터를 바로 할당해주는 것 
        this.name=name;
        this.age=age;
    }
    //methods
    speak(){
        console.log(`${this.name}:hello!`);
    }
}

//새로운 object 만들기
const selene = new Person('selene', 20);
console.log(selene.age);
console.log(selene.name);
selene.speak();


//2. Getter and Setters
//User라는 class에는 firstName, lastName, _age라는 필드가 3개 존재한다
class User{
    constructor(firstName, lastName, age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }

    //age가 아니라 getter & setter 안에서 쓰는 변수 이름을 다르게 설정해야함
    get age(){
        return this._age;
    }
    set age(value){
        // if(value<0){
        //     throw Error('age can not be negative');
        // }
        this._age=value < 0 ? 0 : value;
    }



}
const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);



//3. Fields (public, private)
// too soon! (사용하려면 babel 이용해야한다네..?)
class Experiment {
    publicField=2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

//4. Static properties and methods
//too soon
class Article{
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);//Dream Coding 출력됨 
Article.printPublisher();//Dream Coding 출력됨 

//상속 & 다양성(재사용 -> 유지보수 용이)
//5. Inheritance
// a way for one class to extend another class
class Shape {
    constructor(width, height, color){
        this.width=width;
        this.height=height;
        this.color=color;
    }

    draw(){
        console.log(`drawing ${this.color} color of`);
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{
    //상속하기
    draw(){
        super.draw(); // 부모 호출 (상속)
        console.log('🥰');
    }


    //다양성
    //필요한 함수만 재 정의해서 사용가능(overriding)
    getArea(){
        return (this.width * this.height)/2;
    }

    toString(){
        return `Triangle : color : ${this.color}`;
    }
}

const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20,20,'red');
triangle.draw();
console.log(triangle.getArea());


//6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);//true
console.log(triangle.toString());



