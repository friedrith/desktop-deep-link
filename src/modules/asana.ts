// https://forum.asana.com/t/safari-wont-recognize-task-notification-links/142767

export default {
  id: 'asana',
  match: (uri: string) => uri.startsWith('https://app.asana.com/'),
  transform: (uri: string) =>
    uri.replace('https://app.asana.com/', `asanadesktop:///app/`),
  open: () => '',
}
