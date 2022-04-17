let myBtn = document.getElementById("Button1")
let heading = document.querySelector('h1')
function setUN() {
    let myusername = prompt('Nom?')
    localStorage.setItem('nom', myusername);
    heading.textContent = 'Mozilla est a chier, ' + myusername;
}

myBtn.addEventListener('click', function(){
setUN();
})