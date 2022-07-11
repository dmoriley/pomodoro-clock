// for typescript to recognize scss modules
declare module '*.module.scss' {
  const classes: Record<string, string>;
  export default classes;
}
