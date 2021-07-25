let login;
let password;

login = "Admin";
password = "TheMaster";

switch (login) {
    case "Other":
        console.log("I don't know you");
        break;
    case "Cansel":
        console.log("Canseled");
        break;
    case "Admin":
        console.log("Enter your password");
        switch (password) {
            case "Cansel":
                console.log("Canseled");
                break;
            case "Other":
                console.log("Wrong password");
                break;
            case "TheMaster":
                console.log("Welcome!");
                break;
            default: console.log("You don`t enter any password or enter bad value")
        }
        break;
    default: console.log("You don`t enter any login or enter bad value");
}