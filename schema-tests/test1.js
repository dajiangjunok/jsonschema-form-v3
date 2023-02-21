const Ajv = require("ajv").default
// const addFormats = require("ajv-formats")
const localize = require('ajv-i18n')
const ajv = new Ajv({ allErrors: true, jsonPointers: true })
// Ajv option allErrors is required
require("ajv-errors")(ajv)

// addFormats(ajv)

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    age: {
      type: 'number',
      errorMessage: {
        type: '必须是数字',
        minLength: '长度不小于10'
      },
      minLength: 10
    },
    pets: {
      type: 'array',
      items: {
        type: 'string'
      }
    },
    isWorker: {
      type: 'boolean'
    }
  },
  required: ['name', 'age']
}

const valid = ajv.validate(schema, { name: 'Tom', age: '12', pets: ['kk', '咕噜'], isWorker: true })


if (!valid) {
  // localize.zh(ajv.errors)
  console.log(ajv.errors)
}