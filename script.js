const cardNumber = document.querySelector("#number");
const cardVaild = document.querySelector("#vaild");
const cardCvv = document.querySelector("#cvv");

cardNumber.addEventListener("input", formatCardNumber);
cardVaild.addEventListener("input", formatCardValidity);
cardCvv.addEventListener("input", formatCvv);


function formatCardNumber(e) {
	cardNumber.maxLength = "19";
	e.target.value = e.target.value
	.replace(/[^\dA-Z]/g, "")
	.replace(/[^\da-z]/g, "")
	.replace(/(.{4})/g, "$1 ")
	.trim();
	if (cardNumber.value.length == 19) {
		formatCardValidity()
	}
}
 
 //format validatity
function formatCardValidity(e) {
	cardVaild.focus();
	cardVaild.maxLength = "5";
    
    if (cardVaild.value.length < 5) {
    	cardVaild.value = cardVaild.value
	    .replace(/[^\dA-Z]/g, "")
	    .replace(/[^\da-z]/g, "")
	    .replace(/(.{2})/g, "$1/")
	    .trim();
    }

    if (cardVaild.value.length == 5) {
    	formatCvv();
    }
}


//Format Cvv
function formatCvv() {
	cardCvv.focus();
	cardCvv.maxLength = "3"
	cardCvv.value = cardCvv.value
	.replace(/[^\dA-Z]/g, "")
	.replace(/[^\da-z]/g, "")
	.trim();
}
