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


		return this.http.post<any>(`http://103.127.29.85:3000/api/admin/save-customer-project`, formData, options)


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



	uploadFile(id: any) {

		let auth_token = JSON.parse(localStorage.getItem('token'));
		// console.log(auth_token);

		const headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `${auth_token}`
		});

		const options = { headers: headers }

		this.http.post<FormresponseData>(`http://103.127.29.85:3000/api//admin/upload-doc`, options)
	}
}
