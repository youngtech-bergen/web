declare module '*.scss' {
  export const value: { [className: string]: string }
  export default value
}

declare module '*.md' {
  const value: any
  export default value
}
