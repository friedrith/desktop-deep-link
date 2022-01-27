/**
 * @goto https://creativecloud.adobe.com/apps/?locale=en
 * https://assets.adobe.com/id/urn:aaid:sc:EU:485dd3be-1c52-4147-1111-23dae6b7fe7e?view=difile ->
 * adbxd://app?action=openCloudDoc&cloudURL=https%3A%2F%2Fcc-api-storage.adobe.io%2Fid%2Furn%3Aaaid%3Asc%3AEU%%3A485dd3be-1c52-4147-1111-23dae6b7fe7e
 */

const regex = /https:\/\/assets\.adobe\.com\/id\/urn:aaid:sc:EU:([-a-zA-Z0-9]+)/

export default {
  id: 'adobe-xd',
  match: (uri: string) => Boolean(uri.match(regex)),
  transform: (uri: string) =>
    `adbxd://app?action=openCloudDoc&cloudURL=https%3A%2F%2Fcc-api-storage.adobe.io%2Fid%2Furn%3Aaaid%3Asc%3AEU%%3A${
      uri.match(regex)?.[1]
    }`,
  open: () => '',
}
