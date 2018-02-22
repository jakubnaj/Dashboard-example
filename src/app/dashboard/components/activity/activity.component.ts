import { Component, OnInit } from "@angular/core";
import { ActivityService } from "../../services/activity/activity.service";

@Component({
  selector: "app-activity",
  templateUrl: "./activity.component.html",
  styleUrls: ["./activity.component.scss"]
})
export class ActivityComponent implements OnInit {
  comments: Array<Object>;
  constructor(private activityService: ActivityService) {}

  ngOnInit() {
    this.getComments();
  }

  getComments(): void {
    this.comments = this.activityService.gerData();
  }
}
