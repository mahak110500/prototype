import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ManageProjectsService } from 'src/app/services/manage-projects.service';

@Component({
	selector: 'app-manage-projects',
	templateUrl: './manage-projects.component.html',
	styleUrls: ['./manage-projects.component.css']
})
export class ManageProjectsComponent implements OnInit {
	projectData: any = [];
	dataList:any = [];
	p:any;

	constructor(private manage: ManageProjectsService) { }

	ngOnInit(): void {
		this.manage.getUsers().subscribe((res) => {
			this.projectData = res;
			console.log(this.projectData.content.dataList);
			this.dataList = this.projectData.content.dataList;
		});

	}




}
