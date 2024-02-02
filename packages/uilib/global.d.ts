declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  //@ts-ignore
  export default classes;
}

declare module "*.module.sass" {
  const classes: { readonly [key: string]: string };
  //@ts-ignore
  export default classes;
}

declare module "*.module.scss" {
  const classes: { readonly [key: string]: string };
  //@ts-ignore
  export default classes;
}
