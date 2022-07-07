declare module "myPackage" {
  export interface Config {
    url: string;
  }

  export function init(config: Config): boolean;
  export function exit(code: number): number;
}
