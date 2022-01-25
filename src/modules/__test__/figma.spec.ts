import figma from '../figma'

const uri = 'https://www.figma.com/file/vpAT6qSoPFceXsnWv1L5gB/Foo'
const deepLink =
  'figma://figma/desktop/open-url?url=https%3A%2F%2Fwww.figma.com%2Ffile%2FvpAT6qSoPFceXsnWv1L5gB%2FFoo'

describe('Figma', () => {
  it('should return id', () => {
    expect(figma.id).toEqual('figma')
  })

  it('should not match', () => {
    expect(figma.match('foo')).toBeFalsy()
  })

  it('should match', () => {
    expect(figma.match(uri)).toBeTruthy()
  })

  it('should return deep link', () => {
    expect(figma.transform(uri)).toEqual(deepLink)
  })
})
