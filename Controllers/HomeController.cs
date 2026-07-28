using INFASS.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Xml.Linq;

namespace INFASS.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        User user = new();

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Login(string email, string password)
        {
            var users = new User
            {
                Email = email,
                Password = password
            };
            if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(password))
            {
                return Json(new { success = false, message = "Please enter both email and password." });
            }
            return Json(new { success = true, message = $"{user._sqlLogin(users.Email, users.Password)}" });
        }

        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Register(string name, string email, string age, string password, string confirmPassword)
        {
            string[] values =
            {
                name, email, age, password
            };

            string[] fields =
            {
                "Name", "Email", "Age", "Password"
            };

            if (string.IsNullOrEmpty(name) || string.IsNullOrEmpty(email) || string.IsNullOrEmpty(password) || string.IsNullOrEmpty(confirmPassword) || string.IsNullOrEmpty(age))
            {
                return Json(new { success = false, message = "All fields are required." });
            }
            if (password != confirmPassword)
            {
                return Json(new { success = false, message = "Passwords do not match." });
            }
            return Json(new { success = true, message = $"{user._sqlReg(values, fields, "User")}" });
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
