import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

interface AuthresponseData {
	username: string;
	password: string;
	token: string;
}

@Injectable({
	providedIn: 'root'
})

export class AuthService {

	constructor(private http: HttpClient, private router:Router) { }

	login(username: string, password: string) {
		return this.http.post<AuthresponseData>(`http://103.127.29.85:3000/api/admin/login`,
			{ username, password }
		)
	}

	logout(){
		localStorage.removeItem('userData');
		localStorage.removeItem('token');
		localStorage.removeItem('newProjectData');
		this.router.navigate(['auth']);
	}
}