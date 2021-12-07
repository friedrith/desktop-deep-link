import slack from '../slack'

const uri = 'https://app.slack.com/client/T06AGC46Q/C07345NC8'
const deepLink = 'slack://channel?team=T06AGC46Q&id=C07345NC8'

describe('Slack', () => {
  it('should not match', () => {
    expect(slack.match('foo')).toBeFalsy()
  })

  it('should match', () => {
    expect(slack.match(uri)).toBeTruthy()
  })

  it('should return deep link with channel id', () => {
    expect(slack.transform(uri)).toEqual(deepLink)
  })

  it('should return deep link without channel id', () => {
    expect(slack.transform('https://app.slack.com/client/T06AGC46Q')).toEqual(
      'slack://channel?team=T06AGC46Q'
    )
  })
})
