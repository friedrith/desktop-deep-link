import zoom from '../zoom'

const uri = 'https://us02web.zoom.us/j/888888888?pwd=WHNxdUWHNxdUWHNxdUWHNxdU'
const deepLink =
  'zoommtg://us04web.zoom.us/join?action=join&confno=888888888&pwd=WHNxdUWHNxdUWHNxdUWHNxdU'

describe('Zoom', () => {
  it('should not match', () => {
    expect(zoom.match('foo')).toBeFalsy()
  })

  it('should match', () => {
    expect(zoom.match(uri)).toBeTruthy()
  })

  it('should return deep link', () => {
    expect(zoom.transform(uri)).toEqual(deepLink)
  })
})
