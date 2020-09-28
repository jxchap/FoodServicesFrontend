import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username = "";
  password = "";
  errorMessage = "Invalid Credentials"
  invalidLogin = false

  constructor(private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }


  handleJWTBasicAuthLogin() {

    this.authenticationService.executeJWTAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          this.router.navigate(['view-orders'])
          this.invalidLogin = false
        },
        error => {
          console.log(error)
          this.invalidLogin = true
        }
      )



  }

}
