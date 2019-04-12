'use strict'

module.exports.handler = async (event) => {
  return new Promise((resolve, reject) => {
    resolve({value: 'world'});
  });
}
