namespace INFASS.Models
{
    public class User
    {
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Age { get; set; }
        public string Password { get; set; }

        public string _sqlReg(string[] values, string[] fields, string table_name)
        {
            string val = "";
            for (int i = 0; i < values.Length; i++)
            {
                if (int.TryParse(values[i], out _))
                {
                    val = val + $"{values[i]}";
                }
                else
                {
                    val = val + $"'{values[i]}'";
                }
                if (i < values.Length - 1)
                {
                    val = val + ", ";
                }

            }

            string field = "";
            for (int i = 0; i < fields.Length; i++)
            {
                field = field + $"{fields[i]}";

                if (i < fields.Length - 1)
                {
                    field = field + ", ";
                }

            }

            string sql = $"INSERT INTO {table_name}({field}) \n VALUES({val})";

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

        public string _sqlGetTable(string tableName) { string sql = $"SELECT * FROM {tableName}"; return sql; }
    }
}
