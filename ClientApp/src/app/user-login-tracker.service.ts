import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { resolve } from 'dns';
import { isStrictNullChecksEnabled } from 'tslint';
import { Cat } from './catSearch';
import { Dog } from './dogSearch';
import { totalAccount } from './totalAccount';
import { UserDatabaseAPIService } from './user-database-api.service';
import { userAccount } from './userAccount';
import { userPet } from './userPetPreference';
import { Wishlist } from './Wishlist';

@Injectable({
  providedIn: 'root'
})
export class UserLoginTrackerService {
  loggedIn:boolean;
  account:userAccount;
  profile:userPet;
  dogSearch:Dog;
  catSearch:Cat;
  wishlist:Wishlist[];

  constructor(private database: UserDatabaseAPIService, private router:Router) {
    this.loggedIn = false;
   }

  //  checkLogIn(username:string, password:string) {
  //   let accounts:userAccount[];
  //   //grab all of the accounts to check for a match
  //   return this.database.getAccounts().subscribe(
  //   (result: userAccount[]) => {
  //       accounts = result;
  //       //loop through all of the accounts
  //       for (let index = 0; index < accounts.length; index++) {
  //         let account:userAccount = accounts[index];
  //         if(account.userName === username) {
  //           if(account.password === password) {
  //             //if password matches, verify log in in the service
  //             this.loggedIn = true;
  //             this.account = account;
  //             //grab the profile corresponding to the logged in user
  //             this.database.getPetProfiles().subscribe(
  //               (result: userPet[]) => {
  //                 for (let j = 0; j < result.length; j++) {
  //                   let profile = result[j];
  //                   if (this.account.id == profile.userID)
  //                   {
  //                     this.profile = profile;
  //                     console.log(this.profile);
  //                     this.router.navigate(['/']);
  //                     return null;
  //                   }

  //                 }

  //               }
  //             )
  //           }
  //         }
          
  //       }
  //       console.log(this.loggedIn);
  //       console.log(this.account);
  //       this.router.navigate(['/'])
  //       return null;
  //     }
  //   )
  // }
  checkLogIn(account:userAccount)
  {
    this.database.checkLogIn(account).subscribe(
      (result:userAccount) => {
        console.log(result);
        if(result.userName === account.userName) {
          this.loggedIn = true;
          this.account = result;
          //grab the profile corresponding to the logged in user
          this.database.getPetProfiles().subscribe(
            (result2: userPet[]) => {
              console.log(result2);
              if(result2.length > 0)
              {
                for (let j = 0; j < result2.length; j++) {
                  let profile = result2[j];
                  if (this.account.id == profile.userID)
                  {
                    this.profile = profile;
                    console.log(this.profile);
                    this.router.navigate(['/']);
                    return null;
                  }
                }
                
              }
              else{
                console.log("No Stored Profiles");
                this.router.navigate(['/user-profile']);
              }
            }
          )
        }
        else {
          console.log(result.userName);
          this.router.navigate(['/user-login']);
        }
      }
    )
  }
  //log out user, and null out the objects that have been set
  logOut() {
    this.loggedIn = false;
    this.account = null;
    this.profile = null;
    console.log("Logged Out");
  }

  otherLogin(cb: any,  account:userAccount) {
          this.database.getTotalAccount(account).subscribe(
            (result:totalAccount) => {
              console.log(result);
              let returnLoggedIn;
              if(result.account.userName === account.userName) //this will be true if the account username and password were correct
              {
                
                this.loggedIn = true;
                this.account = result.account;
                if(result.profiles.length > 0) {
                  returnLoggedIn = "Logged In";
                  this.profile = result.profiles[result.profiles.length - 1];
                }
                else {
                  returnLoggedIn = 'No profile';
                  console.log("No, Got here");
                }
                if(result.dogSearches.length > 0) {
                  this.dogSearch = result.dogSearches[result.dogSearches.length - 1];
                }
                if(result.catSearches.length > 0) {
                  this.catSearch = result.catSearches[result.catSearches.length - 1];
                }
                this.wishlist = result.wishlist;
                console.log("Logged In");
              }
              else {
                console.log("Invalid Password");
                window.alert("Incorrect Username or Password");
                returnLoggedIn = "Invalid Login";
                //location.reload();
              }
              cb(returnLoggedIn);
            }
          )
  }
}
