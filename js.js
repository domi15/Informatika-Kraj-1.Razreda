function WhatTheDogDoing() {
    var x = 0
    n = prompt('Unesite najmanju duljinu stranice A')
    var m = n
    o = m / 2
    var broj = String(o)
    document.getElementById('duljina').innerHTML = m;
    document.getElementById('povrsina').innerHTML = m*m;
    document.getElementById("a").innerHTML = "Sada ćemo podijeliti kvadrat na četiri jednaka dijela";
    document.getElementById("b").innerHTML = "Možemo vidjeti kako stranice AE i AH sada tangente kružnice te kako su obje jednake duljine a/2, te za jednako se povećavaju:";
    while (x < 10) {
        o = o + 10;
        var t = String(o);
        broj = broj + ", " + t;
        x = x + 1;
    }
    document.getElementById("c").innerHTML = broj;
    document.getElementById("d").innerHTML = "Duljina je";
    document.getElementById("e").innerHTML = "Površina je";
    document.getElementById("slika").src = "Pic.jpg";
    
}
function DarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }