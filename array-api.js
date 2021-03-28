//아주 중요 : 배열 함수 10가지 

//Q1. make a string out of an array(배열을 스트링으로 변환하기)
{
    const fruits =['apple', 'banana', 'orange'];
    const result = fruits.join(',');
    console.log(result);//apple,banana,orange
}

//Q2. make an array out of a string (string을 배열로 만들기)
{
    const fruits = '🍅, 🥝,🍌,🍑 ';
    const result = fruits.split(',',2);
    console.log(result);//(4) ["🍅", " 🥝", "🍌", "🍑 "]
}

//Q3. make this array look like this : [5,4,3,2,1]
{
    const array = [1,2,3,4,5];
    const result = array.reverse();
    console.log(result);//[5, 4, 3, 2, 1]
    console.log(array);//[5, 4, 3, 2, 1]
}

//Q4. make new array without the first two elements (1,2번째 제외한 나머지 3개만 새로운 배열 만들기)
//splice : 배열 자체를 수정함
//slice : 배열에서 원하는 부분만 리턴해서 받아올 수 있다. 
{
    const array = [1,2,3,4,5];
   // const result = array.splice(0,2);
    const result = array.slice(2,5);//3,4,5 출력됨 & 제일 마지막칸은 제외 되어서 4말고 5라고 해야 마지막 값도 잘 출력된다 
    console.log(result);//[1,2]
    console.log(array);//[3,4,5]
}




class Student {
    constructor(name, age, enrolled, score){
        this.name=name;
        this.age= age;
        this.enrolled=enrolled;
        this.score=score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false,66),
    new Student('E', 18, true, 88),

];

//Q5. find a student with the score 90
{
    const result = students.find((student)=>
       //  console.log(student,index);
        student.score===90//arrow function : return 이랑 세미콜론 생략 가능해!!
    );
    console.log(result);//Student {name: "C", age: 30, enrolled: true, score: 90}
}

//Q6. make an array of enrolled students

{
    const result = students.filter((student)=>student.enrolled);
    console.log(result);
}


//Q7. make an array containing only the student's scores 
// result should be : [45,80, 90, 66, 88]
// map : 배열안에 있는 요소들을 내가 원하는 함수를 이용해서 다른형식의 데이터를 만들고 싶을때 사용함 
// callback 함수로 전달되는 인자는 최대한 이해하기 쉽게 써야한다. (student) 이렇게..
{
    const result = students.map((student)=>student.score); 
    console.log(result);
}

//Q8. check if there is a student with the score lower than 50
{
    console.clear();
    const result = students.some((student) => student.score<50);
    console.log(result);//true
}
//Q9. compute student's average score
// reduce : 내가 원하는 시작점부터 모든 배열을 돌면서 어떤 값을 누적할때 사용한다
// reduceRight : 배열의 제일 뒤에서부터 시작한다 
{
    const result = students.reduce((prev, curr) =>{
        console.log('-----');
        console.log(prev);
        console.log(curr);
        return prev + curr.score;
    },0);
    console.log(result/students.length);//평군 : 73.8
}
//Q10. make a string containing all the scores
//result should be : '45,80,90,66,88'
{
    const result = students
        .map(student => student.score)
        .filter((score) => score>=50)
        .join();//join 이용시 스트링으로 변환 :  45,80,90,66,88
    console.log(result);//[45, 80, 90, 66, 88]
}

//bonous ! do Q10 sorted in ascending order
//result should be : '45,66,80,88,90'
{
    const result = students.map(student => student.score)
    .sort((a,b) => a-b)//작 -> 큰 순서대로
    //.sort((a,b) => b-a)//큰 -< 작 순서대로
    .join();
    console.log(result);
}