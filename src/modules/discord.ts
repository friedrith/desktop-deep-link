export default {
  id: 'discord',
  match: (uri: string) => uri.startsWith('https://discord.com'),
  transform: (uri: string) => uri.replace('https://', 'discord://'),
}
