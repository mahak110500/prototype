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
import { BillingComponent } from './pages/home-page/admin/billing/billing.component';
import { CapacityComponent } from './pages/home-page/admin/capacity/capacity.component';
import { InstanceManagementComponent } from './pages/home-page/admin/instance-management/instance-management.component';
import { UserManagementComponent } from './pages/home-page/admin/user-management/user-management.component';

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
		canActivate: [AuthGuard],
		children: [
			{
				path: 'workspace',
				component: WorkspaceComponent


			},
			{
				path: 'manage-projects',
				component: ManageProjectsComponent



			},
			{
				path: 'new-project',
				component: NewProjectComponent


			},
			{
				path: 'extract',
				component: ExtractComponent


			},
			{
				path: 'configure',
				component: ConfigureComponent


			},
			{
				path: 'admin',
				component: AdminComponent,
				children: [
					{
						path: 'user-management',
						component: UserManagementComponent
		
		
					},
					{
						path: 'instance-management',
						component: InstanceManagementComponent
		
		
					},
					{
						path: 'billing',
						component: BillingComponent
		
		
					},
					{
						path: 'capacity',
						component: CapacityComponent
		
		
					},
				]

			},

		]

	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
