import { Component } from '@angular/core';
import { dogSearchJSON } from '../dogSearchJSON';
import { PetFinderAPIService } from '../pet-finder-api.service';
import { UserDatabaseAPIService } from '../user-database-api.service';
import { userAccount } from '../userAccount';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;
  accounts: userAccount[];
  searchTerms: dogSearchJSON;
  constructor(private database: UserDatabaseAPIService, private PetFinderAPI:PetFinderAPIService) {

  }

  public incrementCounter() {
    this.currentCount++;
  }
  getAccounts() {
    this.database.getAccounts().subscribe(
      (result:userAccount[]) => {
        this.accounts = result;
        console.log(result);
        console.log(this.accounts);
      }
    )
  }
  customSearchTest() {
    this.searchTerms = new dogSearchJSON();
    this.searchTerms.age = "Baby";
    this.searchTerms.location = "48375";
    this.searchTerms.good_with_cats = true;
    console.log(this.searchTerms);
    this.PetFinderAPI.searchDogCustomized(this.searchTerms).then(
      resp => {
        console.log(resp);
      });
  }

}
