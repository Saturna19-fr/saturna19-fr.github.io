let myBtn = document.getElementById("Button1")
let heading = document.querySelector('h1')
let paragraphe = document.querySelector('p')
let clicks = 0
function setUN() {
    let myusername = prompt('Nom?')
    localStorage.setItem('nom', myusername);
    heading.textContent = 'Mozilla est a chier, ' + myusername;
}

myBtn.addEventListener('click', function(){
setUN();
clicks = clicks + 1
paragraphe.textContent = 'Nb de clics = ' + clicks;
})