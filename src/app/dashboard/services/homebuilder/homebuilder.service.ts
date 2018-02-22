import { Injectable } from "@angular/core";

@Injectable()
export class HomebuilderService {
  constructor() {}
  gerData(): Array<Object> {
    return homebuilderMockData;
  }
}

const homebuilderMockData: Array<Object> = [
  {
    iconPath: "./assets/dashboard/homebuilder/hom-icon.png",
    avatarPath: "./assets/dashboard/activity/act-user.png",
    title: "Buy Windows",
    description: "#de 8001 Description lorem ipsum",
    code: "ABC",
    badgeText: "High Price",
    badgeColor: "red"
  },
  {
    iconPath: "./assets/dashboard/homebuilder/hom-icon.png",
    avatarPath: "./assets/dashboard/activity/act-user.png",
    title: "Buy Windows",
    description: "#de 8001 Description lorem ipsum",
    code: "ABC",
    badgeText: "Tomorrow",
    badgeColor: "yellow"
  },
  {
    iconPath: "./assets/dashboard/homebuilder/hom-icon.png",
    avatarPath: "./assets/dashboard/activity/act-user.png",
    title: "Buy Windows",
    description: "#de 8001 Description lorem ipsum",
    code: "ABC",
    badgeText: "Low",
    badgeColor: "green"
  }
];
