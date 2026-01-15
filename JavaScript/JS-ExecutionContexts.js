const firstName = "Lydia";

function outer() {
    const lastName = "Hallie"

    function inner() {
        const fullName = firstName + " " + lastName;
        return fullName;
    }

    return inner;
}

const getFullName = outer();
getFullName();