using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace TheThreeCanineCapstoneCodeketeers.Model
{
    public class UserPet
    {
        [Key]
        public int id { get; set; }
        public int userID { get; set; }
        public string wantedPet { get; set; }
        public string kidsAtHome { get; set; }
        public string currentPetOwner { get; set; }
        public string currentPetsAtHome { get; set; }
        public string outdoorSpace { get; set; }
        public string LandlordPetRestriction { get; set; }


    }
}
