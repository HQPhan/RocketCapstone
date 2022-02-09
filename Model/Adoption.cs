using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TheThreeCanineCapstoneCodeketeers.Model
{
    //This is a model that we might not use in the project. it is a backup in case we decide to use it as the same data is available from the API
    public class Adoption
    {
        [Key]
        public int id { get; set; }
        public int animalID { get; set; }
        public string status { get; set; }
    }
}
