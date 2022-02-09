import { Cat } from "./catSearch";
import { Dog } from "./dogSearch";
import { userAccount } from "./userAccount";
import { userPet } from "./userPetPreference";
import { Wishlist } from "./Wishlist";

export class totalAccount {
    account: userAccount;
    profiles: userPet[];
    dogSearches: Dog[];
    catSearches: Cat[];
    wishlist: Wishlist[];
}