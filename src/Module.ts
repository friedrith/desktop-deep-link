export default interface Module {
  match(_: string): boolean
  transform(url: string): string
}
