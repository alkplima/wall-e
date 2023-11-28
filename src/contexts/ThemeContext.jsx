import { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme } from '../styles/themes/light';
import { darkTheme } from '../styles/themes/dark';

const ThemeContext = createContext(undefined);

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const savedTheme = localStorage.getItem('theme');
  const initialTheme = savedTheme === 'dark' ? darkTheme : lightTheme;
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    if (!savedTheme) {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDarkMode ? darkTheme : lightTheme);
    }
  }, [savedTheme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme.mode === 'light' ? darkTheme : lightTheme;
      localStorage.setItem('theme', newTheme.mode);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
