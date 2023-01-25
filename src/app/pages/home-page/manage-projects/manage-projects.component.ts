import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ManageProjectsService } from 'src/app/services/manage-projects.service';

@Component({
  selector: 'app-manage-projects',
  templateUrl: './manage-projects.component.html',
  styleUrls: ['./manage-projects.component.css']
})
export class ManageProjectsComponent implements OnInit {

  constructor(private manage: ManageProjectsService) { }

  ngOnInit(): void {
		this.manage.getUsers();
  }


  

}
