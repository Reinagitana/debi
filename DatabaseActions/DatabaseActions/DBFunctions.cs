using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;

public class DBFunctions
{
    public static void InsertContent(string title, string type, string link, string picture, string userID)
    {
        SqlConnection conn = new SqlConnection(@"Data Source = (localdb)\ProjectModels; Initial Catalog = DBI;");
        conn.Open();
        string insert = " INSERT INTO ContentItem([Title], [Content_types], [Address_content], [Address_IMG], [UserID])" +
            " VALUES('" + title + "','" + type + "','" + link + "','" + picture + "','" + userID + "')";
        SqlCommand cmd = new SqlCommand(insert, conn);
        cmd.ExecuteNonQuery();
        conn.Close();
    }

    public static void InsertUser(string First_Name, string Last_Name, string gender, string email, string City, string BirthDay, string User_Name, string password, string Phone_Number)
    {
        SqlConnection conn = new SqlConnection(@"Data Source = (localdb)\ProjectModels; Initial Catalog = DBI;");
        conn.Open();
        string insert = " INSERT INTO Users([First_Name], [Last_Name], [Gender], [Email], [City], [BirthDay], [User_Name], [Password], [Phone_Number])" +
            " VALUES('" + First_Name + "','" + Last_Name + "','" + gender + "','" + email + "','" + City + "','" + BirthDay + "','" + User_Name + "','" + Phone_Number + "','" + password + "')";
        SqlCommand cmd = new SqlCommand(insert, conn);
        cmd.ExecuteNonQuery();
        conn.Close();
    }

    public static int CountItems()
    {
        SqlConnection conn = new SqlConnection(@"Data Source = (localdb)\ProjectModels; Initial Catalog = DBI;");
        conn.Open();
        string count = "SELECT COUNT (*) FROM ContentItem";
        SqlCommand cmd = new SqlCommand(count, conn);
        int recordsCount = (int)cmd.ExecuteScalar();
        return recordsCount;
    }

    public static int CountUsers()
    {
        SqlConnection conn = new SqlConnection(@"Data Source = (localdb)\ProjectModels; Initial Catalog = DBI;");
        conn.Open();
        string count = "SELECT COUNT (*) FROM Users";
        SqlCommand cmd = new SqlCommand(count, conn);
        int recordsCount = (int)cmd.ExecuteScalar();
        return recordsCount;
    }

    public static int CountMatchedUsersByUserName(string User_Name)
    {
        SqlConnection conn = new SqlConnection(@"Data Source = (localdb)\ProjectModels; Initial Catalog = DBI;");
        conn.Open();
        string count = "SELECT COUNT(User_Name) FROM Users WHERE[User_Name] = '" + User_Name + "'";
        SqlCommand cmd = new SqlCommand(count, conn);
        int recordsCount = (int)cmd.ExecuteScalar();
        return recordsCount;
    }

    public static int TryLogin(string User_Name, string password)
    {
        if (CountMatchedUsersByUserNameAndPassword(User_Name, password) > 0)
        {
            SqlConnection conn = new SqlConnection(@"Data Source = (localdb)\ProjectModels; Initial Catalog = DBI;");
            conn.Open();
            string select = "SELECT [Last_Name] FROM Users WHERE [User_Name] = '" + User_Name + "'" + "AND [Password] = '" + password + "'";
            SqlCommand cmd = new SqlCommand(select, conn);
            SqlDataReader reader = cmd.ExecuteReader();
            if (reader.Read())
                return Convert.ToInt32(reader["Last_Name"]);
            else
                return -1;
        }
        else
            return -1;
    }

    public static string GetFullNameByUserId(int userId)
    {
        SqlConnection conn = new SqlConnection(@"Data Source = (localdb)\ProjectModels; Initial Catalog = DBI;");
        conn.Open();
        string select = "SELECT [First_Name],[Last_Name] FROM Users WHERE [Last_Name] = '" + userId.ToString() + "'";
        SqlCommand cmd = new SqlCommand(select, conn);
        SqlDataReader reader = cmd.ExecuteReader();
        if (reader.Read())
            return reader["First_Name"].ToString() + " " + reader["Last_Name"].ToString();
        else
            return "User Last_Name not found";
    }

    public static bool UserNameExists(string User_Name)
    {
        return CountMatchedUsersByUserName(User_Name) > 0;
    }

    public static int CountMatchedUsersByUserNameAndPassword(string User_Name, string password)
    {
        SqlConnection conn = new SqlConnection(@"Data Source = (localdb)\ProjectModels; Initial Catalog = DBI;");
        conn.Open();
        string count = "SELECT COUNT(User_Name) FROM Users WHERE [User_Name] = '" + User_Name + "'" + "AND [Password] = '" + password + "'";
        SqlCommand cmd = new SqlCommand(count, conn);
        int recordsCount = (int)cmd.ExecuteScalar();
        return recordsCount;
    }

    public static object[] SelectAllContents()
    {
        object[] contentArr = new object[CountItems()];
        string[,] userNamesArr = SelectAllUserNames();
        SqlConnection conn = new SqlConnection(@"Data Source = (localdb)\ProjectModels; Initial Catalog = DBI;");
        conn.Open();
        string select = "SELECT [Title],[Type],[Link],[Picture],[UserID]  FROM ContentItem";
        SqlCommand cmd = new SqlCommand(select, conn);
        SqlDataReader reader = cmd.ExecuteReader();
        for (int i = 0; i < contentArr.Length; i++)
        {
            if (reader.Read()) 
            {
                string Last_Name = reader["UserID"].ToString();
                int pos = 0;
                bool found = false;
                string fullName = "";
                while (pos < userNamesArr.GetLength(1) && !found)
                {
                    if (userNamesArr[0, pos] == Last_Name)
                    {
                        fullName = userNamesArr[1, pos];
                        found = true;
                    }
                    pos++;
                }

                contentArr[i] = new { Title = reader["Title"].ToString(), Type = reader["Type"].ToString(), Link = reader["Link"].ToString(), Picture = reader["Picture"].ToString(), UserID = fullName };
            }
            else
                i = contentArr.Length;
        }
        conn.Close();
        for (int i = 0; i < contentArr.Length; i++)
            Console.WriteLine(contentArr[i]);
        return contentArr;
    }

    public static object[] SelectAllUsers()
    {
        object[] usersArr = new object[CountUsers()];
        SqlConnection conn = new SqlConnection(@"Data Source = (localdb)\ProjectModels; Initial Catalog = DBI;");
        conn.Open();
        string select = "SELECT [First_Name],[Last_Name],[Gender],[Email],[City],[BirthDay],[User_Name],[Password]  FROM Users";
        SqlCommand cmd = new SqlCommand(select, conn);
        SqlDataReader reader = cmd.ExecuteReader();

        for (int i = 0; i < usersArr.Length; i++)
        {
            if (reader.Read()) 
                usersArr[i] = new { First_Name = reader["First_Name"].ToString(), Last_Name = reader["Last_Name"].ToString(), Gender = reader["Gender"].ToString(), Email = reader["Email"].ToString(), City = reader["City"].ToString(), BirthDay = reader["BirthDay"].ToString(), User_Name = reader["User_Name"].ToString(), Password = reader["Password"].ToString() };
            else
                i = usersArr.Length;
        }
        conn.Close();
        for (int i = 0; i < usersArr.Length; i++)
            Console.WriteLine(usersArr[i]);
        return usersArr;
    }

    public static string[,] SelectAllUserNames()
    {
        string[,] userNamesArr = new string[2, CountUsers()];
        SqlConnection conn = new SqlConnection(@"Data Source = (localdb)\ProjectModels; Initial Catalog = DBI;");
        conn.Open();
        string select = "SELECT [Last_Name], [First_Name], [Last_Name] FROM Users";
        SqlCommand cmd = new SqlCommand(select, conn);
        SqlDataReader reader = cmd.ExecuteReader();

        for (int i = 0; i < userNamesArr.Length; i++)
        {
            if (reader.Read()) 
            {
                userNamesArr[0, i] = reader["Last_Name"].ToString();
                userNamesArr[1, i] = reader["First_Name"].ToString() + "\n" + reader["Last_Name"].ToString();
            }
            else
                i = userNamesArr.Length;
        }
        conn.Close();
        return userNamesArr;
    }

    public static string SelectFullNameByUserNameAndPassword(string User_Name, string password)
    {
        SqlConnection conn = new SqlConnection(@"Data Source = (localdb)\ProjectModels; Initial Catalog = DBI;");
        conn.Open();
        string select = "SELECT [First_Name],[Last_Name] FROM Users WHERE [User_Name] = '" + User_Name + "'" + "AND [Password] = '" + password + "'";
        SqlCommand cmd = new SqlCommand(select, conn);
        SqlDataReader reader = cmd.ExecuteReader();
        string fullName = "";
        if (reader.Read())
            fullName = reader["First_Name"].ToString() + " " + reader["Last_Name"].ToString();
        else
            fullName = "User not exists";
        conn.Close();
        return fullName;
    }
}


