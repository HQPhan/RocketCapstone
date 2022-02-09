import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userAccount } from './userAccount';
import { UserLoginTrackerService } from './user-login-tracker.service';
import { userPet } from './userPetPreference';
import { identifierModuleUrl } from '@angular/compiler';
import { Dog } from './dogSearch';
import { Cat } from './catSearch';
import { Wishlist } from './Wishlist';

@Injectable({
  providedIn: 'root'
})
export class UserDatabaseAPIService {
  baseURL:string;
  constructor(private http:HttpClient,  @Inject('BASE_URL') baseUrl:string) {
    this.baseURL = baseUrl + 'pet';
   }

   //data access for the user accounts

   getAccounts() {
     let url = this.baseURL + '/userProfile';
     console.log(url);
     return this.http.get(url);
   }
   getAccount(id:number) {
     let url = this.baseURL + '/getUserProfile/' + id;
     console.log(url);
     return this.http.get(url);
   }
   createAccount(account:userAccount) {
     let url = this.baseURL + '/insertNewUser';
     return this.http.post(url, account);
   }
   checkLogIn(account:userAccount) {
     let url = this.baseURL + '/checkLogin';
     return this.http.post(url, account);
   }

   //data access for the user pet profiles
   getPetProfiles() {
    let url = this.baseURL + '/getPetProfile';
    console.log(url);
    return this.http.get(url);
   }
   getPetProfile(id:number) {
    let url = this.baseURL + '/getPetProfile/' + id;
    console.log(url);
    return this.http.get(url);
  }
  createPetProfile(profile:userPet) {
    let url = this.baseURL + '/insertNewUserPetProfile';
    console.log(url);
    return this.http.post(url, profile);
  }

  //data access for the dog search preference table
  getDogSearches() {
    let url = this.baseURL + '/dog';
    console.log(url);
    return this.http.get(url);
  }
  getDogSearch(id:number) {
    let url = this.baseURL + '/getdog/' + id;
    console.log(url);
    return this.http.get(url);
  }
  createDogSearch(dogSearch : Dog) {
    let url = this.baseURL + '/adddog';
    console.log(url);
    return this.http.post(url, dogSearch);
  }

  //data access for the cat search preference table
  getCatSearches() {
    let url = this.baseURL + '/cat';
    console.log(url);
    return this.http.get(url);
  }
  getCatSearch(id:number) {
    let url = this.baseURL + '/getcat/' + id;
    console.log(url);
    return this.http.get(url);
  }
  createCatSearch(catSearch : Cat) {
    let url = this.baseURL + '/addcat';
    console.log(url);
    return this.http.post(url, catSearch);
  }

  //data access for user wishlist
  addWishlistItem(wish:Wishlist) {
    let url = this.baseURL + '/addwishlist';
    console.log(url);
    return this.http.post(url, wish);
  }
  getWishlist(id:number) {
    let url = this.baseURL + '/GetWishlistUser/' + id;
    console.log(url);
    return this.http.get(url);
  }

  //data access for TotalAccount and for logging in
  getTotalAccount(account:userAccount) {
    let url = this.baseURL + '/LoginUser';
    console.log(url);
    return this.http.post(url, account);
  }
}
