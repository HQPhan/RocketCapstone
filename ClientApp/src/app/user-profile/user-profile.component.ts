import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDatabaseAPIService } from '../user-database-api.service';
import { UserLoginTrackerService } from '../user-login-tracker.service';
import { userPet } from '../userPetPreference';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

  profile:userPet;
  constructor(public loginTracker:UserLoginTrackerService, private database: UserDatabaseAPIService, private router:Router) {
    this.profile = new userPet();
   }

  ngOnInit() {
  }
  onSubmit() {
    
    console.log(this.loginTracker.loggedIn);
    console.log(this.loginTracker.account);
    this.profile.userID = this.loginTracker.account.id;
    if(this.profile.currentPetsAtHome === 'None') {
      this.profile.currentPetOwner = 'No';
    }
    else {
      this.profile.currentPetOwner = 'Yes';
    }
    console.log(this.profile);
    this.database.createPetProfile(this.profile).subscribe(
      (result:any) => {
        console.log("Success");
        this.loginTracker.profile = this.profile;
        this.router.navigate(['/search-preference']);
      }
    );
  }
}
