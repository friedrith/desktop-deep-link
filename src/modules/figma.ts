export default {
  id: 'figma',
  match: (uri: string) =>
    Boolean(uri.startsWith('https://www.figma.com/file/')),
  transform: (uri: string) =>
    `figma://figma/desktop/open-url?url=${encodeURIComponent(uri)}`,
}
