class Counter{//클래스 (다양한 오브젝트를 만들기 위해서)
    constructor(runEveryFiveTimes){//클래스가 처음 생성되면
        this.counter=0;//counter라는 변수가 있는데 0부터 시작한다
        this.callback = runEveryFiveTimes;
    }

    //클래스 안에 함수가 있다.(class에서 함수 선언할때는 function 이라고 표시 안해도 된다)
    increase(){
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5===0){
           // this.callback(this.counter);//5배수일때마다 콜백
            this.callback && this.callback(this.counter);

        }
    }
}

function printSomething(num){
    console.log(`wow ${num}`);
}

function alertNum(num){
    alert(`alert ${num}`);
}

//클래스를 이용해서 오브젝트 새로 만들기 
const printCounter = new Counter(printSomething);//Counter 생성자에 내가 원하는 callback 함수 () 안에 넣어서 전달해주기 => printSomething or alertNum
const alertCounter = new Counter(alertNum);