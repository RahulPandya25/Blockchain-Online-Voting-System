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
  reason;
  nominations;
  choice;

  blockChain: CryptoBlockChain;
  data = [];

  submitVote(id) {
    if (id != "" && this.choice != undefined) {
      let data = {
        by: id,
        vote: this.choice,
      };
      this.blockChain.addData(JSON.stringify(data));
    }
  }

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.reason = params["reason"];
      this.nominations = params["nominations"];
    });

    this.blockChain = new CryptoBlockChain();
  }
}
