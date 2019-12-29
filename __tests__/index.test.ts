import {removeCommas} from '../src/index'

test('Remove Commas', () => {
    expect(removeCommas('5,000,000')).toBe('5000000')
})
