import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CryptoBlockChain } from "src/classes/crypto-block-chain";
import { CommonService } from "src/services/common.service";

@Component({
  selector: "app-voting",
  templateUrl: "./voting.component.html",
  styleUrls: ["./voting.component.scss"],
})
export class VotingComponent implements OnInit {
  waitTime = 1500;
  reason;
  nominations;
  choice;
  errorMessage = "";
  showErrorMessage = false;
  isLoading = false;
  isDecryptOn = false;
  blockChain: CryptoBlockChain;
  data = [];
  encryptedChain: CryptoBlockChain;

  submitVote(id) {
    if (id != "" && this.choice != undefined) {
      let data = {
        by: id,
        vote: this.choice,
      };
      this.blockChain.addData(JSON.stringify(data));
      this.encryptedChain = Object.assign(this.blockChain);
      console.log(this.encryptedChain);
      console.log(this.blockChain);
    }
  }

  async decrypt() {
    this.isLoading = true;
    await this.delay(this.waitTime);
    this.isLoading = false;

    for (let index = 0; index < this.blockChain.blockchain.length; index++) {
      const element = this.blockChain.blockchain[index];
      const decryptedData = CommonService.decryptData(element.data);
      this.blockChain.blockchain[index].data = decryptedData;
    }
    this.isDecryptOn = true;
    console.log("done");
    console.log(this.encryptedChain);
    console.log(this.blockChain);
  }

  async encrypt() {
    this.isLoading = true;
    await this.delay(this.waitTime);
    this.isLoading = false;

    this.blockChain = new CryptoBlockChain();
    this.blockChain = Object.assign(this.encryptedChain);
    this.isDecryptOn = false;
    console.log("done");
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  checkValidity() {
    if (this.blockChain.checkChainValidity()) {
      this.errorMessage = "Congrats! Blockchain is Valid!";
      this.showErrorMessage = true;
    } else {
      this.errorMessage = "Oops! Blockchain is Invalid!";
      this.showErrorMessage = true;
    }
  }

  constructor(
    private route: ActivatedRoute,
    public commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.reason = params["reason"];
      this.nominations = params["nominations"];
    });

    this.blockChain = new CryptoBlockChain();
    this.encryptedChain = new CryptoBlockChain();
  }
}
