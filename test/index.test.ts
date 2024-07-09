import {describe, test} from 'mocha'
import expect from 'expect'
import * as temp from '../src/index'

describe('typescript.template', () => {

    test('develop', () => {
        expect(temp).not.toBeNull()
        console.log(temp)
    })

})
