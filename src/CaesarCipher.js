const message = document.querySelector('.message');
const encryptBtn = document.querySelector('.encryptBtn');

var mode = "ceaser";
var shift = 13;
var encrypted;
const encrypt = (text,shift) => {
    var result = "";
    if (mode == "ceaser"){

        for (var i = 0; i < text.length; i++) {

            var c = text.charCodeAt(i);

            if(c >= 65 && c <=  90) {
               result += String.fromCharCode((c - 65 + shift) % 26 + 65);

            }else if(c >= 97 && c <= 122){
                result += String.fromCharCode((c - 97 + shift) % 26 + 97);

            }else {
                result += text.charAt(i);
            }
        }
    }

    message.value = result;
    encrypted = result;
    if (encryptBtn.textContent === "Encrypt"){
        encryptBtn.textContent = "Decrypt";
    }else{
        encryptBtn.textContent = "Encrypt";
    }
}

const encryptMsg = () => {
    if (message.value !== ""){
        encrypt(message.value,shift);
    }
};
//encryptBtn.addEventListener('click', encryptMsg);

module.exports = encryptMsg;