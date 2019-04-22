//This algorithm will print the number from 1 to the number asked
//it will print 'Fizz' if the number is divisible by 3
//it will print 'Buzz' if the number is divisible by 5
//it will print 'FizzBuzz' if the number is divisible by both 3and 5

function fizzBuzz(num){
    for(var i=1;i<=num;i++){
        if(i%15===0){
            console.log('FizzBuzz');
        }
        else if(i%3===0){
            console.log('Fizz');
        }
        else if(i%5===0){
            console.log('Buzz');
        }
        else{
            console.log(i);
        }
    }
}

fizzBuzz(45);