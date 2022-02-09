using Dapper;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TheThreeCanineCapstoneCodeketeers.Model
{
    public class CatDAL
    {
        public List<Cat> GetCats()
        {
            string sql = "select * from cat";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                List<Cat> output = connect.Query<Cat>(sql).ToList();
                connect.Close();
                return output;
            }
        }

        public Cat GetCat(int id)
        {
            List<Cat> output = GetCats();
            Cat match;
            try
            {
                match = output.Where(x => x.id == id).First();
            }
            catch (InvalidOperationException)
            {
                match = new Cat();
                match.userID = -1;
            }
            return match;
        }

        public List<Cat> GetCatsByUserID(int userID)
        {
            List<Cat> output = GetCats();
            List<Cat> match;
            try
            {
                match = output.Where(x => x.userID == userID).ToList();
            }
            catch (InvalidOperationException)
            {
                match = new List<Cat>();
            }
            return match;
        }

        public void AddCat(Cat c)
        {
            string sql = $"insert into cat values(0,{c.userID},'{c.breed}','{c.age}','{c.gender}','{c.size}','{c.color}','{c.coat}','{c.spayed}','{c.isDeclawed}','{c.houseTrained}','{c.specialNeeds}','{c.shots}')";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<Cat>(sql);
                connect.Close();
            }
        }

        public void DeleteCat(int id)
        {
            string sql = $"delete from cat where id = {id}";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<Cat>(sql);
                connect.Close();
            }
        }

        public void UpdateCat(int id, Cat c)
        {
            string sql = $"update cat set userID={c.userID},breed='{c.breed}',age='{c.age}',gender='{c.gender}',size='{c.size}',color='{c.color}',coat='{c.coat}',spayed='{c.spayed}',isDeclawed='{c.isDeclawed}',houseTrained='{c.houseTrained}',specialNeeds='{c.specialNeeds}',shots='{c.shots}' where id={id}";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<Cat>(sql);
                connect.Close();
            }

        }

        
    }
}
