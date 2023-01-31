import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
	

	showMore = 'ADMIN'
	hidden: boolean;

	constructor(private authService: AuthService) { }

	ngOnInit(): void {
		
	}

	toggle() {
		this.hidden = !this.hidden;
		if (this.hidden) {
			this.showMore = 'show less'
		}

		if (!this.hidden) {
			this.showMore = ' show more'
		}
	}

	

	onLogout() {
		this.authService.logout();
	}



}
