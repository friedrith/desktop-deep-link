const open = ({ filename }) =>
  `obsidian://open?path=${filename.replace('.md', '')}`

export default {
  id: 'obsidian',
  match: (uri: string) => uri.startsWith('file:///') && uri.endsWith('.md'),
  transform: (uri: string) => open({ filename: uri.replace('file://', '') }),
  open,
}
