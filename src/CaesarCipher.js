const message = document.querySelector('.message');
const encryptBtn = document.querySelector('.encryptBtn');
// const decryptBtn = document.querySelector('.decryptBtn');

var mode = "ceaser";
var shift = 13;
var encrypted;
export const encrypt = (text,shift) => {
    var result = "";
    if (mode == "ceaser"){
 
        //loop through each caharacter in the text
        for (var i = 0; i < text.length; i++) {
              
             //get the character code of each letter
            var c = text.charCodeAt(i);
 
            // handle uppercase letters
            if(c >= 65 && c <=  90) {
               result += String.fromCharCode((c - 65 + shift) % 26 + 65); 
 
            // handle lowercase letters
            }else if(c >= 97 && c <= 122){
                result += String.fromCharCode((c - 97 + shift) % 26 + 97);
 
            // its not a letter, let it through
            }else {
                result += text.charAt(i);
            }
        }
    }
    //return result;
    message.value = result;
    encrypted = result;
    if (encryptBtn.textContent === "Encrypt"){
        encryptBtn.textContent = "Decrypt";
    }else{
        encryptBtn.textContent = "Encrypt";
    }
}

const decrypt = (text,shift) => {
    var result = "";
    shift = (26 - shift) % 26;
    result = encrypt(text,shift);
}   

// const decryptMsg = () => {
//     if (message.value !== ""){
//         decrypt(message.value,shift);
//         console.log(message.value);
//     }
// };
// decryptBtn.addEventListener('click', decryptMsg);

const encryptMsg = () => {
    if (message.value !== ""){
        encrypt(message.value,shift);
    }
};
encryptBtn.addEventListener('click', encryptMsg);
