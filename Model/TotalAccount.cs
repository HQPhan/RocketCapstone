using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TheThreeCanineCapstoneCodeketeers.Model
{
    public class TotalAccount
    {
        public UserAccount Account { get; set; }
        public List<UserPet> Profiles { get; set; }
        public List<Dog> DogSearches { get; set; }
        public List<Cat> CatSearches { get; set; }
        public List<Wishlist> Wishlists { get; set; }

        public TotalAccount(UserAccount account, List<UserPet> profiles, List<Dog> dogSearches, List<Cat> catSearches, List<Wishlist> wishlists)
        {
            Account = account;
            Profiles = profiles;
            DogSearches = dogSearches;
            CatSearches = catSearches;
            Wishlists = wishlists;
        }
    }
}
