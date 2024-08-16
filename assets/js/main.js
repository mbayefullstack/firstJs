const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const buttonSend = document.getElementById("button-send");

buttonSend.addEventListener("click",
    () => {
        alert(Number(firstName.value) + Number(lastName.value))
    }
);

// function add() {
//     return firstName + lastName;
// }