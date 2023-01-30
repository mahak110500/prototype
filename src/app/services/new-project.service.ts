import { HttpClient, HttpHeaders, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserData } from '../models/userData.model';


interface FormresponseData {
	customer_insertId: number
	project_insertId: number
}

@Injectable({
	providedIn: 'root'
})
export class NewProjectService {
	profileForm: any;
	newProjectData:any;


	constructor(private http: HttpClient) { }

	postDetails(formData) {
		this.profileForm = formData;
		// console.log(formData);
		

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

	getDetails(formData) {
		this.profileForm = formData;

		let auth_token = JSON.parse(localStorage.getItem('token'));

		const headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `${auth_token}`
		});

		const options = { formData, headers: headers }


		this.http.get<UserData>(`http://103.127.29.85:3000/api/admin/getcustomerbyid/328`, options

		).subscribe((result) => {
			// console.log(result);
		})
	}



	uploadFile() {
		this.newProjectData = JSON.parse(localStorage.getItem('newProjectData'));
		console.log(this.newProjectData);

		
		this.newProjectData = JSON.parse(localStorage.getItem('newProjectData'));
		console.log(this.newProjectData);
		console.log(this.newProjectData.customer_insertId);

		let customerId = this.newProjectData.customer_insertId;
		console.log(customerId);

		let projectId = this.newProjectData.project_insertId;
		console.log(projectId);
		

		let newData = { 'customerId':customerId, 'projectId': projectId};
		console.log(newData);
		
		
	

		let auth_token = JSON.parse(localStorage.getItem('token'));
		// console.log(auth_token);

		const headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `${auth_token}`
		});

		const options = { headers: headers }

		return this.http.post<FormresponseData>(`http://103.127.29.85:3000/api//admin/upload-doc`, newData,options)
	}
}
