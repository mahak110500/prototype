import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, Observable, take } from 'rxjs';
import { AuthService } from './auth.service';
import { ManageProjectsService } from './manage-projects.service';

@Injectable({
	providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

	constructor(private manage:ManageProjectsService) { }

	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		return this.manage.user.pipe(
			take(1),
			exhaustMap((user) => {
				let data: any = user;
				if (!user) {
					return next.handle(req);
				}
				const modRequest = req.clone({
					setHeaders: {
						Authorization: 'Bearer ' + data.token,
					},
				});
				return next.handle(modRequest);
			})
		);
	}

	// intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
	// 	let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MSwiZW1haWwiOiJ0ZXN0d29ya0BtYWlsaW5hdG9yLmNvbSJ9LCJpYXQiOjE2NzQ2NDk4MDEsImV4cCI6MTY3NDczNjIwMX0.Lk52gKPShKFZkWAsnl39SfYZT5xVmb7flgn1jWnPcEI';

	// 	let jwttoken = req.clone({
	// 		setHeaders:{
	// 			Authorization: 'bearer' + token
	// 		}
	// 	})
	// 	return next.handle(jwttoken);
	// }
}
