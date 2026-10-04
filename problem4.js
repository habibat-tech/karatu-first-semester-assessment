
function createCounter() {
    // The count variable is private inside this function
    let count = 0;

    return {
        increment() {
            count++;
        },

        decrement() {
            count--;
        },

        get value() {
            return count;
        }
    };
}

// Test the counter
const counter = createCounter();

counter.increment();
counter.increment();
counter.decrement();

console.log(counter.value); // Expected: 1
console.log(counter.count); // Expected: undefined
