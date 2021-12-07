/**
 * file:///Users/foo/bar.code-workspace -> vscode://file/Users/foo/bar.code-workspace
 */

export default {
  match: (uri: string) =>
    uri.startsWith('file:///') && uri.endsWith('.code-workspace'),
  transform: (uri: string) => uri.replace('file://', 'vscode://file'),
}
