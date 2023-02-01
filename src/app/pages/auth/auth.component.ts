import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BehaviorSubject } from "rxjs";
import { HttpErrorResponse } from '@angular/common/http';


@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
	isSellerLoggedIn = new BehaviorSubject<boolean>(false);

	data: any;
	showError: boolean = false;

	constructor(private authService: AuthService, private router: Router) { }

	ngOnInit(): void {
	}

	onFormSubmit(loginForm: NgForm) {

		if (!loginForm.valid) {
			return;
		}



		this.authService.login(loginForm.value.email, loginForm.value.password).subscribe((result: any) => {
			this.data = result;

			if (result && result.content.dataList[0]) {
				this.isSellerLoggedIn.next(true);
				localStorage.setItem('userData', JSON.stringify(result.content.dataList[0].userDetails));
				localStorage.setItem('token', JSON.stringify(result.content.dataList[0].token));


				JSON.parse(localStorage.getItem('newProjectData'));
			}


			if (JSON.parse(localStorage.getItem('token'))) {
				this.router.navigate(['/home-page/workspace']);
				console.log('login successful');
			} else {
				this.showError = true;
				console.log('Invalid user');

			}


		});

		// JSON.parse(localStorage.getItem('token'));
		// console.log(localStorage.getItem('token'));


		// if(localStorage.getItem('token') != null){
		// 	 this.router.navigate(['/home-page']);
		// } else {
		// 	loginForm.errors({ unauthenticated: true });
		// }


	}

}
