var reviewModal = new bootstrap.Modal(document.getElementById('reviewModal'))
eloadok = ["Red Hot Chili Peppers", "Guns N' Roses", "David Bowie", "Michael Jackson", "Gorillaz", "Amy Winehouse", "Outkast", "Juice WRLD", "Wu-Tang Clan", "Burzum", "Prodigy", "Miles Davis"];
albumcimek = ["Blood Sugar Sex Magik", "Appetite For Destruction", "Station To Station", "Bad", "Demon Days", "Back To Black", "Aquemini", "Death Race For Love", "Enter The Wu-Tang (36 Chambers)", "Filosofem", "The Fat of the Land", "Bitches Brew"];
albumkepek = ["redhot.webp", "appetite.webp", "station.jpg", "Michael_Jackson_-_Bad.png", "demon_days.png", "back_to_black.png", "aquemini.jpg", "drfl.png", "wutang.jpg", "filosofem.jpg", "fat_of_the_land.jpg", "bitches_brew.jpg"];

function showReviewModal(index) {
    document.getElementById("reviewModalLabel").innerText = eloadok[index] + " - " + albumcimek[index];
    document.getElementById("reviewAlbumCover").src = "media/" + albumkepek[index];
    document.getElementById("reviewTextArea").innerHTML = "";
    reviewModal.show()
}

function clear() {
    const sections = document.querySelectorAll('.cont');
    sections.forEach((section) => {
      section.style.display = 'none';
    });
  }

function showListaRock() {
    var x = document.querySelector('.listaRock');
    if (x.style.display === "none") {
        clear();
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showListaPop() {
    var x = document.querySelector('.listaPop');
    if (x.style.display === "none") {
        clear();
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showListaHipHop() {
    var x = document.querySelector('.listaHipHop');
    if (x.style.display === "none") {
        clear();
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showListaEgyeb() {
    var x = document.querySelector('.listaEgyeb');
    if (x.style.display === "none") {
        clear();
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}