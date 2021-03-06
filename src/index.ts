import modules from './modules'
import Module from './Module'

export * from './modules'

export const defaultModule = {
  id: 'default',
  match: () => true,
  transform: (uri: string): string => uri,
  open: () => '',
}

const allModules = [...modules, defaultModule]

export interface Options {
  excludes?: Array<string>
}

export const getListOfModules = () => allModules.map((m) => m.id)

export default (uri: string, options: Options) => {
  return allModules
    .filter((m: Module) => !(options?.excludes || []).includes(m.id))
    .find((m: Module) => m.match(uri))
    ?.transform(uri)
}
