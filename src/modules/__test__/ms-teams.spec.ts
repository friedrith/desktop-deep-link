import msTeams from '../ms-teams'

const uri = 'https://teams.microsoft.com?tenantId=74559217191406777'
const deepLink = 'msteams://teams.microsoft.com?tenantId=74559217191406777'

describe('Ms Teams', () => {
  it('should return id', () => {
    expect(msTeams.id).toEqual('ms-teams')
  })

  it('should not match', () => {
    expect(msTeams.match('foo')).toBeFalsy()
  })

  it('should match', () => {
    expect(msTeams.match(uri)).toBeTruthy()
  })

  it('should return deep link', () => {
    expect(msTeams.transform(uri)).toEqual(deepLink)
  })
})
