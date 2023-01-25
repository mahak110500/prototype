import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { AuthComponent } from './pages/auth/auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { WorkspaceComponent } from './pages/home-page/workspace/workspace.component';
import { ManageProjectsComponent } from './pages/home-page/manage-projects/manage-projects.component';
import { NewProjectComponent } from './pages/home-page/new-project/new-project.component';
import { ExtractComponent } from './pages/home-page/extract/extract.component';
import { ConfigureComponent } from './pages/home-page/configure/configure.component';
import { AdminComponent } from './pages/home-page/admin/admin.component';
import { SidebarComponent } from './pages/home-page/sidebar/sidebar.component';
import { HeaderComponent } from './pages/home-page/header/header.component';
import { TokenInterceptorService } from './services/token-interceptor.service';

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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
