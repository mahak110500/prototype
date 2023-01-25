import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

	constructor(private authService: AuthService, private router: Router) { }

	ngOnInit(): void {
	}

	onFormSubmit(loginForm: NgForm) {

		if (!loginForm.valid) {
			return;
		}

		this.authService.login(loginForm.value.email, loginForm.value.password);

	}

}
