import { Component, OnInit } from '@angular/core';
import { Animals, Convert } from '../animal';
import { DogInfo } from '../dogInfo';
import { PetFinderAPIService } from '../pet-finder-api.service';
import { searchFilter } from '../searchFilter';
import { searchJSON } from '../searchJSON';
import { UserLoginTrackerService } from '../user-login-tracker.service';

@Component({
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrls: ['./filter-search.component.css']
})
export class FilterSearchComponent implements OnInit {

  filter: searchFilter = new searchFilter();
  searchTerms:searchJSON;
  dogBreeds:string[] = [];
  catBreeds:string[] = [];
  dogInfo : DogInfo;
  catInfo;
  animals: Animals;

  constructor(public loginTracker: UserLoginTrackerService
    , private PetFinderAPI:PetFinderAPIService) { }

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

  onSubmit() {
    this.searchTerms = new searchJSON();
    if(!this.filter.wantedPet || this.filter.wantedPet === 'No Preference') {
      this.filter.dogBreed = undefined;
      this.filter.catBreed = undefined;
    }
    if(this.filter.wantedPet && this.filter.wantedPet != 'No Preference')
    {
      this.searchTerms.type = this.filter.wantedPet;
    }
    if(this.filter.age && this.filter.age != 'No Preference')
    {
      this.searchTerms.age = this.filter.age;
    }
    if(this.filter.gender && this.filter.gender != 'No Preference')
    {
      this.searchTerms.gender = this.filter.gender;
    }
    if(this.filter.size && this.filter.size != 'No Preference')
    {
      this.searchTerms.size = this.filter.size;
    }
    if(this.filter.dogBreed && this.filter.dogBreed != 'No Preference')
    {
      this.searchTerms.breed = this.filter.dogBreed;
      this.filter.catBreed = undefined;
    }
    if(this.filter.catBreed && this.filter.catBreed != 'No Preference')
    {
      this.searchTerms.breed = this.filter.catBreed;
      this.filter.dogBreed = undefined;
    }
    if(this.filter.color && this.filter.color != 'No Preference')
    {
      this.searchTerms.color = this.filter.color;
    }
    if(this.filter.coat && this.filter.coat != 'No Preference')
    {
      this.searchTerms.coat = this.filter.coat;
    }
    if(this.filter.houseTrained && this.filter.houseTrained != 'No Preference')
    {
      if(this.filter.houseTrained === "Yes") {
        this.searchTerms.house_trained = true;
      }
      else {
        this.searchTerms.house_trained = false;
      }
    }
    if(this.filter.isDeclawed && this.filter.isDeclawed != 'No Preference')
    {
      if(this.filter.isDeclawed === "Yes") {
        this.searchTerms.declawed = true;
      }
      else {
        this.searchTerms.declawed = false;
      }
    }
    if(this.filter.specialNeeds && this.filter.specialNeeds != 'No Preference')
    {
      if(this.filter.specialNeeds === "Yes") {
        this.searchTerms.special_needs = true;
      }
      else {
        this.searchTerms.special_needs = false;
      }
    }
    if((<HTMLInputElement>document.getElementById("goodWithKids")).checked) {
      this.searchTerms.good_with_children = true;
    }
    if((<HTMLInputElement>document.getElementById("goodWithCats")).checked) {
      this.searchTerms.good_with_cats = true;
    }
    if((<HTMLInputElement>document.getElementById("goodWithDogs")).checked) {
      this.searchTerms.good_with_dogs = true;
    }
    console.log(this.searchTerms);
    this.PetFinderAPI.searchCustomized(this.searchTerms).then(
      result => {
        console.log(result);
        let thing = Convert.animalsToJson(result);
        this.animals =  Convert.toAnimals(thing);
      }
    )
  }

}
