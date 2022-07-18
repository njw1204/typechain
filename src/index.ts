import { MyBlock } from "./MyBlock";
import { MyBlockChain } from "./MyBlockChain";

const blockchain = new MyBlockChain();

blockchain.addBlock("FIRST");
blockchain.addBlock("SECOND");
blockchain.addBlock("THIRD");
blockchain.addBlock("FOURTH");
blockchain.addBlock(
  new MyBlock(
    blockchain.getLatestHash(),
    blockchain.getBlocks().length + 1,
    "INVALID"
  )
);
blockchain.addBlock(
  new MyBlock("ffffff", blockchain.getBlocks().length, "INVALID")
);
blockchain.addBlock(
  new MyBlock(
    blockchain.getLatestHash(),
    blockchain.getBlocks().length,
    "FIFTH"
  )
);

console.log(blockchain.getBlocks());
