function showTrailer(trailerId) {
    const trailer = document.getElementById(trailerId);
    if (trailer.style.display === "none") {
        trailer.style.display = "block";
    } else {
        trailer.style.display = "none";
    }
}
