$(document).ready(function () {
    $("#loginForm").submit(function (event) {

        event.preventDefault();

        let email = $("#email").val();
        let password = $("#password").val();

        $.ajax({
            url: "/Home/Login",
            method: "POST",
            data: {
                "email": email,
                "password": password
            },
            success: function (response) {
                if (response.success) {
                    alert(response.message)
                    //alert("Successful Login!\n\n" + "Email: " + email + "\n" + "Password: " + password);
                } else {
                    alert("Error: " + response.message);
                }
            },
            error: function () {
                alert("An error occurred during submission.");
            }
        });
    });

    $("#registerForm").submit(function (event) {
        event.preventDefault();

        let name = $("#name").val();
        let email = $("#email").val();
        let password = $("#password").val();
        let confirmPassword = $("#confirmPassword").val();

        $.ajax({
            url: "/Home/Register",
            method: "POST",
            data: {
                "name": name,
                "email": email,
                "password": password,
                "confirmPassword": confirmPassword
            },
            success: function (response) {
                if (response.success) {
                    alert(response.message)
                    //alert("Registration successful!\n\n" + "Name: " + name + "\n" + "Email: " + email + "\n" + "Password: " + password);
                } else {
                    alert("Error: " + response.message);
                }
            },
            error: function () {
                alert("An error occurred during submission.");
            }
        });
    });
});
