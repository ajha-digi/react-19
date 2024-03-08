import React, { createContext, useState, use } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemedCard = () => {
  const { theme, toggleTheme } = use(ThemeContext);

  return (
    <div>
      <h1>Themed Card - {theme}</h1>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
    </div>
  );
};

const Example4 = () => {
  return (
    <ThemeProvider>
      <ThemedCard />
    </ThemeProvider>
  );
};

export default Example4;
