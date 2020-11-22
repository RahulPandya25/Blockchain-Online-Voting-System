import { CryptoBlock } from "./crypto-block";

export class CryptoBlockChain {
  blockchain;

  constructor() {
    this.blockchain = [this.startGenesisBlock()];
  }
  startGenesisBlock() {
    return new CryptoBlock(
      new Date(),
      "Initial Block in the Chain - Genesis Block",
      "0"
    );
  }
  obtainLatestBlock() {
    return this.blockchain[this.blockchain.length - 1];
  }

  addData(data) {
    let lastBlock = this.obtainLatestBlock();
    let newBlock: CryptoBlock = new CryptoBlock(
      new Date(),
      data,
      lastBlock.hash
    );
    this.blockchain.push(newBlock);
  }

  checkChainValidity() {
    for (let i = 1; i < this.blockchain.length; i++) {
      const currentBlock = this.blockchain[i];
      const precedingBlock = this.blockchain[i - 1];

      if (currentBlock.hash !== currentBlock.computeHashForValidity()) {
        return false;
      }
      if (currentBlock.precedingHash !== precedingBlock.hash) return false;
    }
    return true;
  }
}
