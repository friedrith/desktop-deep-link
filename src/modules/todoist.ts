/**
 * todoist.com/app/project/foo -> todoist://project?id=foo
 */

const regex = /https:\/\/todoist\.com\/app\/project\/([a-zA-Z0-9]+)/

export default {
  id: 'todoist',
  match: (uri: string) => Boolean(uri.match(regex)),
  transform: (uri: string) => `todoist://project?id=${uri.match(regex)?.[1]}`,
}
