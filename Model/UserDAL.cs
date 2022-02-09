using Dapper;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace TheThreeCanineCapstoneCodeketeers.Model
{
    public class UserDAL
    {

        //CRUD for the UserAccountProfile table
        //getting all users
        public List<UserAccount> GetUserAccount()
        {
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                string sql = "select * from useraccountprofile";
                connect.Open();
                List<UserAccount> output = connect.Query<UserAccount>(sql).ToList();
                connect.Close();
                return output;
            }
        }

        //getting the user at a specific id
        public UserAccount GetUserAccount(int id)
        {
            List<UserAccount> output = GetUserAccount();
            UserAccount match;
            try
            {
                match = output.Where(user => user.id == id).First();
            }
            catch (InvalidOperationException)
            {
                match = new UserAccount();
                match.userName = $"User at id {id} does not exist, please try another id";
            }
            return match;
        }

        public void LogIn(string username, string password)
        {
            //Encrypt(password)
            //Query for 
        }

        //add user
        public void InsertUser(UserAccount u)
        {
            string sql = $"insert into useraccountprofile values(0, '{u.userName}', '{GetHash(u.password)}', '{u.firstName}', '{u.lastName}', '{u.contact}', '{u.address}')";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<UserAccount>(sql);
                connect.Close();
            }

        }

        //delete user
        public void DeleteUserAccount(int id)
        {
            string sql = $"delete from useraccountprofile where id ={id}";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<UserAccount>(sql);
                connect.Close();
            }
        }

        //update user
        public void UpdateUserAccount(int id, UserAccount newInfo)
        {
            string sql = $"update useraccountprofile set userName='{newInfo.userName}', password='{newInfo.password}', firstName='{newInfo.firstName}', lastName='{newInfo.lastName}', contact='{newInfo.contact}', address='{newInfo.address}'  where id={id}";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<UserAccount>(sql);
                connect.Close();
            }

        }

        //CRUD for the UserPetProfile table
        //get all the user petprofiles
        public List<UserPet> GetUserPetProfile()
        {
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                string sql = "select * from userpetprofile";
                connect.Open();
                List<UserPet> output = connect.Query<UserPet>(sql).ToList();
                connect.Close();
                return output;
            }
        }

        //getting the userptprofile at a specific id
        public UserPet GetUserPetProfile(int id)
        {
            List<UserPet> output = GetUserPetProfile();
            UserPet match;
            try
            {
                match = output.Where(userPet => userPet.id == id).First();
            }
            catch (InvalidOperationException)
            {
                match = new UserPet();
                match.userID = -1; //this means that if -1 is returned then the db has an error. it could not find the user
            }
            return match;
        }
        public List<UserPet> GetUserPetProfileByUserID(int userID)
        {
            List<UserPet> output = GetUserPetProfile();
            List<UserPet> match;
            try
            {
                match = output.Where(userPet => userPet.userID== userID).ToList();
            }
            catch (InvalidOperationException)
            {
                match = new List<UserPet> ();
                 //return empty list if there are no matches
            }
            return match;
        }

        //add userpetprofile
        public void InsertUserPetProfile(UserPet userPet)
        {
            string sql = $"insert into userpetprofile values(0, {userPet.userID}, '{userPet.wantedPet}', '{userPet.kidsAtHome}', '{userPet.currentPetOwner}', '{userPet.currentPetsAtHome}', '{userPet.outdoorSpace}', '{userPet.LandlordPetRestriction}')";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<UserPet>(sql);
                connect.Close();
            }

        }

        //delete userpetprofile
        public void DeleteUserPetProfile(int id)
        {
            string sql = $"delete from userpetprofile where id ={id}";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<UserPet>(sql);
                connect.Close();
            }
        }

        public void UpdateUserPetProfile(int id, UserPet userPet)
        {
            string sql = $"update userpetprofile set userID={userPet.userID}, wantedpet='{userPet.wantedPet}', kidsathome='{userPet.kidsAtHome}', currentpetowner='{userPet.currentPetOwner}',currentpetsathome='{userPet.currentPetsAtHome}', outdoorspace='{userPet.outdoorSpace}', landlordpetrestrictions='{userPet.LandlordPetRestriction}'  where id={id}";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<UserPet>(sql);
                connect.Close();
            }

        }
        private string GetHash(string text)
        {
            string hash = ""; //initializing an empty string
            using (var sha256 = SHA256.Create())
            {
                //taking a string the user inputted and hash it
                var hashedBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(text));

                //get the hashed string
                hash = BitConverter.ToString(hashedBytes).Replace("-", "").ToLower(); //this line converts from byte to a string


            }
            return hash; //here we are returning the hash.
        }

        public UserAccount CheckUserLogin(UserAccount u)
        {
            string hashPassword = GetHash(u.password);
            List<UserAccount> output = GetUserAccount();
            UserAccount match;
            try
            {
                match = output.Where(user => user.password == hashPassword && user.userName == u.userName).First();
            }
            catch (InvalidOperationException)
            {
                match = new UserAccount();
                match.userName = $"Username or password do not match, please try again!";
            }
            return match;
        }


        public List<Wishlist> GetWishlist(int id)
        {
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                string sql = $"select * from wishlist where userID = {id} ";
                connect.Open();
                List<Wishlist> output = connect.Query<Wishlist>(sql).ToList();
                connect.Close();
                return output;
            }
        }
    }
}
