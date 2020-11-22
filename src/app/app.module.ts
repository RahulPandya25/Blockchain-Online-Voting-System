import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "src/components/dashboard/dashboard.component";
import { VotingComponent } from "src/components/voting/voting.component";
import { LoadingComponent } from "src/components/loading/loading.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    VotingComponent,
    LoadingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
