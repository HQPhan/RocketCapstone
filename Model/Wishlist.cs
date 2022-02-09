using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace TheThreeCanineCapstoneCodeketeers.Model
{
    public class Wishlist
    {
        [Key]
        public int rowID { get; set; }
        public int userID { get; set; }
        public int animalID { get; set; }
    }
}
