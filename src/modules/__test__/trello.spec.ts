import trello from '../trello'

const uri = 'https://trello.com/b/cZSIrEWs/conduite-de-projet'
const deepLink = 'trello://trello.com/b/cZSIrEWs/conduite-de-projet'

describe('Todoist', () => {
  it('should return id', () => {
    expect(trello.id).toEqual('trello')
  })

  it('should not match', () => {
    expect(trello.match('foo')).toBeFalsy()
  })

  it('should match', () => {
    expect(trello.match(uri)).toBeTruthy()
  })

  it('should return deep link', () => {
    expect(trello.transform(uri)).toEqual(deepLink)
  })
})
