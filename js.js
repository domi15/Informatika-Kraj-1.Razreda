function WhatTheDogDoing() {
    x = 0
    n = prompt('Unesite najmanju duljinu stranice A')
    var m = n
    num = m
    document.getElementById('duljina').innerHTML = m
    document.getElementById('povrsina').innerHTML = m*m
    document.getElementById("a").innerHTML = "Sada ćemo podijeliti kvadrat na četiri jednaka dijela"
    document.getElementById("b").innerHTML = "Možemo vidjeti kako stranice AE i AH sada tangente kružnice te kako su obje duljine a/2, a to je:";
    while (counter % 2 != 2 && x < 10) {
        w = m / 2
        var t = num.toString(w)
        num = num + w
        var x = x + 1
    }
    document.getElementById("c").innerHTML = num;
    document.getElementById("d").innerHTML = "Duljina je"
    document.getElementById("e").innerHTML = "Površina je"
    document.getElementById("slika").src = "Pic.jpg"
    
}
function DarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }