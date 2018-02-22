import { Injectable } from "@angular/core";

@Injectable()
export class ActivityService {
  constructor() {}
  gerData(): Array<Object> {
    return activityMockData;
  }
}

const activityMockData: Array<Object> = [
  {
    avatarPath: "./assets/dashboard/activity/act-user.png",
    name: "John R.Doe",
    activity: "Uploaded Photos",
    address: "365 Boyer Circle, Lafeyalete",
    code: "#DE80090",
    date: "Today at 1.22 PM",
    images: [
      "./assets/dashboard/activity/act-comment-image.png",
      "./assets/dashboard/activity/act-comment-image.png",
      "./assets/dashboard/activity/act-comment-image.png",
      "./assets/dashboard/activity/act-comment-image.png"
    ],
    isActive: false
  },
  {
    avatarPath: "./assets/dashboard/activity/act-user.png",
    name: "John R.Doe",
    activity: "Uploaded Photos",
    address: "365 Boyer Circle, Lafeyalete",
    code: "#DE80090",
    date: "Today at 1.22 PM",
    isActive: false
  },
  {
    avatarPath: "./assets/dashboard/activity/act-user.png",
    name: "John R.Doe",
    activity: "Uploaded Photos",
    address: "365 Boyer Circle, Lafeyalete",
    code: "#DE80090",
    date: "Today at 1.22 PM",
    isActive: true
  },
  {
    avatarPath: "./assets/dashboard/activity/act-user.png",
    name: "John R.Doe",
    activity: "Uploaded Photos",
    address: "365 Boyer Circle, Lafeyalete",
    code: "#DE80090",
    date: "Today at 1.22 PM",
    isActive: false,
    hasContract: true
  }
];
