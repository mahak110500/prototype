import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DROPDOWN } from 'src/app/dropdown-mock';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
	dropdowns = DROPDOWN;

	dropdownValue!: FormGroup;
	dropDownCode?: string = "";

	constructor(private authService: AuthService, private fromBuilder: FormBuilder) { }

	ngOnInit(): void {
		this.dropdownValue = this.fromBuilder.group({
			dropdown: ['']
		})
	}

	dropdown(e:any){
		console.log(e.target.value);
		this.dropDownCode = e.target.value;
		
	}

	onLogout() {
		this.authService.logout();
	}



}
