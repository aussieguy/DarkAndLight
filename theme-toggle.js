 // Run applyStoredTheme after the DOM has loaded.
      document.addEventListener("DOMContentLoaded", applyStoredTheme);

// Retrieve the stored theme and apply this to the background color.  Using #121212 for black as this is a bit easier on the eye.
      function applyStoredTheme() {
        // Set the background color.
        document.body.style.backgroundColor = localStorage.getItem("theme") || "white";

        // Set the icon image and text color.
        const storedTheme = localStorage.getItem("theme") || "white";     
        applyTheme(storedTheme);
      };

// Change the icon image and set the text color.      
      function applyTheme(theme) {
        // Set the icon image
        const iconImage = document.getElementById("sunOrMoon").getElementsByTagName("img")[0];
        iconImage.src = theme === "#121212" ? "https://darkandlight.onrender.com/moon-blue.png" : "https://darkandlight.onrender.com/sun.png";

        // Set the text color
        document.body.style.color = theme === "#121212" ? "white" : "#121212";
      };
  
// Change between dark and light themes depending upon the user clicking the icon.    
      function toggleDarkLightTheme() {

        // Retrieve the stored theme or default to white if none exists.
        const storedTheme = localStorage.getItem("theme") || "white";
      
        // Determine the new theme. If the storedTheme is "black" then set it to "white", otherwise set it to "black".
        const newTheme = storedTheme === "#121212" ? "white" : "#121212";
      
        // Change the icon image and apply the new theme to the body background color and text color.
        document.body.style.backgroundColor = newTheme;
        applyTheme(newTheme);

        // Save the new theme to local storage.
        localStorage.setItem("theme", newTheme);
      };
