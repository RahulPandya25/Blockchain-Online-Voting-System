import { Component, OnInit } from "@angular/core";
import { CommonService } from "src/services/common.service";
import { CryptoBlockChain } from "../../classes/crypto-block-chain";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  blockChain: CryptoBlockChain;
  textValue: String;
  data = [];
  constructor() {}

  addBlock(data) {
    console.log(data);
    this.blockChain.addData(data);
  }

  decrypt() {
    for (let index = 1; index < this.blockChain.blockchain.length; index++) {
      const element = this.blockChain.blockchain[index];

      this.data.push(CommonService.decryptData(element.data));
    }
  }

  ngOnInit(): void {
    this.blockChain = new CryptoBlockChain();
  }
}
