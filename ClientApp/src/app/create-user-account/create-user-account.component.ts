import { resolveSanitizationFn } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDatabaseAPIService } from '../user-database-api.service';
import { UserLoginTrackerService } from '../user-login-tracker.service';
import { userAccount } from '../userAccount';

@Component({
  selector: 'app-create-user-account',
  templateUrl: './create-user-account.component.html',
  styleUrls: ['./create-user-account.component.css']
})
export class CreateUserAccountComponent implements OnInit {

  createdAccount: userAccount;
  constructor(private database: UserDatabaseAPIService, private loginTracker: UserLoginTrackerService, private router: Router) {
    this.createdAccount = new userAccount(0, "", "", "", "", "", "");
   }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.createdAccount);
    let accounts:userAccount[];
    let alreadyExists:boolean = false;
    this.database.getAccounts().subscribe(
      (result:userAccount[]) => {
        accounts = result;
        for (let index = 0; index < accounts.length; index++) {
          let account = accounts[index];
          if(account.userName === this.createdAccount.userName ) {
            alreadyExists = true;
            break;
          }
        }
        if(!alreadyExists) {
          this.database.createAccount(this.createdAccount).subscribe(
            (result: any) => {
              console.log("Account Created");
              this.loginTracker.otherLogin(
                (result:any) => {
                  console.log(result);
                  if(result === "No profile") {
                    this.router.navigate(['/user-profile']);
                  }
                  else {
                    this.router.navigate(['/']);
                  }
                }
                , this.createdAccount);
            }
          )
          //this.router.navigate(['/']);
        }
        else {
          window.alert("Error: Account with username already exists");
        }
      }
    )
    
  }
}
