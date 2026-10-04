
function validateSchema(obj, schema) {
    const errors = [];

    for (const [key, expectedType] of Object.entries(schema)) {
        if (!Object.prototype.hasOwnProperty.call(obj, key)) {
            errors.push(`${key}: missing property`);
        } else if (typeof obj[key] !== expectedType) {
            errors.push(
                `${key}: expected ${expectedType}, got ${typeof obj[key]}`
            );
        }
    }

    return errors;
}

// Define the schema
const schema = {
    name: "string",
    age: "number",
    isAdmin: "boolean"
};

// Test 1: Valid object
console.log(
    validateSchema(
        { name: "Ada", age: 21, isAdmin: false },
        schema
    )
);
// Expected: []

// Test 2: Wrong type and missing property
console.log(
    validateSchema({ name: "Ada", age: "21" }, schema)
);
// Expected: [
//   "age: expected number, got string",
//   "isAdmin: missing property"
// ]
