export default {
  id: 'trello',
  match: (uri: string) => uri.startsWith('https://trello.com/'),
  transform: (uri: string) => uri.replace('https://', 'trello://'),
  open: () => '',
}
