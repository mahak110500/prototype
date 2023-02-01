import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { AuthComponent } from './pages/auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { WorkspaceComponent } from './pages/home-page/workspace/workspace.component';
import { ManageProjectsComponent } from './pages/home-page/manage-projects/manage-projects.component';
import { NewProjectComponent } from './pages/home-page/new-project/new-project.component';
import { ExtractComponent } from './pages/home-page/extract/extract.component';
import { ConfigureComponent } from './pages/home-page/configure/configure.component';
import { AdminComponent } from './pages/home-page/admin/admin.component';
import { SidebarComponent } from './pages/home-page/sidebar/sidebar.component';
import { HeaderComponent } from './pages/home-page/header/header.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxFileDropModule } from 'ngx-file-drop';
import { ProgressComponent } from './pages/home-page/new-project/progress/progress.component';
import { ForgetPasswordComponent } from './pages/auth/forget-password/forget-password.component';
import { UserManagementComponent } from './pages/home-page/admin/user-management/user-management.component';
import { InstanceManagementComponent } from './pages/home-page/admin/instance-management/instance-management.component';
import { BillingComponent } from './pages/home-page/admin/billing/billing.component';
import { CapacityComponent } from './pages/home-page/admin/capacity/capacity.component';


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    AuthComponent,
    HomePageComponent,
    WorkspaceComponent,
    ManageProjectsComponent,
    NewProjectComponent,
    ExtractComponent,
    ConfigureComponent,
    AdminComponent,
    SidebarComponent,
    HeaderComponent,
    ProgressComponent,
    ForgetPasswordComponent,
    UserManagementComponent,
    InstanceManagementComponent,
    BillingComponent,
    CapacityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    NgxFileDropModule

  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    MatStepperModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
