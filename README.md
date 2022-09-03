# Validator

A tiny schema validation thing for JavaScript Objects.

[![npm version](https://badge.fury.io/js/%40scottjarvis%2Fvalidator.svg)](https://badge.fury.io/js/%40scottjarvis%2Fvalidator) [![Node version](https://badgen.net/npm/node/@scottjarvis/validator)](http://nodejs.org/download/) [![Build Status](https://travis-ci.org/sc0ttj/validator.svg?branch=master)](https://travis-ci.org/sc0ttj/validator) [![bundle size](https://badgen.net/bundlephobia/minzip/@scottjarvis/validator?color=green&label=gzipped)](https://badgen.net/bundlephobia/minzip/@scottjarvis/validator) [![Downloads](https://badgen.net/npm/dt/@scottjarvis/validator)](https://badgen.net/npm/dt/@scottjarvis/validator)

## Install

```
npm i @scottjarvis/validator
```

## Usage

Add it to your project:

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
