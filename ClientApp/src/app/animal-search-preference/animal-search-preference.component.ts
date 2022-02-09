import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cat } from '../catSearch';
import { DogInfo } from '../dogInfo';
import { Dog } from '../dogSearch';
import { PetFinderAPIService } from '../pet-finder-api.service';
import { UserDatabaseAPIService } from '../user-database-api.service';
import { UserLoginTrackerService } from '../user-login-tracker.service';
import { UserLoginComponent } from '../user-login/user-login.component';

@Component({
  selector: 'app-animal-search-preference',
  templateUrl: './animal-search-preference.component.html',
  styleUrls: ['./animal-search-preference.component.css']
})
export class AnimalSearchPreferenceComponent implements OnInit {

  dogSearch: Dog;
  catSearch: Cat;
  dogBreeds:string[] = [];
  catBreeds:string[] = [];
  dogInfo : DogInfo;
  catInfo;
  constructor(private database: UserDatabaseAPIService, public loginTracker: UserLoginTrackerService
    , private PetFinderAPI:PetFinderAPIService, private router:Router) {
    this.dogSearch = new Dog();
    this.catSearch = new Cat();
   }

  ngOnInit() {
    this.PetFinderAPI.GetDogBreeds().then(
      resp => {
        console.log(resp);
        for (let index = 0; index < resp.data.breeds.length; index++) {
          let breed = resp.data.breeds[index];
          this.dogBreeds.push(breed.name);
        }
        console.log(this.dogBreeds);
        this.PetFinderAPI.GetCatBreeds().then(
          resp3 => {
            console.log(resp);
            for (let index = 0; index < resp3.data.breeds.length; index++) {
              let breed = resp3.data.breeds[index];
              this.catBreeds.push(breed.name);
            }
            console.log(this.catBreeds);
            this.PetFinderAPI.GetAnimalTypes().then(
              resp2 => {
                console.log(resp2);
                this.dogInfo = resp2.data.types[0];
                this.catInfo = resp2.data.types[1];
                console.log(this.dogInfo);
                console.log(this.catInfo);
              }
            )
          }
        )
      }
    )
  }
  onSubmitDog() {
    console.log(this.dogSearch);
    this.dogSearch.id = 0;
    this.dogSearch.userID = this.loginTracker.account.id;
    this.loginTracker.dogSearch = this.dogSearch;
    this.database.createDogSearch(this.dogSearch).subscribe(
      (result:any) => {
        console.log(result);
        console.log("Worked");
      }
    )
    this.router.navigate(['/user-custom-search']);
  }
  onSubmitCat() {
    console.log(this.catSearch);
    this.catSearch.id = 0;
    this.catSearch.userID = this.loginTracker.account.id;
    this.loginTracker.catSearch = this.catSearch;
    this.database.createCatSearch(this.catSearch).subscribe(
      (result:any) => {
        console.log(result);
        console.log("Worked");
      }
    )
    this.router.navigate(['/user-custom-search']);
  }
}
