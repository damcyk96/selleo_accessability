import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./components/useDarkMode";
import { GlobalStyles } from "./components/Globalstyle";
import { lightTheme, darkTheme } from "./components/Themes";
import Toggle from "./components/Toggler";
import "./App.css";
import dummyData from "./data";
import CardList from "./components/CardList";
import { BrowserRouter } from "react-router-dom";
import Main from "./pages/Main";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideos(dummyData);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <BrowserRouter>
        <GlobalStyles />
        <div className="App">
          <Toggle theme={theme} toggleTheme={themeToggler} />
          <Main />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
