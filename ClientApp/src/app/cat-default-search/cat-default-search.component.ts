import { Component, OnInit } from '@angular/core';
import { PetFinderAPIService } from '../pet-finder-api.service';
import { Animals, Convert } from '../animal';
import { UserLoginTrackerService } from '../user-login-tracker.service';
import { UserDatabaseAPIService } from '../user-database-api.service';
import { Wishlist } from '../Wishlist';

@Component({
  selector: 'app-cat-default-search',
  templateUrl: './cat-default-search.component.html',
  styleUrls: ['./cat-default-search.component.css']
})
export class CatDefaultSearchComponent implements OnInit {
  cats: Animals;

  constructor(private PetFinderAPI : PetFinderAPIService, public loginTracker: UserLoginTrackerService
    , private database:UserDatabaseAPIService) { }

  ngOnInit() {
    this.PetFinderAPI.SearchCat().then(
      resp => {
        let thing = Convert.animalsToJson(resp);
        this.cats =  Convert.toAnimals(thing);
        console.log(this.cats);
        console.log(this.cats.data.animals[0]);
      });
  }
  searchCatsTest() {
    this.PetFinderAPI.searchCats();
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
