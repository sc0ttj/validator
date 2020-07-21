var validator = require("../dist/index.umd.js")

// Define a schema:
//  - create the object shape and property names you want
//  - add the expected type to each property
//  - or add a function for custom validation
var schema = {
  id: "number",
  list: "array",
  name: "string",
  age: age => (typeof age === "number") & (age > 17) && age < 130,
  foo: {
    baz: "string"
  }
}

// Define the object to validator
var obj = {
  id: 1,
  name: "bob",
  age: 300,
  list: { one: "two" },
  foo: { bar: "thing" }
}

//
// now lets check "obj" matches "schema"
//
var errors = validator(obj, schema)

//
// report the results
//
if (errors.length < 1) {
  console.log("Result: 'obj' passed validation against 'schema'")
} else {
  console.error("Result: 'obj' FAILED validation:\n")
  console.error(errors)
}
