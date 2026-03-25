// Select all squares
let squares = document.querySelectorAll(".square");

squares.forEach((square) => {

    // Mouse over (Cypress supports this)
    square.addEventListener("mouseover", () => {
        squares.forEach((sq) => {
            if (sq !== square) {
                sq.style.backgroundColor = "#6F4E37"; // Coffee
            }
        });
    });

    // Mouse out
    square.addEventListener("mouseout", () => {
        squares.forEach((sq) => {
            sq.style.backgroundColor = "#E6E6FA"; // Lavender
        });
    });

});