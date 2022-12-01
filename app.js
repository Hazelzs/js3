let firstName = ``;
let lastName = ``;
let age = ``;
let city = ``;
function userI() {
    firstName = prompt(`What is your first name?`);
    lastName = prompt(`What is your last name?`);
    age = prompt(`What is your age?`);
    city = prompt(`What city do you live in?`);
    return(firstName, lastName, age, city)
}
function newUser() {
    let i = 1;
    let number = 1;
    while (i <= 4) {
        userI();
        class user {
            constructor(firstName, lastName, age, city) {
                this.firstName = firstName;
                this.lastName = lastName;
                this.age = age;
                this.city = city;
            }
        } 
        console.log(`user${number}, First Name: ${firstName}, Last Name: ${lastName}, Age: ${age}, City of Residence: ${city}`);
        number++;
        i++;
    }
}
newUser()