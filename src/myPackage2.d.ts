declare module "myPackage2" {
  export interface Config {
    url: string;
  }

  export function init(config: Config): boolean;
  export function exit(code: number): number;
}
