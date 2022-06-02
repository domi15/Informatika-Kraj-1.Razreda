function WhatTheDogDoing() {
    n = prompt('Unesi duljinu stranice A')
    var m = n
    document.getElementById('duljina').innerHTML = m
    document.getElementById('povrsina').innerHTML = m*m
    document.getElementById("a").innerHTML = "Sada ćemo podijeliti kvadrat na četiri jednaka dijela"
    document.getElementById("b").innerHTML = "Možemo vidjeti kako stranice AE i AH sada tangente kružnice te kako su obje duljine a/2, a to je:";
    document.getElementById("c").innerHTML = m/2;
    document.getElementById("d").innerHTML = "Duljina je"
    document.getElementById("e").innerHTML = "Površina je"
    
}
function DarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }