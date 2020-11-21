import { SHA256, AES } from "crypto-js";
import { CommonService } from "src/services/common.service";

export class CryptoBlock {
  timestamp;
  data;
  precedingHash;
  hash;

  computeHash() {
    return SHA256(
      this.precedingHash + this.timestamp + JSON.stringify(this.data)
    ).toString();
  }

  encryptData(data) {
    return AES.encrypt(data, CommonService.KEY);
  }

  constructor(timestamp, data, precedingHash = " ") {
    this.timestamp = timestamp;
    this.precedingHash = precedingHash;
    this.hash = this.computeHash();
    this.data = this.encryptData(data);
  }
}
