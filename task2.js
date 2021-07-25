let login;
let password;

login = "Admin";
password = "TheMaster";

if ( login == "Other") {
    console.log("I don't know you");
} else if ( login == "Cansel") {
    console.log("Canseled");
} else if (login == "Admin") {
    console.log("Enter your password");

    if (password == "Cansel") {
        console.log("Canseled");
    } else if (password == "Other") {
        console.log("Wrong password");
    } else if (password == "TheMaster" ) {
        console.log("Welcome!");
    }
}