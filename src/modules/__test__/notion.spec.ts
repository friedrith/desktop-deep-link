import adobeXd from '../adobe-xd'

const uri =
  'https://assets.adobe.com/id/urn:aaid:sc:EU:485dd3be-1c52-4147-1111-23dae6b7fe7e?view=difile'
const deepLink =
  'adbxd://app?action=openCloudDoc&cloudURL=https%3A%2F%2Fcc-api-storage.adobe.io%2Fid%2Furn%3Aaaid%3Asc%3AEU%%3A485dd3be-1c52-4147-1111-23dae6b7fe7e'

describe('Adobe XD', () => {
  it('should not match', () => {
    expect(adobeXd.match('foo')).toBeFalsy()
  })

  it('should match', () => {
    expect(adobeXd.match(uri)).toBeTruthy()
  })

  it('should return deep link', () => {
    expect(adobeXd.transform(uri)).toEqual(deepLink)
  })
})
