import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  v: any = ""
  myData: any[] = []
  // status: boolean = true
  constructor(private _data: DataService) { }
  // changestatus() {
  //   this.status = !this.status
  // }

  ngOnInit(): void {
    this._data.getAllPosts().subscribe(data => {
      // console.log(data)
      this.myData = data
    })
  }
}


