using Dapper;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TheThreeCanineCapstoneCodeketeers.Model
{
    public class WishlistDAL
    {
        public List<Wishlist> GetWishlists()
        {
            string sql = "select * from wishlist";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                List<Wishlist> output = connect.Query<Wishlist>(sql).ToList();
                connect.Close();
                return output;
            }
        }

        public Wishlist GetWishlist(int id)
        {
            List<Wishlist> output = GetWishlists();
            Wishlist match;
            try
            {
                match = output.Where(x => x.rowID == id).First();
            }
            catch (InvalidOperationException)
            {
                match = new Wishlist();
                match.userID = -1;
            }
            return match;
        }

        public void AddWishlist(Wishlist w)
        {
            string sql = $"insert into wishlist values({w.rowID},{w.userID},{w.animalID})";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<Wishlist>(sql);
                connect.Close();
            }
        }

        public void DeleteWishlist(int id)
        {
            string sql = $"delete from wishlist where rowID = {id}";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<Wishlist>(sql);
                connect.Close();
            }
        }

        public void UpdateWishlist(int id, Wishlist w)
        {
            string sql = $"update wishlist set userID={w.userID},animalID={w.animalID} where rowID={w.rowID}";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<Wishlist>(sql);
                connect.Close();
            }
        }
    }
}
