import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "src/components/dashboard/dashboard.component";
import { VotingComponent } from "src/components/voting/voting.component";

const routes: Routes = [
  // default route
  { path: "", component: DashboardComponent },
  { path: "vote", component: VotingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
