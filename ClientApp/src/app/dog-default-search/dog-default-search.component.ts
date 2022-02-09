import { Component, OnInit } from '@angular/core';
import { Animals, Convert } from '../animal';
import { PetFinderAPIService } from '../pet-finder-api.service';
import { UserDatabaseAPIService } from '../user-database-api.service';
import { UserLoginTrackerService } from '../user-login-tracker.service';
import { Wishlist } from '../Wishlist';

@Component({
  selector: 'app-dog-default-search',
  templateUrl: './dog-default-search.component.html',
  styleUrls: ['./dog-default-search.component.css']
})
export class DogDefaultSearchComponent implements OnInit {
  dogs: Animals;

  constructor(private PetFinderAPI: PetFinderAPIService, public loginTracker: UserLoginTrackerService
    , private database:UserDatabaseAPIService) { }

  ngOnInit() {
    this.PetFinderAPI.searchDog().then(
      resp => {
        let thing = Convert.animalsToJson(resp);
        this.dogs =  Convert.toAnimals(thing);
        console.log(this.dogs);
        console.log(this.dogs.data.animals[0]);
      });
    
  }

  favoriteAnimal(animalID:number) {
    let wish = new Wishlist();
    wish.animalID = animalID;
    wish.rowID = 0;
    wish.userID = this.loginTracker.account.id;
    this.database.addWishlistItem(wish).subscribe(
      (result:any) => {
        console.log(wish);
        console.log(result);
      }
    );
  }

}
