import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-voting",
  templateUrl: "./voting.component.html",
  styleUrls: ["./voting.component.scss"],
})
export class VotingComponent implements OnInit {
  reason;
  nominations;
  choice;

  submitVote(id) {
    if (id != "" && this.choice != undefined) {
      console.log(this.choice);
      console.log(id);
    }
  }

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.reason = params["reason"];
      this.nominations = params["nominations"];
    });
  }
}
