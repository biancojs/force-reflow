require('jsdom-global')()
const assert = require('assert')
const forceReflow = require('./')
const body = document.body

describe('Bianco forceReflow', function() {
  beforeEach(function () {
    var div = document.createElement('div')
    div.innerHTML = `
      <p>hello</p>
      <ul>
        <li>uno
        <li>due
        <li>tre
      </ul>
    `
    body.appendChild(div)
  })

  it('return a the element as it was received', function() {
    const p = document.querySelector('p')
    const lis = document.querySelectorAll('li')
    assert.equal(forceReflow(p), p)
    assert.equal(forceReflow(lis), lis)
  })
})