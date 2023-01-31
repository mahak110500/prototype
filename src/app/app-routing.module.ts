import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/home-page/admin/admin.component';
import { ConfigureComponent } from './pages/home-page/configure/configure.component';
import { ExtractComponent } from './pages/home-page/extract/extract.component';
import { ManageProjectsComponent } from './pages/home-page/manage-projects/manage-projects.component';
import { NewProjectComponent } from './pages/home-page/new-project/new-project.component';
import { WorkspaceComponent } from './pages/home-page/workspace/workspace.component';
import { AuthComponent } from './pages/auth/auth.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AuthGuard } from './pages/auth/auth.guard';
import { ForgetPasswordComponent } from './pages/auth/forget-password/forget-password.component';

const routes: Routes = [
	{ path: '', redirectTo: 'auth', pathMatch: 'full' },
	{
		path: 'auth',
		component: AuthComponent,
		// canActivate: [AuthGuard]
	
	},
	{
		path: 'forget-password',
		component: ForgetPasswordComponent,
	
	},
	{
		path: 'home-page',
		component: HomePageComponent,
		canActivate: [AuthGuard]
	
	},
	{
		path: 'workspace',
		component: WorkspaceComponent,
		canActivate: [AuthGuard]

	
	},
	{
		path: 'manage-projects',
		component: ManageProjectsComponent,
		canActivate: [AuthGuard]


	
	},
	{
		path: 'new-project',
		component: NewProjectComponent,
		canActivate: [AuthGuard]

	
	},
	{
		path: 'extract',
		component: ExtractComponent,
		canActivate: [AuthGuard]

	
	},
	{
		path: 'configure',
		component: ConfigureComponent,
		canActivate: [AuthGuard]

	
	},
	{
		path: 'admin',
		component: AdminComponent,
		canActivate: [AuthGuard]

	
	},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
