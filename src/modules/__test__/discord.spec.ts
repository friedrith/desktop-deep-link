import discord from '../discord'

const uri = 'https://discord.com/channels/74559217191406777'
const deepLink = 'discord://discord.com/channels/74559217191406777'

describe('Adobe XD', () => {
  it('should return id', () => {
    expect(discord.id).toEqual('discord')
  })

  it('should not match', () => {
    expect(discord.match('foo')).toBeFalsy()
  })

  it('should match', () => {
    expect(discord.match(uri)).toBeTruthy()
  })

  it('should return deep link', () => {
    expect(discord.transform(uri)).toEqual(deepLink)
  })
})
