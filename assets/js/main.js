const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const buttonSend = document.getElementById("button-send");

const reg = /\d/;
const blockString = reg.test(firstName);
const blockStringLastName = reg.test(lastName);
    buttonSend.addEventListener("click",
    () => {
        
        alert(Number(add.value));
        // alert(blockString)
    }
);

function add(val1, val2) {
    return val1 + val2;
}


