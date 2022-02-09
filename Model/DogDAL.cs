using Dapper;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TheThreeCanineCapstoneCodeketeers.Model
{
    public class DogDAL
    {
        public List<Dog> GetDogs()
        {
            string sql = "select * from dog";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                List<Dog> output = connect.Query<Dog>(sql).ToList();
                connect.Close();
                return output;
            }
        }

        public Dog GetDog(int id)
        {
            List<Dog> output = GetDogs();
            Dog match;
            try
            {
                match = output.Where(x => x.id == id).First();
            }
            catch (InvalidOperationException)
            {
                match = new Dog();
                match.userID = -1;
            }
            return match;
        }

        public List<Dog> GetDogsByUserID(int userID)
        {
            List<Dog> output = GetDogs();
            List<Dog> match;
            try
            {
                match = output.Where(x => x.userID == userID).ToList();
            }
            catch (InvalidOperationException)
            {
                match = new List<Dog>();
            }
            return match;
        }
        public void AddDog(Dog d)
        {
            string sql = $"insert into dog values(0,{d.userID},'{d.breed}','{d.age}','{d.gender}','{d.size}','{d.color}','{d.coat}','{d.spayed}','{d.houseTrained}','{d.specialNeeds}','{d.shots}')";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<Dog>(sql);
                connect.Close();
            }
        }

        public void DeleteDog(int id)
        {
            string sql = $"delete from dog where id = {id}";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<Dog>(sql);
                connect.Close();
            }
        }

        public void UpdateDog(int id, Dog d)
        {
            string sql = $"update dog set userID={d.userID},breed='{d.breed}',age='{d.age}',gender='{d.gender}',size='{d.size}',color='{d.color}',coat='{d.coat}',spayed='{d.spayed}',houseTrained='{d.houseTrained}',specialNeeds='{d.specialNeeds}',shots='{d.shots}' where id={id}";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<Dog>(sql);
                connect.Close();
            }

        }
    }
}
