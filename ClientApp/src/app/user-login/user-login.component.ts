import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginTrackerService } from '../user-login-tracker.service';
import { userAccount } from '../userAccount';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  currentAccount : userAccount;
  constructor(private loginTracker:UserLoginTrackerService, private router:Router) {
    this.currentAccount = new userAccount(0, "", "", "", "", "", "");
   }

  ngOnInit() {
    
  }

  login() {
    //grab account from database with matching username and password
    console.log(this.currentAccount);
    this.loginTracker.checkLogIn(this.currentAccount);
  }
  otherLogin() {
    console.log(this.currentAccount);
    let loggedIn;
    this.loginTracker.otherLogin(
      (result:any) => {
        loggedIn = result;
        console.log(result);
        if(loggedIn === "Invalid Login" ) {
          this.currentAccount = new userAccount(0, "", "", "", "", "", "");
          console.log("Rest log In");
        }
        else if(loggedIn === 'No profile')
        {
          this.router.navigate(['/user-profile']);
        }
        else {
          this.router.navigate(['/']);
        }
      }, 
      this.currentAccount
    );
  }

  // showPassword() {
  //   var x = <HTMLElement>document.getElementById("password");
  //   if (x.type === "password") {
  //     x.type = "text";
  //     document.getElementById("togglePassword").className = "fa fa-eye-slash";
  //   } else {
  //     x.type = "password";
  //     document.getElementById("togglePassword").className = "far fa-eye";
  //     ;
  //   }
  // }

  showPassword() {
    var x = (<HTMLInputElement>document.getElementById("password"));
    if (x.type === "password") {
      x.type = "text";
      document.getElementById("togglePassword").className = "fa fa-eye-slash";
    } else {
      x.type = "password";
      document.getElementById("togglePassword").className = "far fa-eye";
      ;
    }
  }
}
