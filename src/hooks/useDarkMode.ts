import { useState } from "react";

export default function useDarkMode(): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] {
  const [darkModeOn, setDarkModeOn] = useState<boolean>(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
  const theme = darkModeOn ? "dark" : "light";
  const root = window.document.documentElement;
  root.classList.remove("dark", "light");
  root.classList.add(theme);
  localStorage.setItem("theme", theme);

  return [darkModeOn, setDarkModeOn];
}
