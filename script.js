const input = document.querySelector('.inputBar');
const passString = "Aa0!Bb1@Cc2#Dd3$Ee4%Ff5^Gg6&Hh7*Ii8(Jj9)Kk_-Ll=+Mm[{]Nn};:Oo'Pp<,>Qq./Rr?Ss`Tt~Uu|VvWwXxYyZz";

function generatePass(){
    let password = "";
    input.value = password;
    let i = 0;
    while(i<26){
        password += passString[Math.floor(Math.random()*passString.length)];
        i++;
    }
    input.value = password;
}

function copyPass(){
    navigator.clipboard.writeText(input.value);
    input.value = "";
    alert("Password copied successfully");
}