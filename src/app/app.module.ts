import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthAPIKEYGuard} from './guards/auth-apikey.guard';
import {AuthAPIKeyService} from './services/auth-apikey.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
import {ConstantsService} from './services/constants.service';
import {RoutingModule} from './modules/routing/routing.module';
import {HTTPAPIKeyInterceptor} from './interceptors/http-apikey.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './modules/material/material.module';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [AuthAPIKEYGuard, AuthAPIKeyService, ConstantsService,
    { provide: HTTP_INTERCEPTORS,
      useClass: HTTPAPIKeyInterceptor,
      multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
