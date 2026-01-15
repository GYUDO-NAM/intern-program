function createCounter() {
    let count = 0;

    function inncrement() {
        return ++count;
    }

    return inncrement;
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1());
console.log(counter2());
console.log(counter1());

