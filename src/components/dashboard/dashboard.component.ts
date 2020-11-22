import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";
import { Router } from "@angular/router";
import { CommonService } from "src/services/common.service";
import { CryptoBlockChain } from "../../classes/crypto-block-chain";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  textValue: String;
  currentTags = [];
  errorMessage = "";
  showErrorMessage = false;
  constructor(private router: Router) {}

  addTag(e) {
    if (e.target.value != "") {
      if (!_.includes(this.currentTags, e.target.value))
        this.currentTags.push(e.target.value);
      e.target.value = "";
    }
  }
  removeTag(tag) {
    _.remove(this.currentTags, function (element) {
      return element === tag;
    });
  }

  submit(text) {
    if (text != "") {
      if (this.currentTags.length > 1) {
        let info = {
          reason: text,
          nominations: this.currentTags,
        };

        console.log(info);

        this.router.navigate(["/vote"], {
          queryParams: info,
        });
      } else {
        this.errorMessage = "Add atleast 2 Nominee";
        this.showErrorMessage = true;
      }
    } else {
      this.errorMessage = "Please tell us what is this voting for?";
      this.showErrorMessage = true;
    }
  }

  ngOnInit(): void {}
}
