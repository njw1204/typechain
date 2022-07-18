import { Block, MyBlock } from "./MyBlock";

export interface BlockChain<T extends Block> {
  getBlocks(): T[];
  addBlock(data: string | T): boolean;
}

export class MyBlockChain implements BlockChain<MyBlock> {
  private blocks: MyBlock[] = [];

  getBlocks() {
    return [...this.blocks];
  }

  addBlock(data: string | MyBlock): boolean {
    let block: MyBlock;

    if (typeof data === "string") {
      block = new MyBlock(this.getLatestHash(), this.blocks.length, data);
    } else {
      block = data;
    }

    if (this.validateBlock(block)) {
      this.blocks.push(block);
      return true;
    }

    return false;
  }

  validateBlock(block: MyBlock): boolean {
    return (
      block.hash ===
        MyBlock.calculateHash(block.prevHash, block.height, block.data) &&
      block.prevHash === this.getLatestHash() &&
      block.height === this.blocks.length
    );
  }

  getLatestHash(): string {
    if (this.blocks.length === 0) {
      return "";
    }

    return this.blocks[this.blocks.length - 1].hash;
  }
}
