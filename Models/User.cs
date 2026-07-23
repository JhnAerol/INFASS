namespace INFASS.Models
{
    public class User
    {
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Age { get; set; }
        public string Password { get; set; }

        public string _sqlReg(string fullname, string email,string age, string password)
        {
            Email = email;
            Password = password;
            FullName = fullname;
            Age = age;
            string[] U = { fullname, email, age, password };
            string J = string.Join(", ", U);
            string? sql = $"INSERT INTO User(Fullname, Email, Age, Password) \n VALUES({J})";
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
