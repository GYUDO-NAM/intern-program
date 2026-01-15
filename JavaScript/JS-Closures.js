function outer() {
    let count = 0;

    function inner() {
        const incrementedCount = ++count;
        return incrementedCount;
    }

    return inner;
}

const innerFunc = outer();
innerFunc();