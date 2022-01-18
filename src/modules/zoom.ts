/**
 * https://us02web.zoom.us/j/888888888?pwd=WHNxdUWHNxdUWHNxdUWHNxdU -> zoommtg://us04web.zoom.us/join?action=join&confno=888888888&pwd=WHNxdUWHNxdUWHNxdUWHNxdU
 */

const regex = /https:\/\/us02web\.zoom\.us\/j\/([a-zA-Z0-9]+)/

export default {
  id: 'zoom',
  match: (uri: string) => Boolean(uri.match(regex)),
  transform: (uri: string) => {
    const room = uri.match(regex)?.[1]

    const { searchParams } = new URL(uri)
    const pwd = searchParams.get('pwd')

    return `zoommtg://us04web.zoom.us/join?action=join&confno=${room}&pwd=${pwd}`
  },
}
