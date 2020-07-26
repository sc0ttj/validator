# Validator

A tiny schema validation thing for JavaScript Objects.

## Install

```
npm i @scottjarvis/validator
```

## Usage

Add to your project:

```js
var validator = require("@scottjarvis/validator")
```

Define a schema:

- create the object shape and property names you want
- add the expected type to each property
- or add a function for custom validation

```js
var schema = {
  id: "number",
  list: "array",
  name: "string",
  age: age => typeof age === "number" && age > 17 && age < 130,
  foo: {
    baz: "string"
  }
}
```

Define the object to validate:

```js
var obj = {
  id: 1,
  name: "bob",
  age: 300,
  list: { one: "two" },
  foo: { bar: "thing" }
}
```

Now lets check `obj` matches `schema`

```js
var errs = validator(obj, schema)

//
// report the results
//
if (errs.length < 1) {
  console.log("Valid")
} else {
  console.error("Invalid! Errors:", errs)
}
```

## Changelog

**1.0.1**
- fixed generation of errors, no duplicates

**1.0.0**
- initial release
