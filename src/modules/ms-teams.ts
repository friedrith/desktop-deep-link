/**
 * @goto https://www.office.com
 * https://teams.microsoft.com/?tenantId=2923690d-391e-4344-81cd-0c883ef96dd3 -> msteams://teams.microsoft.com/l/channel/19%3aiG5MvaCDHY_Ct-76tosymTuJI7hQJrnmiGAiBK2LSig1%40thread.tacv2/General?groupId=098779c2-1fc0-4037-9fec-e4343df8d772&tenantId=2923690d-391e-4344-81cd-0c883ef96dd3
 */

export default {
  id: 'ms-teams',
  match: (uri: string) => uri.startsWith('https://teams.microsoft.com'),
  transform: (uri: string) => {
    const { searchParams } = new URL(uri)

    const tenantId = searchParams.get('tenantId')

    return `msteams://teams.microsoft.com?tenantId=${tenantId}`
  },
}
