using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using TheThreeCanineCapstoneCodeketeers.Model;

namespace TheThreeCanineCapstoneCodeketeers.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class PetController
    {

        UserDAL userDAL = new UserDAL();
        //This is for user profile

        [HttpGet("userProfile")]
        public List<UserAccount> GetUserAccount()
        {
            return userDAL.GetUserAccount();
        }

        [HttpGet("getUserProfile/{id}")]
        public UserAccount GetUserAccount(int id)
        {
            return userDAL.GetUserAccount(id);
        }

        [HttpPost("insertNewUser")]
        public void InsertNewUser(UserAccount u)
        {
            //Encrypt here?
            userDAL.InsertUser(u);
        }

        [HttpDelete("deleteUser/{id}")]
        public void DeleteUser(int id)
        {
            userDAL.DeleteUserAccount(id);
        }

        [HttpPut("updateUserAccount/{id}")]
        public void UpdateUserAccount(int id, UserAccount u)
        {
            UserAccount initial = userDAL.GetUserAccount(id);
            if (u.userName == null || u.userName == "")
            {
                u.userName = initial.userName;
            }

            if (u.password == null || u.password == "")
            {
                u.password = initial.password;
            }

            if (u.firstName == null || u.firstName == "")
            {
                u.firstName = initial.firstName;
            }

            if (u.lastName == null || u.lastName == "")
            {
                u.lastName = initial.lastName;
            }

            if (u.contact == null || u.contact == "")
            {
                u.contact = initial.contact;
            }

            if (u.address == null || u.address == "")
            {
                u.address = initial.address;
            }
            userDAL.UpdateUserAccount(id, u);
        }

        //This is for user PetProfile

        [HttpGet("getPetProfile")]
        public List<UserPet> GetUserPetProfile()
        {
            return userDAL.GetUserPetProfile();
        }

        [HttpGet("getPetProfile/{id}")]
        public UserPet GetUserPetProfile(int id)
        {
            return userDAL.GetUserPetProfile(id);
        }

        [HttpPost("insertNewUserPetProfile")]
        public void InsertNewUserPetProfile(UserPet up)
        {
            userDAL.InsertUserPetProfile(up);
        }

        [HttpDelete("deleteUserPetProfile/{id}")]
        public void DeleteUserPetProfile(int id)
        {
            userDAL.DeleteUserPetProfile(id);
        }

        [HttpPut("updateUserPetProfile/{id}")]
        public void UpdateUserPetProfile(int id, UserPet up)
        {
            UserPet initial = userDAL.GetUserPetProfile(id);
            if (up.userID == null)
            {
                up.userID = initial.userID;
            }

            if (up.wantedPet == null || up.wantedPet == "")
            {
                up.wantedPet = initial.wantedPet;
            }

            if (up.kidsAtHome == null || up.kidsAtHome == "")
            {
                up.kidsAtHome = initial.kidsAtHome;
            }

            if (up.currentPetOwner == null || up.currentPetOwner == "")
            {
                up.currentPetOwner = initial.currentPetOwner;
            }

            if (up.currentPetsAtHome == null || up.currentPetsAtHome == "")
            {
                up.currentPetsAtHome = initial.currentPetsAtHome;
            }

            if (up.outdoorSpace == null || up.outdoorSpace == "")
            {
                up.outdoorSpace = initial.outdoorSpace;
            }
            if (up.LandlordPetRestriction == null || up.LandlordPetRestriction == "")
            {
                up.LandlordPetRestriction = initial.LandlordPetRestriction;
            }
            userDAL.UpdateUserPetProfile(id, up);
        }
      
        DogDAL dogDAL = new DogDAL();

        [HttpGet("dog")]
        public List<Dog> GetDogs()
        {
            return dogDAL.GetDogs();
        }

        [HttpGet("getdog/{id}")]
        public Dog GetDog(int id)
        {
            return dogDAL.GetDog(id);
        }

        [HttpPost("adddog")]
        public void AddDog(Dog dog)
        {
            dogDAL.AddDog(dog);
        }

        [HttpDelete("delete/{id}")]
        public void DeleteDog(int id)
        {
            dogDAL.DeleteDog(id);
        }

        [HttpPut("update/{id}")]
        public void UpdateDog(int id, Dog dog)
        {
            Dog oldDog = dogDAL.GetDog(id);
            if (dog.breed == null || dog.breed == "")
            {
                dog.breed = oldDog.breed;
            }

            if (dog.age == null || dog.age == "")
            {
                dog.age = oldDog.age;
            }

            if (dog.gender == null || dog.gender == "")
            {
                dog.gender = oldDog.gender;
            }

            if (dog.size == null || dog.size == "")
            {
                dog.size = oldDog.size;
            }

            if (dog.color == null || dog.color == "")
            {
                dog.color = oldDog.color;
            }

            if (dog.coat == null || dog.coat == "")
            {
                dog.coat = oldDog.coat;
            }

            //if (dog.spayed == oldDog.spayed)
            //{
            //    dog.spayed = oldDog.spayed;
            //}

            //if (dog.houseTrained == oldDog.houseTrained)
            //{
            //    dog.houseTrained = oldDog.houseTrained;
            //}

            //if (dog.specialNeeds == oldDog.specialNeeds)
            //{
            //    dog.specialNeeds = oldDog.specialNeeds;
            //}

            //if (dog.shots == oldDog.shots)
            //{
            //    dog.shots = oldDog.shots;
            //}

            dogDAL.UpdateDog(id, dog);
        }

        CatDAL catDAL = new CatDAL();
        [HttpGet("cat")]
        public List<Cat> GetCats()
        {
            return catDAL.GetCats();
        }

        [HttpGet("getcat/{id}")]
        public Cat GetCat(int id)
        {
            return catDAL.GetCat(id);
        }

        [HttpPost("addcat")]
        public void AddCat(Cat cat)
        {
            catDAL.AddCat(cat);
        }

        [HttpDelete("delete/{id}")]
        public void DeleteCat(int id)
        {
            catDAL.DeleteCat(id);
        }

        [HttpPut("update/{id}")]
        public void UpdateCat(int id, Cat cat)
        {
            Cat oldCat = catDAL.GetCat(id);
            if (cat.breed == null || cat.breed == "")
            {
                cat.breed = oldCat.breed;
            }

            if (cat.age == null || cat.age == "")
            {
                cat.age = oldCat.age;
            }

            if (cat.gender == null || cat.gender == "")
            {
                cat.gender = oldCat.gender;
            }
            
            if (cat.size == null || cat.size == "")
            {
                cat.size = oldCat.size;
            }

            if (cat.color == null || cat.color == "")
            {
                cat.color = oldCat.color;
            }

            if (cat.coat == null || cat.coat == "")
            {
                cat.coat = oldCat.coat;
            }

            //if (cat.spayed == oldCat.spayed)
            //{
            //    cat.spayed = oldCat.spayed;
            //}

            //if (cat.isDeclawed == oldCat.isDeclawed)
            //{
            //    cat.isDeclawed = oldCat.isDeclawed;
            //}

            //if (cat.houseTrained == oldCat.houseTrained)
            //{
            //    cat.houseTrained = oldCat.houseTrained;
            //}

            //if (cat.specialNeeds == oldCat.specialNeeds)
            //{
            //    cat.specialNeeds = oldCat.specialNeeds;
            //}

            //if (cat.shots == oldCat.shots)
            //{
            //    cat.shots = oldCat.shots;
            //}

            catDAL.UpdateCat(id, cat);
        }

        WishlistDAL wlDAL = new WishlistDAL();
        [HttpGet("getwishlists")]
        public List<Wishlist> GetWishlists()
        {
            return wlDAL.GetWishlists();
        }

        [HttpGet("getwishlist/{rowID}")]
        public Wishlist GetWishlist(int id)
        {
            return wlDAL.GetWishlist(id);
        }

        [HttpPost("addwishlist")]
        public void AddWishlist(Wishlist wl)
        {
            wlDAL.AddWishlist(wl);
        }

        [HttpDelete("deletewishlist/{rowID}")]
        public void DeleteWishlist(int id)
        {
            wlDAL.DeleteWishlist(id);
        }

        [HttpPut("updatewishlist/{rowID}")]
        public void UpdateUserPetProfile(int id, Wishlist wl)
        {
            Wishlist oldWishlsit = wlDAL.GetWishlist(id);
            if (wl?.userID == null)
            {
                wl.userID = oldWishlsit.userID;
            }

            if (wl?.animalID == null)
            {
                wl.animalID = oldWishlsit.animalID;
            }       
        }

        [HttpPost("checkLogin")]
        public UserAccount CheckLogin(UserAccount u)
        {
            return userDAL.CheckUserLogin(u);
        }

        [HttpGet("GetWishlistUser/{id}")]
        public List<Wishlist> GetWishlistByUserID(int id)
        {
            return userDAL.GetWishlist(id);
        }

        //attempt to build an api call that gets all pet information at once, might be stupid
        [HttpPost("LoginUser")]
        public TotalAccount LoginAccount(UserAccount u)
        {
            UserAccount account = userDAL.CheckUserLogin(u);
            List<UserPet> petList = userDAL.GetUserPetProfileByUserID(account.id);
            List<Dog> dogList = dogDAL.GetDogsByUserID(account.id);
            List<Cat> catList = catDAL.GetCatsByUserID(account.id);
            List<Wishlist> wishlist = userDAL.GetWishlist(account.id);
            TotalAccount totalAccount = new TotalAccount(account, petList, dogList, catList, wishlist);
            return totalAccount;
        }
    }
}
