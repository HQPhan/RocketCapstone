using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace TheThreeCanineCapstoneCodeketeers.Model
{
    public class Cat
    {
        [Key]
        public int id { get; set; }
        public int userID { get; set; }
        public string breed { get; set; }
        public string age { get; set; }
        public string gender { get; set; }
        public string size { get; set; }
        public string color { get; set; }
        public string coat { get; set; }
        public string spayed { get; set; }
        public string isDeclawed { get; set; }
        public string houseTrained { get; set; }
        public string specialNeeds { get; set; }
        public string shots { get; set; }
    }
}
