import React, { useState } from "react";

function ThemeToggle() {
  // Initialize state based on screen width
  const [isDark, setDark] = useState(window.innerWidth > 768);

  // Function to toggle theme
  const toggleTheme = () => {
    setDark((prevMode) => !prevMode);
  };

  return (
    <div
      style={{
        background: isDark ? "#333" : "#fff",
        color: isDark ? "#fff" : "#000",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>{isDark ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={toggleTheme}>
        Switch to {isDark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default ThemeToggle;