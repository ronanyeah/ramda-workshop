'use strict'

//const assert = require('assert')

const { readFileSync } = require('fs')
const text = readFileSync('./whatsapp_chat.txt', 'utf8')

const cloud = require('./cloud.js')

console.log(cloud(text))

/*

RESULT:

{
  dogs: 3,
  why: 9,
  javascript: 342
}

*/
