import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: 'app-homebuilder-item',
  templateUrl: './homebuilder-item.component.html',
  styleUrls: ['./homebuilder-item.component.scss']
})
export class HomebuilderItemComponent implements OnInit {
  @Input() item: Object;
  constructor() { }

  ngOnInit() {
  }

}
