import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-viewer',
  templateUrl: './profile-viewer.component.html',
  styleUrls: ['./profile-viewer.component.css']
})
export class ProfileViewerComponent implements OnInit {
  @Input() userData :any;
  constructor() { }
  ngOnInit(): void { }
  public rows: Array<{name: string, email: string}> = [];
  deleteButton() {
    this.userData.length;
    this.userData.pop()
  }
}
