import { modules } from './modules'
import Module from './Module'

const defaultModule = {
  match: () => true,
  transform: (uri: string): string => uri,
}

const normalize = (uri: string): string => {
  const s = uri.startsWith('http') ? uri : `https://${uri}`
  return s.replace('http://', 'https://')
}

export default (uri: string) => {
  const cleanURI: string = normalize(uri)
  return [...modules, defaultModule]
    .find((m: Module) => m.match(cleanURI))
    ?.transform(cleanURI)
}
