const container = document.querySelector(".container");

//Scorro index da 1 a 100 e lo metto a video da 1 a 100
for (let i = 1; i <= 1000; i++) {
    //metto a video "Fizz" per index multipli 3
    //metto a video "Buzz" per index multipli 5
    //metto a video "FizzBuzz" per index multipli 3 e 5
    //metto a video tutti i restanti

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }

}