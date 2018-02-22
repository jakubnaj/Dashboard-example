import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { ActivityComponent } from "./components/activity/activity.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { HomebuilderComponent } from "./components/homebuilder/homebuilder.component";
import { CommentComponent } from "./components/comment/comment.component";
import { ActivityService } from "./services/activity/activity.service";
import { HomebuilderItemComponent } from "./components/homebuilder-item/homebuilder-item.component";
import { HomebuilderService } from "./services/homebuilder/homebuilder.service";

@NgModule({
  imports: [CommonModule],
  declarations: [
    DashboardComponent,
    NavigationComponent,
    ActivityComponent,
    HomebuilderComponent,
    CommentComponent,
    HomebuilderItemComponent
  ],
  exports: [DashboardComponent],
  providers: [ActivityService, HomebuilderService]
})
export class DashboardModule {}
