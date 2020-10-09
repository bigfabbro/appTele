import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthAPIKEYGuard} from './auth-apikey.guard';
import {AuthAPIKeyService} from './auth-apikey.service';
import {HttpClientModule} from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import {ConstantsService} from './constants.service';
import {RoutingModule} from './routing/routing.module';

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
  providers: [AuthAPIKEYGuard, AuthAPIKeyService, ConstantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
