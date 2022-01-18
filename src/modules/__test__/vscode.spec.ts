import vscode from '../vscode'

const uri = 'file:///Users/foo/bar.code-workspace'
const deepLink = 'vscode://file/Users/foo/bar.code-workspace'

describe('VS Code', () => {
  it('should return id', () => {
    expect(vscode.id).toEqual('vscode')
  })

  it('should not match', () => {
    expect(vscode.match('foo')).toBeFalsy()
  })

  it('should match', () => {
    expect(vscode.match(uri)).toBeTruthy()
  })

  it('should return deep link', () => {
    expect(vscode.transform(uri)).toEqual(deepLink)
  })
})
