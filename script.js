// Select all squares
let squares = document.querySelectorAll(".square");

// Loop through each square
squares.forEach((square) => {

    // When mouse enters
    square.addEventListener("mouseenter", () => {
        squares.forEach((sq) => {
            if (sq !== square) {
                sq.style.backgroundColor = "#6F4E37"; // Coffee
            }
        });
    });

    // When mouse leaves
    square.addEventListener("mouseleave", () => {
        squares.forEach((sq) => {
            sq.style.backgroundColor = "#E6E6FA"; // Lavender
        });
    });

});