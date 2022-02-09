import { Injectable } from '@angular/core';
import { Client } from "@petfinder/petfinder-js";
import { Animal } from '@petfinder/petfinder-js/dist/api/animal';
import { Animals, Convert } from './animal';
import { catSearchJSON } from './catSearchJSON';
import { dogSearchJSON } from './dogSearchJSON';
import { searchJSON } from './searchJSON';
import { secret } from './secret';

@Injectable({
  providedIn: 'root'
})
export class PetFinderAPIService {
  client: Client; 
  secret: secret = new secret();

  constructor() {

    this.client = new Client({apiKey: this.secret.apiKey, secret: this.secret.key}); 

 
   }
  searchDogs() :Animals {
    let animal;
    this.client.animal.search({
      type: "Dog",
      breed: "Beagle",
      page: 1,
      limit: 100,
    }).then(resp => {
      let thing = Convert.animalsToJson(resp);
      animal = Convert.toAnimals(thing);
      console.log(animal);
      console.log(resp);
      return animal;
    });
    return animal;
  }
  searchDog() {
    return this.client.animal.search({
      type: "Dog",
      page: 1,
      limit: 28,
    })
  }
  searchDogCustomized(searchTerms: dogSearchJSON) {
    return this.client.animal.search(searchTerms);
  }
  searchCats() {
    this.client.animal.search({
      type: "Cat",
      page: 1,
      limit: 100,
    }).then(resp => {
      console.log(resp);
      let thing = Convert.animalsToJson(resp);
      let animal = Convert.toAnimals(thing);
      return animal;
      // Do something with resp.data.animals
    });
  }
  SearchCat() {
    return this.client.animal.search({
      type: "Cat",
      page: 1,
      limit: 28,
    })
  }
  searchCatCustomized(searchTerms: catSearchJSON) {
    return this.client.animal.search(searchTerms);
  }
  searchCustomized(searchTerms: searchJSON) {
    return this.client.animal.search(searchTerms);
  }
  SearchAnimalById(id:number) {
    return this.client.animal.show(id);
  }
  GetDogBreeds() {
    return this.client.animalData.breeds('dog');
  }
  GetCatBreeds() {
    return this.client.animalData.breeds('cat');
  }
  GetAnimalTypes() {
    return this.client.animalData.types();
  }
}
