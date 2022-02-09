import { Component, OnInit } from '@angular/core';
import { textChangeRangeIsUnchanged } from 'typescript';
import { Animals, Convert } from '../animal';
import { catSearchJSON } from '../catSearchJSON';
import { dogSearchJSON } from '../dogSearchJSON';
import { PetFinderAPIService } from '../pet-finder-api.service';
import { UserLoginTrackerService } from '../user-login-tracker.service';

@Component({
  selector: 'app-user-customized-search',
  templateUrl: './user-customized-search.component.html',
  styleUrls: ['./user-customized-search.component.css']
})
export class UserCustomizedSearchComponent implements OnInit {

  dogSearchTerms:dogSearchJSON;
  catSearchTerms:catSearchJSON;
  dogs:Animals;
  cats:Animals;
  constructor(public loginTracker:UserLoginTrackerService, private PetFinderAPI: PetFinderAPIService) { }

  ngOnInit() {
    if(this.loginTracker.profile.wantedPet === "Dog") {
      this.searchDog();
    }
    else {
      this.searchCat();
    }
  }

  searchDog() {
    this.dogSearchTerms = new dogSearchJSON();
    //Fill in search terms based on search preference of user
    if(this.loginTracker.dogSearch.age != 'No Preference'){
      this.dogSearchTerms.age = this.loginTracker.dogSearch.age;
    }
    if(this.loginTracker.dogSearch.gender != 'No Preference'){
      this.dogSearchTerms.gender = this.loginTracker.dogSearch.gender;
    }
    if(this.loginTracker.dogSearch.size != 'No Preference'){
      this.dogSearchTerms.size = this.loginTracker.dogSearch.size;
    }
    if(this.loginTracker.dogSearch.breed != 'No Preference'){
      this.dogSearchTerms.breed = this.loginTracker.dogSearch.breed;
    }
    if(this.loginTracker.dogSearch.color != 'No Preference'){
      this.dogSearchTerms.color = this.loginTracker.dogSearch.color;
    }
    if(this.loginTracker.dogSearch.coat != 'No Preference'){
      this.dogSearchTerms.coat = this.loginTracker.dogSearch.coat;
    }
    if(this.loginTracker.dogSearch.houseTrained != 'No Preference'){
      if(this.loginTracker.dogSearch.houseTrained === "Yes") {
        this.dogSearchTerms.house_trained = true;
      }
      else {
        this.dogSearchTerms.house_trained = false;
      }
    }
    if(this.loginTracker.dogSearch.specialNeeds != 'No Preference'){
      if(this.loginTracker.dogSearch.specialNeeds === "Yes") {
        this.dogSearchTerms.special_needs = true;
      }
      else {
        this.dogSearchTerms.special_needs = false;
      }
    }

    //Fill in the rest of the search terms based on user profile
    if(this.loginTracker.profile.kidsAtHome === "Yes") {
      //only place a variable in the good with kids parameter if they have kids
      this.dogSearchTerms.good_with_children = true;
    }
    if(this.loginTracker.profile.currentPetsAtHome === "Dog") {
      this.dogSearchTerms.good_with_dogs = true;
    }
    if(this.loginTracker.profile.currentPetsAtHome === "Cat") {
      this.dogSearchTerms.good_with_cats = true;
    }
    if(this.loginTracker.profile.currentPetsAtHome === "Both") {
      this.dogSearchTerms.good_with_cats = true;
      this.dogSearchTerms.good_with_dogs = true;
    }
    console.log(this.dogSearchTerms);
    this.PetFinderAPI.searchDogCustomized(this.dogSearchTerms).then(
      result => {
        console.log(result);
        let thing = Convert.animalsToJson(result);
        this.dogs =  Convert.toAnimals(thing);
      }
    )
  }
  searchCat() {
    this.catSearchTerms = new catSearchJSON();
    if(this.loginTracker.catSearch.age && this.loginTracker.catSearch.age != 'No Preference'){
      this.catSearchTerms.age = this.loginTracker.catSearch.age;
    }
    if(this.loginTracker.catSearch.gender && this.loginTracker.catSearch.gender != 'No Preference'){
      this.catSearchTerms.gender = this.loginTracker.catSearch.gender;
    }
    if(this.loginTracker.catSearch.size && this.loginTracker.catSearch.size != 'No Preference'){
      this.catSearchTerms.size = this.loginTracker.catSearch.size;
    }
    if(this.loginTracker.catSearch.breed && this.loginTracker.catSearch.breed != 'No Preference'){
      this.catSearchTerms.breed = this.loginTracker.catSearch.breed;
    }
    if(this.loginTracker.catSearch.color && this.loginTracker.catSearch.color != 'No Preference'){
      this.catSearchTerms.color = this.loginTracker.catSearch.color;
    }
    if(this.loginTracker.catSearch.coat && this.loginTracker.catSearch.coat != 'No Preference'){
      this.catSearchTerms.coat = this.loginTracker.catSearch.coat;
    }
    if(this.loginTracker.catSearch.isDeclawed && this.loginTracker.catSearch.isDeclawed != 'No Preference'){
      if(this.loginTracker.catSearch.isDeclawed === "Yes") {
        this.catSearchTerms.declawed = true;
      }
      else {
        this.catSearchTerms.declawed = false;
      }
    }
    if(this.loginTracker.catSearch.houseTrained && this.loginTracker.catSearch.houseTrained != 'No Preference'){
      if(this.loginTracker.catSearch.houseTrained === "Yes") {
        this.catSearchTerms.house_trained = true;
      }
      else {
        this.catSearchTerms.house_trained = false;
      }
    }
    if(this.loginTracker.catSearch.specialNeeds && this.loginTracker.catSearch.specialNeeds != 'No Preference'){
      if(this.loginTracker.catSearch.specialNeeds === "Yes") {
        this.catSearchTerms.special_needs = true;
      }
      else {
        this.catSearchTerms.special_needs = false;
      }
    }
    //Fill in the rest of the search terms based on user profile
    if(this.loginTracker.profile.kidsAtHome === "Yes") {
      //only place a variable in the good with kids parameter if they have kids
      this.catSearchTerms.good_with_children = true;
    }
    if(this.loginTracker.profile.currentPetsAtHome === "Dog") {
      this.catSearchTerms.good_with_dogs = true;
    }
    if(this.loginTracker.profile.currentPetsAtHome === "Cat") {
      this.catSearchTerms.good_with_cats = true;
    }
    if(this.loginTracker.profile.currentPetsAtHome === "Both") {
      this.catSearchTerms.good_with_cats = true;
      this.catSearchTerms.good_with_dogs = true;
    }
    console.log(this.catSearchTerms);
    this.PetFinderAPI.searchCatCustomized(this.catSearchTerms).then(
      result => {
        console.log(result);
        let thing = Convert.animalsToJson(result);
        this.cats =  Convert.toAnimals(thing);
      }
    )
  }

}
