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
        let age = $("#age").val();
        let password = $("#password").val();
        let confirmPassword = $("#confirmPassword").val();

        $.ajax({
            url: "/Home/Register",
            method: "POST",
            data: {
                "name": name,
                "email": email,
                "password": password,
                "age": age,
                "confirmPassword": confirmPassword
            },
            success: function (response) {
                if (response.success) {
                    alert(response.message)
                } else {
                    alert("Error: " + response.message);
                }
            },
            error: function () {
                alert("An error occurred during submission.");
            }
        });
    });
    if ($("#registerForm").length) {

        $.ajax({
            url: "/Home/GetTableSql",
            type: "GET",
            success: function (response) {
                alert(response.message);
            }
        });

    }
});
