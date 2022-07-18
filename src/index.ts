import _ from "lodash";
import crypto from "crypto";

interface Block {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}

class MyBlock implements Block {
  public readonly hash: string;

  constructor(
    public readonly prevHash: string,
    public readonly height: number,
    public readonly data: string
  ) {
    this.hash = MyBlock.calculateHash(prevHash, height, data);
  }

  private static calculateHash(prevHash: string, height: number, data: string) {
    return crypto
      .createHash("sha256")
      .update(
        JSON.stringify(
          _.toPairs({
            prevHash,
            height,
            data,
          })
        )
      )
      .digest("hex");
  }
}
