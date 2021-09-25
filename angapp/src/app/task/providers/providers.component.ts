import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TaskdataService } from 'src/app/services/taskdata.service';



@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {
  myRoles: any = ""
  constructor(private _activatedRoute: ActivatedRoute, private _roles: TaskdataService) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(roles => {
      console.log(roles.data.id)
      this._roles.data.getProvider(roles.data.id).subscribe((all: any) => {
        console.log(all)
        this.myRoles = all
      })
    })
  }

}
