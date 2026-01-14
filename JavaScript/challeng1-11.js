function filterArray(arr) {

    var result = [];


    for (var i = 0; i < arr.length; i++) {

        if (typeof arr[i] === "number") {

            result.push(arr[i]);
        }
    }


    return result;
}