import { Component, OnInit } from '@angular/core';
import { TaskdataService } from 'src/app/services/taskdata.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  myRoles: any = ""
  constructor(private _roles: TaskdataService) { }

  ngOnInit(): void {
    this._roles.getAllRoles().subscribe((roles: any) => {
      console.log(roles.data)
      this.myRoles = roles.data
    })
  }

}

