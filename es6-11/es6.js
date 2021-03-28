//Shorthand property names
{
    const selene1 = {
        name:'Selene',
        age :'18'
    };

    const name='Selene';
    const age = '18';

    const selene2={
        name : name,
        age : age
    };

    const selene={
        name,
        age
    };
}

//Destructuring assignment
{
    //object
    const student ={
        name:'selene',
        level : 1
    };

    {
        const name = student.name;
        const level = student.level;
        console.log(name, level);
    }

    {
        const{name, level} = student;
        console.log(name,level);

        const {name : studentName, level : studentLevel} = student;
        console.log(studentName, studentLevel);

    }

    //array
    const animals = ['🐓','🐱'];
    
    {
        const first = animals[0];
        const second = animals[1];
        console.log(first,second);
    }

    {
        const [first, second] = animals;
        console.log(first, second);
    }

}

//Spread Syntax
//object를 가리키고 있는 변수는 실제로 object를 담고있는 것이 아니라 object를 가지고 있는 메모리의 주소를 가지고 있다. 
{
    const obj1 = {key :'key1'};
    const obj2 = {key :'key2'};
    const array = [obj1, obj2];

    //배열들을 복사하기 위해서는?
    //1. array copy (결론은 주소값만 복사되어 온 것이라 실제로는 전부다 동일한 오브젝트를 가리키고 있다는 사실@@@@@@@@@@@)
    const arrayCopy = [...array];
    console.log(array, arrayCopy);

    const arrayCopy2 = [...array, {key:'key3'}];
    obj1.key = 'newKey';// 결론 : 0번째 배열의 모든 값들은 newKey로 값이 바뀌었다 @
    console.log(array, arrayCopy, arrayCopy2);

    
    //2. object copy
    const obj3 = {...obj1};
    console.log(obj3);

    //3. array concatenation
    const fruits1 = ['🥝','🍑'];
    const fruits2 = ['🍏','🍅'];
    const fruits = [...fruits1, ...fruits2];
    console.log(fruits);

    //4. object merge (동일한 키를 가지고 있는 오브젝트의 같은 경우에는 제일 마지막에 오는 값을 가지는 오브젝트가 값을 덮어 씌운다)
    const dog1 = {dog1:'🐕'};
    const dog2 = {dog2:'🐩'};
    const dog = {...dog1, ...dog2};
    console.log(dog);
}

//Default parameters
{
    function printMessage(message){
        if(message==null){
            message='default message';
        }
        console.log(message);
    }

    printMessage('hello');
    printMessage();

    {
        function printMessage(message ='default message'){
            console.log(message);
        }

        printMessage('hello');
        printMessage();
    }
}

//Ternary Operator
{
    const isCat = true;
    {
        let component ; 
        if(isCat){
            component='🙀';
        }else{
            component='🐓';
        }
        console.log(component);
    }

    {
        const component = isCat ? '🙀' : '🐓';
        console.log(component);
        console.log(isCat ? '🙀' : '🐓');
    }
}


//Template literals (문자열 작성하기)
{
    const weather = '🌚';
    const temparature = '16c';

    console.log(`Today weather is ${weather} and temparature is ${temparature}`);

}


