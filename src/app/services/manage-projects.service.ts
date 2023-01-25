import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { User } from "../models/users.model";

@Injectable({
	providedIn: 'root'
})

export class ManageProjectsService{
    user: any = new BehaviorSubject<User | null>(null);

    constructor(private http: HttpClient, private router:Router) { }

    getUsers(){

        let auth_token = JSON.parse(localStorage.getItem('token'));
        console.log(auth_token);
        // console.log(auth_token.content.dataList);
        

        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth_token}`
        });
    
        const requestOptions = { headers: headers };
        return this.http.get<User>("http://103.127.29.85:3000/api/admin/manage-project/", requestOptions)
        .subscribe((response) => {
            console.log(response);
            
        });
    }

 

}