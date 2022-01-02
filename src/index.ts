import { modules } from './modules'
import Module from './Module'

const defaultModule = {
  match: () => true,
  transform: (uri: string): string => uri,
}

export default (uri: string) => {
  return [...modules, defaultModule]
    .find((m: Module) => m.match(uri))
    ?.transform(uri)
}
