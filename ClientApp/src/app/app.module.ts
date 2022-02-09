import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NavVerticalComponent } from './nav-vertical/nav-vertical.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { DogDefaultSearchComponent } from './dog-default-search/dog-default-search.component';
import { CatDefaultSearchComponent } from './cat-default-search/cat-default-search.component';
import { CreateUserAccountComponent } from './create-user-account/create-user-account.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserLoginTrackerService } from './user-login-tracker.service';
import { PetFinderAPIService } from './pet-finder-api.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AnimalSearchPreferenceComponent } from './animal-search-preference/animal-search-preference.component';
import { UserCustomizedSearchComponent } from './user-customized-search/user-customized-search.component';
import { WishlistPageComponent } from './wishlist-page/wishlist-page.component';
import { FilterSearchComponent } from './filter-search/filter-search.component';
import { IndividualAnimalPageComponent } from './individual-animal-page/individual-animal-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    NavVerticalComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    DogDefaultSearchComponent,
    CatDefaultSearchComponent,
    CreateUserAccountComponent,
    UserLoginComponent,
    UserProfileComponent,
    AnimalSearchPreferenceComponent,
    UserCustomizedSearchComponent,
    WishlistPageComponent,
    FilterSearchComponent,
    IndividualAnimalPageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'dog-default-search', component: DogDefaultSearchComponent},
      { path: 'cat-default-search', component: CatDefaultSearchComponent},
      { path: 'create-user-account', component: CreateUserAccountComponent},
      { path: 'user-login', component: UserLoginComponent},
      { path: 'user-profile', component: UserProfileComponent},
      { path: 'search-preference', component: AnimalSearchPreferenceComponent},
      { path: 'user-custom-search', component: UserCustomizedSearchComponent},
      { path: 'wishlist', component: WishlistPageComponent},
      { path: 'filter-search', component: FilterSearchComponent},
      { path: 'view-animal/:id', component: IndividualAnimalPageComponent}
    ])
  ],
  providers: [UserLoginTrackerService,
  PetFinderAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
