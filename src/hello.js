'use strict'

export function handler(event) {
  return new Promise((resolve, reject) => {
    resolve({value: 'world'});
  });
}
