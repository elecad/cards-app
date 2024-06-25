import { useEffect, useMemo, useState } from "react";

const ThemeProps = {
  key: "theme",
  light: "light",
  dark: "dark",
};

type Theme = typeof ThemeProps.light | typeof ThemeProps.dark;

export const useTheme = (defaultTheme?: Theme) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem(ThemeProps.key) as Theme | null;

    return storedTheme || (defaultTheme ?? ThemeProps.light);
  });

  const isDark = useMemo(() => {
    return theme === ThemeProps.dark;
  }, [theme]);

  const isLight = useMemo(() => {
    return theme === ThemeProps.light;
  }, [theme]);

  const _installTheme = (theme: Theme) => {
    localStorage.setItem(ThemeProps.key, theme);
    document.documentElement.classList.remove(
      ThemeProps.light,
      ThemeProps.dark,
    );
    document.documentElement.classList.add(theme);
    setTheme(theme);
  };

  const setLightTheme = () => _installTheme(ThemeProps.light);

  const setDarkTheme = () => _installTheme(ThemeProps.dark);

  const toggleTheme = () =>
    _installTheme(
      theme === ThemeProps.light ? ThemeProps.dark : ThemeProps.light,
    );

  useEffect(() => {
    _installTheme(theme);
  });

  return { theme, isDark, isLight, setLightTheme, setDarkTheme, toggleTheme };
};
