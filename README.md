# desktop-deep-link

A library to transform URIs to deep link for a lot of desktop apps.

## Getting started

```ts
import createDeepLink from 'desktop-deep-link'

const deepLink = createDeepLink('https://todoist.com/app/project/foo')

// deepLink = todoist://project?id=foo
```
