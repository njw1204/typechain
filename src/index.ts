import { exit, init } from "./myPackage";

class Block {
  constructor(private data: string) {}
  static hello() {
    init({ url: "test" });
    exit(1);
    return document.querySelector(".hello");
  }
}
