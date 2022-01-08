export default {
  match: (uri: string) => uri.startsWith('https://discord.com'),
  transform: (uri: string) => uri.replace('https://', 'discord://'),
}
