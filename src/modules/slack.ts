/**
 * @see https://api.slack.com/reference/deep-linking#client
 * https://app.slack.com/client/T06AGC46Q/C07345NC8 -> slack://channel?team=T06AGC46Q&id=C07345NC8
 */

const regex =
  /https:\/\/app\.slack\.com\/client\/([a-zA-Z0-9]+)\/?([a-zA-Z0-9]*)/

export default {
  id: 'slack',
  match: (uri: string) => Boolean(uri.match(regex)),
  transform: (uri: string) => {
    const match = uri.match(regex)
    const teamId = match?.[1]
    const channelId = match?.[2]

    const channel = channelId ? `&id=${channelId}` : ''

    return `slack://channel?team=${teamId}${channel}`
  },
  open: () => '',
}
