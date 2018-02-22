import { Component, OnInit } from "@angular/core";
import { HomebuilderService } from "../../services/homebuilder/homebuilder.service";

@Component({
  selector: "app-homebuilder",
  templateUrl: "./homebuilder.component.html",
  styleUrls: ["./homebuilder.component.scss"]
})
export class HomebuilderComponent implements OnInit {
  items: Array<Object>;
  constructor(private homeBuilderService: HomebuilderService) {}

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.items = this.homeBuilderService.gerData();
  }
}
