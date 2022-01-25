import asana from '../asana'

const uri = 'https://app.asana.com/0/portfolios/12118752209221'
const deepLink = 'asanadesktop:///app/0/portfolios/12118752209221'

describe('Asana', () => {
  it('should return id', () => {
    expect(asana.id).toEqual('asana')
  })

  it('should not match', () => {
    expect(asana.match('foo')).toBeFalsy()
  })

  it('should match', () => {
    expect(asana.match(uri)).toBeTruthy()
  })

  it('should return deep link', () => {
    expect(asana.transform(uri)).toEqual(deepLink)
  })
})
