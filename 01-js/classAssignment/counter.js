let count = 30;

function timer() {
    console.log(count);

    if (count == 0) {
        clearInterval(intervalId);
        console.log("Timer done!");
    }

    count--;
}

const intervalId = setInterval(timer, 1000);
