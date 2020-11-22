import { SHA256, AES } from "crypto-js";
import { CommonService } from "src/services/common.service";

export class CryptoBlock {
  timestamp;
  data;
  precedingHash;
  hash;

  computeHash() {
    return SHA256(this.precedingHash + this.timestamp + this.data).toString();
  }

  encryptData(data) {
    return AES.encrypt(data, CommonService.KEY);
  }

  constructor(timestamp, data, precedingHash = " ") {
    this.timestamp = timestamp;
    this.precedingHash = precedingHash;
    this.data = this.encryptData(data);
    this.hash = this.computeHash();
  }
}
