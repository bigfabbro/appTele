import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthAPIKEYGuard} from './guards/auth-apikey.guard';
import {AuthAPIKeyService} from './services/auth-apikey.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import {ConstantsService} from './services/constants.service';
import {RoutingModule} from './routing/routing.module';
import {HTTPAPIKeyInterceptor} from './interceptors/http-apikey.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [AuthAPIKEYGuard, AuthAPIKeyService, ConstantsService,
    { provide: HTTP_INTERCEPTORS,
      useClass: HTTPAPIKeyInterceptor,
      multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
