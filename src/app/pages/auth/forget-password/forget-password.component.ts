import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
	isSellerLoggedIn = new BehaviorSubject<boolean>(false);

	showError: boolean = false;


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onFormSubmit(loginForm: NgForm) {

		if (!loginForm.valid) {
			return;
		}

		this.authService.login(loginForm.value.email, loginForm.value.password).subscribe((result: any) => {

			if (result && result.content.dataList[0]) {
				this.isSellerLoggedIn.next(true);
				localStorage.setItem('userData', JSON.stringify(result.content.dataList[0].userDetails));
				localStorage.setItem('token', JSON.stringify(result.content.dataList[0].token));
			}


			if (JSON.parse(localStorage.getItem('token'))) {
				this.router.navigate(['/home-page/workspace']);
				// console.log('login successful');
			} else {
				this.showError = true;
				console.log('Invalid user');

			}


		});


	}


}
