import { Component, OnInit } from '@angular/core';
import { Animal, Data } from '../animal';
import { PetFinderAPIService } from '../pet-finder-api.service';
import { UserDatabaseAPIService } from '../user-database-api.service';
import { UserLoginTrackerService } from '../user-login-tracker.service';
import { Wishlist } from '../Wishlist';

@Component({
  selector: 'app-wishlist-page',
  templateUrl: './wishlist-page.component.html',
  styleUrls: ['./wishlist-page.component.css']
})
export class WishlistPageComponent implements OnInit {
  wishlist: Wishlist[];
  animalWishlist = [];
  constructor(public loginTracker:UserLoginTrackerService, private PetFinderAPI: PetFinderAPIService,
    private database:UserDatabaseAPIService) { }

  ngOnInit() {
    if(this.loginTracker.loggedIn)
    {
      this.database.getWishlist(this.loginTracker.account.id).subscribe(
        (result:Wishlist[]) => {
          console.log(result)
          this.wishlist = result;
          for (let i = 0; i < this.wishlist.length; i++) {
            let searchId = this.wishlist[i].animalID;
            this.PetFinderAPI.SearchAnimalById(searchId).then(
              (response) => {
                console.log(response);
                this.animalWishlist.push(response.data.animal);
                console.log(this.animalWishlist);
              }
            ).catch(
              (error) => {
                console.log(error);
              }
            )
          }
        }
      )
    }
  }

  showThings() {
    console.log(this.animalWishlist[0]);
    console.log(this.animalWishlist[1]);
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
