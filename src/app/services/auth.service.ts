import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from "rxjs";
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
	isSellerLoggedIn = new BehaviorSubject<boolean>(false);


	constructor(private http: HttpClient, private router:Router) { }

	login(username: string, password: string) {
		this.http.post<AuthresponseData>(`http://103.127.29.85:3000/api/admin/login`,
			{ username, password }
		).subscribe((result:any) =>{
			this.isSellerLoggedIn.next(true);
			localStorage.setItem('userData',JSON.stringify(result.content.dataList[0].userDetails));
			localStorage.setItem('token',JSON.stringify(result.content.dataList[0].token));

			this.router.navigate(['/home-page']);

			console.log(result);
			
		})
	}
}