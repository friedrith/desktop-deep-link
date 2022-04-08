<div align="center">

<h1>Desktop Deep Link</h1>

![example workflow](https://github.com/friedrith/desktop-deep-link/actions/workflows/validate.yml/badge.svg)
![version](https://img.shields.io/github/package-json/v/friedrith/desktop-deep-link)

</div>

A typescript library to transform URIs to deep links for various desktop apps like discord, zoom, etc.
It is useful to open desktop app directly from a browser link or another app.

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
- Asana
- Discord
- Figma
- Microsoft Teams
- Notion
- Obsidian
- Slack
- TodoIst
- Trello
- VS Code
- Zoom

## Useful links

- https://github.com/metachris/typescript-boilerplate
