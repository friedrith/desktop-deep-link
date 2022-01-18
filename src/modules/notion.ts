/**
 * @see https://thomasjfrank.com/how-to-share-notion-links-that-open-directly-in-the-app/
 */

export default {
  id: 'notion',
  match: (uri: string) => uri.startsWith('https://www.notion.so'),
  transform: (uri: string) => uri.replace('https://', 'notion://'),
}
