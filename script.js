//your JS code here. If required.


squares.forEach((square) => {
 
    squares.forEach((s) => {
      
      if (s !== square) {
        s.style.backgroundColor = '#6F4E37';
      }
    });
  });

  
  square.addEventListener('mouseleave', () => {
    squares.forEach((s) => {
      
      s.style.backgroundColor = '#E6E6FA';
    });
  });
});