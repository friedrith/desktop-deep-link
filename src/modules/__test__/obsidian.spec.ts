import obsidian from '../obsidian'

const uri = 'file:///Users/foo/bar.md'
const deepLink = 'obsidian://open?path=/Users/foo/bar'
const filename = '/Users/foo/bar.md'

describe('Obsidian', () => {
  it('should return id', () => {
    expect(obsidian.id).toEqual('obsidian')
  })

  it('should not match', () => {
    expect(obsidian.match('foo')).toBeFalsy()
  })

  it('should match', () => {
    expect(obsidian.match(uri)).toBeTruthy()
  })

  it('should return deep link', () => {
    expect(obsidian.transform(uri)).toEqual(deepLink)
  })

  it('should return deep link after open', () => {
    expect(obsidian.open({ filename })).toEqual(deepLink)
  })
})
