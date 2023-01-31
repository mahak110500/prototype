import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewProjectService } from 'src/app/services/new-project.service';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-new-project',
	templateUrl: './new-project.component.html',
	styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {


	profileFormGroup: FormGroup;
	resultImg: string = '';

	files: any[] = [];

	profileForm: any = {}
	newData: any;

	newProjectData: any;
	url: any = '';


	constructor(private fb: FormBuilder, private newService: NewProjectService, private router: Router) { }

	ngOnInit(): void {
		this.profileFormGroup = this.fb.group({
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
			orderId: '',
			email: ['', Validators.required],
			phone: ['', Validators.required],
			address: ['', Validators.required],
			projectName: ['', Validators.required],
			completePercent: ['', Validators.required],
			startDate: ['', Validators.required],
			endDate: ['', Validators.required],
			projectDescription: ['', Validators.required],

		})


	}

	onSubmit(profileFormGroup) {
		this.profileForm = profileFormGroup.value;
		console.log(this.profileForm);

		this.newService.postDetails(this.profileForm).subscribe((res: any) => {
			// console.log(res.content.dataList[0]);

			localStorage.setItem('newProjectData', JSON.stringify(res.content.dataList[0]));


		});

	}

	onFinish(profileFormGroup) {
		this.profileForm = profileFormGroup.value;
		// console.log(this.profileForm);

		this.newService.getDetails(this.profileForm);
		this.router.navigate(['/manage-projects']);
	}

	//For drag and drop and uploading files

	/**
	  * on file drop handler
	  */
	onFileDropped($event: any) {
		this.prepareFilesList($event);
		// this.onSelectFile($event);
		
	}

	/**
	 * handle file from browsing
	 */
	fileBrowseHandler(files) {
		this.prepareFilesList(files);

	}

	onDownload(path: any) {
		console.log(path);
		
		if (path.split('.') === "pdf" ||
			path.split('.') === "doc" ||
			path.split('.') === "docx" ||
			path.split('.') === "txt" ||
			path.split('.') === "xlsx" ||
			path.split('.') === "xls" ||
			path.split('.') === "csv"
		) {
			var link = document.createElement('a');
			link.href = 'http://103.127.29.85/prototype/node-backend/uploads/' + path;
			link.download = 'http://103.127.29.85/prototype/node-backend/uploads/' + path;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		} else {
			window.open('http://103.127.29.85/prototype/node-backend/uploads/' + path, '_blank');
		}
	}

	

	
	/**
	 * Delete file from files list
	 * @param index (File index)
	 */
	deleteFile(index: number) {
		this.files.splice(index, 1);
	}

	/**
	 * Simulate the upload process
	 */
	uploadFilesSimulator(index: number) {
		setTimeout(() => {
			if (index === this.files.length) {
				return;
			} else {
				const progressInterval = setInterval(() => {
					if (this.files[index].progress === 100) {
						clearInterval(progressInterval);
						this.uploadFilesSimulator(index + 1);
					} else {
						this.files[index].progress += 5;
					}
				}, 200);
			}
		}, 1000);
	}

	/**
	* Convert Files list to normal array list
	* @param files (Files List)
	*/
	prepareFilesList(files: any) {
		console.log(files);


		for (const item of files) {
			item.progress = 0;
			this.files.push(item);
		}
		this.uploadFilesSimulator(0);
		// this.newService.uploadFile(files).subscribe(res => {
		// 	// console.log(res);

		// })
	}

	/**
	 * format bytes
	 * @param bytes (File size in bytes)
	 * @param decimals (Decimals point)
	 */
	formatBytes(bytes, decimals) {
		if (bytes === 0) {
			return '0 Bytes';
		}
		const k = 1024;
		const dm = decimals <= 0 ? 0 : decimals || 2;
		const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
		const i = Math.floor(Math.log(bytes) / Math.log(k));
		return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
	}




}
function ViewChild(arg0: string) {
	throw new Error('Function not implemented.');
}

