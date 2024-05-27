var reviewModal = new bootstrap.Modal(document.getElementById('reviewModal'))
eloadok = ["Red Hot Chili Peppers", "Guns N' Roses", "David Bowie"];
albumcimek = ["Blood Sugar Sex Magik", "Appetite For Destruction", "Station To Station"];
albumkepek = ["redhot.webp", "appetite.webp", "station.jpg"];

function showReviewModal(index) {
    document.getElementById("reviewModalLabel").innerText = eloadok[index] + " - " + albumcimek[index];
    document.getElementById("reviewAlbumCover").src = "media/" + albumkepek[index];
    document.getElementById("reviewTextArea").innerHTML = "";
    reviewModal.show()
}