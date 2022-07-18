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

  static calculateHash(prevHash: string, height: number, data: string) {
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

class MyBlockChain {
  private blocks: MyBlock[] = [];

  getBlocks() {
    return [...this.blocks];
  }

  addBlock(data: string) {
    this.blocks.push(new MyBlock(this.getPrevHash(), this.blocks.length, data));
  }

  private getPrevHash(): string {
    if (this.blocks.length === 0) {
      return "";
    }

    return this.blocks[this.blocks.length - 1].hash;
  }
}

const blockchain = new MyBlockChain();

blockchain.addBlock("FIRST");
blockchain.addBlock("SECOND");
blockchain.addBlock("THIRD");
blockchain.addBlock("FOURTH");

console.log(blockchain.getBlocks());
