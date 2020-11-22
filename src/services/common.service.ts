import { Injectable } from "@angular/core";
import { AES, enc } from "crypto-js";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  public static KEY = "I am Secret!";

  public static decryptData(cipher) {
    // decryption
    let data = AES.decrypt(cipher, CommonService.KEY);
    // encoding
    return enc.Utf8.stringify(data);
  }

  constructor() {}
}
