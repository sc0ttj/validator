export default function validator(obj, schema) {
  var errs = []

  Object.entries(schema).forEach(item => {
    var key = item[0]
    var val = obj[key]

    var keyType = typeof obj[key]
    var expectedType = schema[key]

    if (expectedType === "array") {
      if (!Array.isArray(val)) {
        errs.push({ key: key, expected: "array", got: keyType })
      }
    }

    // if we have object, call validator on it
    else if (keyType === "object" && !Array.isArray(val)) {
      errs = [...errs, ...validator(obj[key], schema[key])]
    }

    // if we have a function, it's a custom validator func, should return true/false
    else if (typeof expectedType === "function") {
      if (!schema[key](val)) {
        errs.push({ key: key, expected: true, got: false })
      }
    }

    // if we have a string, it should be the name of the expected type in the schema
    else if (keyType !== expectedType.toLowerCase()) {
      errs.push({ key: key, expected: schema[key], got: keyType })
    }
  })
  return errs
}
