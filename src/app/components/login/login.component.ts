import { Component, OnInit } from '@angular/core';
import {AuthAPIKeyService} from '../../services/auth-apikey.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConstantsService} from '../../services/constants.service';

@Component({
  selector: 'tele-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  placeHolder = 'Insert your API Key';
  APIKeyForm: FormGroup;

  constructor(private authAPIKeyService: AuthAPIKeyService, private router: Router,
              private constService: ConstantsService, fb: FormBuilder) {
    this.APIKeyForm = fb.group({
      apiKey: fb.control('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }
  loginUser(): void{
    this.authAPIKeyService.authenticateAPIKey(this.APIKeyForm.value.apiKey);
  }
  getErrorMessage(): string{
    return 'You must enter a value';
  }
}
