import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {AuthAPIKeyService} from "../../services/auth-apikey.service";

@Component({
  selector: 'tele-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private authAPIKeyService: AuthAPIKeyService, private breakpointObserver: BreakpointObserver) {}

  logoutUser(): void{
    this.authAPIKeyService.deleteAPIKey();
  }

}
