import notion from '../notion'

const uri =
  'https://www.notion.so/collegeinfogeek/Recurring-Task-Dates-01101ca280f74efb937488d468ffbaac'
const deepLink =
  'notion://www.notion.so/collegeinfogeek/Recurring-Task-Dates-01101ca280f74efb937488d468ffbaac'

describe('Notion', () => {
  it('should not match', () => {
    expect(notion.match('foo')).toBeFalsy()
  })

  it('should match', () => {
    expect(notion.match(uri)).toBeTruthy()
  })

  it('should return deep link', () => {
    expect(notion.transform(uri)).toEqual(deepLink)
  })
})
