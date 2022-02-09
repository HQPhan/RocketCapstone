import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from '../animal';
import { PetFinderAPIService } from '../pet-finder-api.service';
import { UserDatabaseAPIService } from '../user-database-api.service';
import { UserLoginTrackerService } from '../user-login-tracker.service';

@Component({
  selector: 'app-individual-animal-page',
  templateUrl: './individual-animal-page.component.html',
  styleUrls: ['./individual-animal-page.component.css']
})
export class IndividualAnimalPageComponent implements OnInit {

  @Input() id:number;
  animal:Animal;
  constructor(private PetFinderAPI: PetFinderAPIService, public loginTracker: UserLoginTrackerService, private database: UserDatabaseAPIService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    console.log("initializing");
    this.activatedRoute.paramMap.subscribe(
      params => {
        console.log(params);
        this.id = parseInt(params.get('id'));
        this.PetFinderAPI.SearchAnimalById(this.id).then(
          (response) => {
            console.log(response);
            this.animal = response.data.animal;
            console.log(this.animal);
          }, (error) => {
            console.log(error);
          }
        )
      }
    )
    

  }
}
