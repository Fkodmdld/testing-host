function login() {
    let u = document.getElementById("user").value;
    let p = document.getElementById("pass").value;

    if (u === "admin" && p === "123") {
        window.location = "app.html";
    } else {
        alert("Username ឬ Password មិនត្រឹមត្រូវ");
    }
}