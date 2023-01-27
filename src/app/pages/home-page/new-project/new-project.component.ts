import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxFileDropEntry } from 'ngx-file-drop';

@Component({
	selector: 'app-new-project',
	templateUrl: './new-project.component.html',
	styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

	profileFormGroup: FormGroup;
	resultImg:string = '' ;

	constructor(private fb: FormBuilder) { }

	ngOnInit(): void {
		this.profileFormGroup = this.fb.group({
			firstname: ['', Validators.required],
			lastname: ['', Validators.required],
			email: ['', Validators.required],
			phoneno: ['', Validators.required],
			address: ['', Validators.required],
			projectName: ['', Validators.required],
			completePercent: ['', Validators.required],
			startDate: ['', Validators.required],
			endDate: ['', Validators.required],
			description: ['', Validators.required],
		})
	}

	onUpload(event:any):void{
		var selectFile = event.target.files;
		for(var i =0; i < selectFile.length; i++ ){
			this.resultImg += '<br> File name: ' +  selectFile[i].name; 
		}
	}

	public files: NgxFileDropEntry[] = [];

	public dropped(files:NgxFileDropEntry[]){
		// console.log(files);
		this.files = files;
		
	}
}
