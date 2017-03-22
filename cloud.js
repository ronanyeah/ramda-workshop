'use strict'

/* eslint-disable */

const {
  split, map, drop, dropLast, pipe, reject, flatten, replace, prop, test, filter, identity, toLower, forEach, splitEvery, toPairs, flip, contains
} = require('ramda')

module.exports = pipe(
  identity
  //split('\n'),
  //drop(2),
  //dropLast(1)
  //map(split('m - ')),
  //map(prop(1)),
  //reject(test(/<.*>/))
  //filter(identity),
  //map(split(': ')),
  //map(prop(1)),
  //filter(identity),
  //map(split(' ')),
  //flatten,
  //map(toLower)
  //reject( x => x.substring(0, 4) === 'http' ),
  //map(replace(/\W/g, '')),
  //reject( x => String(Number(x)) === x ),
  //reject( flip(contains)(['the', 'and']) ),
  //filter( x => x.length > 2 )
  //reduce(
  //     (acc, val) =>
  //       R.assoc(val, (acc[val] || 0) + 1, acc), {}
  //   )
)
