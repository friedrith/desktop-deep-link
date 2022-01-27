import OpenOptions from './OpenOptions'

export default interface Module {
  id: string
  match(_: string): boolean
  transform(url: string): string
  open(options: OpenOptions): string
}
