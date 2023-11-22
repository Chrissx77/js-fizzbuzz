const container = document.querySelector(".container");

//Scorro index da 1 a 100 e lo metto a video da 1 a 100
for (let i = 1; i <= 1000; i++) {
    //metto a video "Fizz" per index multipli 3
    //metto a video "Buzz" per index multipli 5
    //metto a video "FizzBuzz" per index multipli 3 e 5
    //metto a video tutti i restanti

    const square = document.createElement("div");
    square.classList.add("square");

    if (i % 3 === 0 && i % 5 === 0) {
        square.append("FizzBuzz");
        square.style.backgroundColor = "green"
    } else if (i % 5 === 0) {
        square.append("Buzz");
        square.style.backgroundColor = "red";
    } else if (i % 3 === 0) {
        square.append("Fizz");
        square.style.backgroundColor = "orange";
    } else {
        square.append(i);
    }
    container.append(square);
}