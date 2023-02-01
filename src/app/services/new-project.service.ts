import { HttpClient, HttpHeaders, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserData } from '../models/userData.model';




@Injectable({
	providedIn: 'root'
})
export class NewProjectService {
	profileForm: any;
	newProjectData: any;
	customerId:any;
	projectId:any;

	constructor(private http: HttpClient) { }

	postDetails(formData) {
		this.profileForm = formData;


		let auth_token = JSON.parse(localStorage.getItem('token'));
		// console.log(auth_token);

		const headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `${auth_token}`
		});

		const options = { headers: headers }
		// console.log(options);


		return this.http.post<UserData>(`http://103.127.29.85:3000/api/admin/save-customer-project`, formData, options)


	}

	getDetails() {
		this.newProjectData = JSON.parse(localStorage.getItem('newProjectData'));

		let customerId = this.newProjectData.customer_insertId;
		let projectId = this.newProjectData.project_insertId;

		let auth_token = JSON.parse(localStorage.getItem('token'));

		const headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `${auth_token}`
		});

		const options = { headers: headers }


		return this.http.get(`http://103.127.29.85:3000/api/admin/getcustomerbyid/`+projectId, options

		)
	}

	putDetails(formData){
		this.profileForm = formData;
		console.log(this.profileForm);
		
		

		this.newProjectData = JSON.parse(localStorage.getItem('newProjectData'));
		let customerId = this.newProjectData.customer_insertId;
		let projectId = this.newProjectData.project_insertId;



		let auth_token = JSON.parse(localStorage.getItem('token'));
		const headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `${auth_token}`
		});
		const options = { headers: headers }

		return this.http.put<UserData>(`http://103.127.29.85:3000/api/admin/update-customer-project/`+customerId+`/project/`+projectId, formData, options)


	}



	uploadFile(files:any) {

		this.newProjectData = JSON.parse(localStorage.getItem('newProjectData'));

		let customerId = this.newProjectData.customer_insertId;
		let projectId = this.newProjectData.project_insertId;

		let file : File = files[0];
		
		
		const formData = new FormData();
		formData.append('customerId', customerId);
		formData.append('projectId', projectId);
		formData.append('file', file);
		let auth_token = JSON.parse(localStorage.getItem('token'));

		const headers = new HttpHeaders({
			'Authorization': `${auth_token}`
		});

		const options = { headers: headers }
		// const FormData = { customerId, projectId }


		return this.http.post<any>(`http://103.127.29.85:3000/api//admin/upload-doc`,formData,options)
	}
}
