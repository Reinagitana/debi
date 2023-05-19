using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace DatabaseActions
{
    internal class Program
    {
        static void Main(string[] args)
        {
            DBFunctions.InsertContent("ViolinForSale", "Violin", "https://did.li/Helrl", "https://did.li/YpN5q", "2");
            DBFunctions.InsertUser("Ronit", "Hit", "Male", "ronit@gmail.com", "2", "1998 - 01 - 13", "Ronit12", "Ronit666", "1234567891");
            DBFunctions.CountItems();
            DBFunctions.CountUsers();
            DBFunctions.CountMatchedUsersByUserName("yuval12");
            DBFunctions.TryLogin("May2", "May123");
            DBFunctions.GetFullNameByUserId(1);
            DBFunctions.UserNameExists("Dorl12");
            DBFunctions.SelectAllContents();
            DBFunctions.SelectAllUsers();
            DBFunctions.SelectAllUserNames();
            DBFunctions.SelectFullNameByUserNameAndPassword("Mayl12", "May1243");

                }
    }
}
