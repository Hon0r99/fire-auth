import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-after-login-page',
  templateUrl: './after-login-page.component.html',
  styleUrls: ['./after-login-page.component.scss']
})
export class AfterLoginPageComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
