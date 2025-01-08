import { describe, test } from 'mocha'
import expect from 'expect'
import * as temp from '../src/index'

describe('module.TEMPLATE', () => {

  test('develop', () => {
    expect(temp).not.toBeNull()
    console.log(temp)
  })

})
