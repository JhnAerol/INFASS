namespace INFASS.Models
{
    public class User
    {
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public string _sqlReg(string email, string password, string fullname)
        {
            Email = email;
            Password = password;
            FullName = fullname;
            string[] U = { email, password, fullname };
            string J = string.Join(", ", U);
            string? sql = $"INSERT INTO User(FullName, Email, Password) \n VALUES({J})";
            return sql;
        }
        public string _sqlLogin(string email, string password)
        {
            Email = email;
            Password = password;
            string[] U = { email, password };
            string J = string.Join(", ", U);
            string? sql = $"INSERT INTO User(Email, Password) \n VALUES({J})";
            return sql;
        }
    }
}
