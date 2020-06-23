(function () {
    var form = document.querySelector("form");
    var kodas = document.getElementById("kodas");
    var tekstasPavyko = document.getElementById("tekstasPavyko");
    var kodoNumeris = document.getElementById("kodoNumeris");
    var kodoNumerisTekstas = document.getElementById("kodoNumerisTekstas");

    var tekstasNuoroda = document.getElementById("tekstasNuoroda");
    var tekstasNuorodaUrl = document.getElementById("tekstasNuorodaUrl");
    var kodoNumerisTekstasNuoroda = document.getElementById("kodoNumerisTekstasNuoroda");

    var paveikslelisNuoroda = document.getElementById("paveikslelisNuoroda");
    var paveikslelisNuorodaHref = document.getElementById("paveikslelisNuorodaHref");
    var paveikslelisNuorodaSaltinis = document.getElementById("paveikslelisNuorodaSaltinis");
    var kodoNumerisNuoroda = document.getElementById("kodoNumerisNuoroda");

    var paveikslelis = document.getElementById("paveikslelis");
    var paveikslelioSaltinis = document.getElementById("paveikslelioSaltinis");

    var gif = document.getElementById("gif");
    var gifPaveikslelis = document.getElementById("gifPaveikslelis");
    var kodoNumerisGif = document.getElementById("kodoNumerisGif");

    var audio = document.getElementById("audio");
    var audioIrasas = document.getElementById("audioIrasas");
    var kodoNumerisAudio = document.getElementById("kodoNumerisAudio");

    var video = document.getElementById("video");
    var videoIrasas = document.getElementById("videoIrasas");
    var kodoNumerisVideo = document.getElementById("kodoNumerisVideo");





    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var tekstas = document.getElementById("tekstas");
        //        TEKSTAS
        if (kodas.value == "TEK") {
            tekstas.style.display = "block";
            form.style.display = "none";
            kodoNumerisTekstas.textContent = "TEK ";
        }
        //        TEKSTAS-NUORODA
        else if (kodas.value == "TEKNUO") {
            tekstasNuoroda.style.display = "block";
            tekstasNuorodaUrl.setAttribute("href", "https://orientacines.lt/");
            form.style.display = "none";
            kodoNumerisTekstasNuoroda.textContent = "TEKNUO ";
        }
        //        PAVEIKSLĖLIS
        else if (kodas.value == "TLF123") {
            paveikslelis.style.display = "block";
            paveikslelioSaltinis.setAttribute("src", "./IMG/telefonas.jpg");
            form.style.display = "none";
            kodoNumeris.textContent = "TLF123 ";
        } else if (kodas.value == "BAN123") {
            paveikslelis.style.display = "block";
            paveikslelioSaltinis.setAttribute("src", "./IMG/bananas.jpg");
            form.style.display = "none";
            kodoNumeris.textContent = "BAN123 ";
        } else if (kodas.value == "LKR123") {
            paveikslelis.style.display = "block";
            paveikslelioSaltinis.setAttribute("src", "./IMG/laikrodis.jpg");
            form.style.display = "none";
            kodoNumeris.textContent = "LKR123 ";
        }
        //        PAVEIKSLĖLIS-NUORODA
        else if (kodas.value == "NUOR") {
            paveikslelisNuoroda.style.display = "block";
            paveikslelisNuorodaHref.setAttribute("href", "https://orientacines.lt/");
            paveikslelisNuorodaSaltinis.setAttribute("src", "./IMG/ausines.jpg");
            form.style.display = "none";
            kodoNumerisNuoroda.textContent = "NUOR ";
        }
        //        GIF
        else if (kodas.value == "GIF") {
            gif.style.display = "block";
            gifPaveikslelis.setAttribute("src", "./GIF/GIF_PVZ.gif");
            form.style.display = "none";
            kodoNumerisGif.textContent = "GIF ";
        }
        //        AUDIO
        else if (kodas.value == "STA") {
            audio.style.display = "block";
            audioIrasas.setAttribute("src", "./AUDIO/STAUROLITAS.wav");
            form.style.display = "none";
            kodoNumerisAudio.textContent = "STA ";
        } else if (kodas.value == "ZOI") {
            audio.style.display = "block";
            audioIrasas.setAttribute("src", "./AUDIO/ZOISITAS.wav");
            form.style.display = "none";
            kodoNumerisAudio.textContent = "ZOI ";
        }
        //        VIDEO
        else if (kodas.value == "VID") {
            video.style.display = "block";
            videoIrasas.setAttribute("src", "./VIDEO/filmukas.mp4");
            form.style.display = "none";
            kodoNumerisVideo.textContent = "VID ";
        }
        //        YOUTUBE
        else if (kodas.value == "YOU1") {
            document.getElementById("youtube1").style.display = "block";
            form.style.display = "none";
            document.getElementById("kodoNumerisYoutube1").textContent = "YOU1 ";
        } else if (kodas.value == "YOU2") {
            document.getElementById("youtube2").style.display = "block";
            form.style.display = "none";
            document.getElementById("kodoNumerisYoutube2").textContent = "YOU2 ";
        } else {
            swal({
                text: "Kodas neteisingas",
                button: "Grįžti",

            })
        }
        kodas.value = "";

    })
})();
