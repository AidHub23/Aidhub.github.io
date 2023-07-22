const textElement = document.getElementById('fade-in-text');

    function fadeIn() {
      let opacity = 0;
      const interval = setInterval(() => {
        opacity += 0.05;
        textElement.style.opacity = opacity;
        if (opacity >= 1) {
          clearInterval(interval);
        }
      }, 100);
    }

    window.onload = fadeIn;