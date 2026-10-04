
function deepEqual(objA, objB) {
    if (Object.is(objA, objB)) {
        return true;
    }

    if (
        objA === null ||
        objB === null ||
        typeof objA !== "object" ||
        typeof objB !== "object"
    ) {
        return false;
    }

    if (Array.isArray(objA) !== Array.isArray(objB)) {
        return false;
    }

    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
        return false;
    }

    for (const key of keysA) {
        if (
            !Object.prototype.hasOwnProperty.call(objB, key) ||
            !deepEqual(objA[key], objB[key])
        ) {
            return false;
        }
    }

    return true;
}

// Test cases
console.log(deepEqual({ a: 1 }, { a: 1 })); 
// Expected: true

console.log(deepEqual({ a: { b: 2 } }, { a: { b: 2 } })); 
// Expected: true

console.log(deepEqual({ a: 1 }, { a: 2 })); 
// Expected: false

console.log(deepEqual({ a: 1 }, { a: 1, b: 2 })); 
// Expected: false
