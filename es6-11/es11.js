{
    const person1 ={
        name:'selene',
        job:{
            title:'s/w engineer',
            manager:{
                name:'bob'
            },

        },
    };

    const person2 ={
        name:'bob'
    };


    {
        function printManager(person){
            console.log(person.job?.manager?.name);
        }
        printManager(person1);//bob
        printManager(person2);//undefined
    }

}

//Nullish coalescing Operator
{
    //Logical OR operator
    //false : false, '', 0, null, undefined
    const name='selene';
    const userName = name || 'Guest';
    console.log(userName);
}

{
    const name = null;
    const userName = name || 'Guest';
    console.log(userName);
}


//💩
{
    const name = '';
    const userName = name || 'Guest';
    console.log(userName);//Guest 출력 

    const num = 0;
    const message = num || 'undefined';
    console.log(message);//undefined 출력
}

{
    const name = '';
    const userName = name ?? 'Guest';
    console.log(userName);

    const num = 0;
    const message = num ?? 'undefined';
    console.log(message);
}