import todoist from '../todoist'

const uri = 'https://todoist.com/app/project/019'
const deepLink = 'todoist://project?id=019'

describe('Todoist', () => {
  it('should not match', () => {
    expect(todoist.match('foo')).toBeFalsy()
  })

  it('should match', () => {
    expect(todoist.match(uri)).toBeTruthy()
  })

  it('should return deep link', () => {
    expect(todoist.transform(uri)).toEqual(deepLink)
  })
})
