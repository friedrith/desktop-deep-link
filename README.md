# desktop-deep-link

A typescript library to transform URIs to deep link for a lot of desktop apps. It is useful to open desktop app directly from a browser link or another app.

## Installation

```bash
npm install desktop-deep-link

yarn install desktop-deep-link
```

## Getting started

```ts
import createDeepLink from 'desktop-deep-link'

const deepLink = createDeepLink('https://todoist.com/app/project/foo')

// deepLink = todoist://project?id=foo
```

Works with:

- Adobe XD
- Microsoft Teams
- Notion
- Slack
- TodoIst
- VS Code
- Zoom

## Useful links

- https://github.com/metachris/typescript-boilerplate
