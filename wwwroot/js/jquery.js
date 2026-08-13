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


    if ($("#registerForm").length) {

        $.ajax({
            url: "/Home/GetUsersSql",
            type: "GET",
            success: function (response) {
                alert(response.message);
            }
        });

    }

    $("#updateButton").click(function () {

        let name = $("#name").val();
        let email = $("#email").val();
        let age = $("#age").val();
        let password = $("#password").val();

        $.ajax({
            url: "/Home/Update",
            type: "POST",
            data: {
                name: name,
                email: email,
                age: age,
                password: password
            },
            success: function (response) {
                alert(response.message);
            },
            error: function () {
                alert("An error occurred during update.");
            }
        });
    });


    $("#deleteButton").click(function () {

        let email = $("#email").val();

        $.ajax({
            url: "/Home/Delete",
            type: "POST",
            data: {
                email: email
            },
            success: function (response) {
                alert(response.message);
            },
            error: function () {
                alert("An error occurred during deletion.");
            }
        });
    });
});
