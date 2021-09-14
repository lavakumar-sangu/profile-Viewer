import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  public name: any;
  public email: any;
  public rows: Array<{name: string, email: string}> = [];

  buttonClicked() {
    this.rows.push( {name: this.name, email: this.email} );
    this.name = null;
    this.email = null;
  }
}
