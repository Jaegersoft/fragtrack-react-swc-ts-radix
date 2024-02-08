import { signal } from "@preact/signals-react";
import { createContext, PropsWithChildren } from "react";

type ThemeProviderProps = PropsWithChildren & {
  storageKey: string;
};

type Theme = "dark" | "light" | "system";

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: (_value: Theme) => null
};

export const ThemeProviderContext = createContext<ThemeProviderState | null>(initialState);

const defaultTheme = "system";
const root = window.document.documentElement;

const theme = signal<Theme>(defaultTheme);

function setTheme(key: string, value: Theme) {
  theme.value = value;

  root.classList.remove("light", "dark");
  localStorage.setItem(key, value);

  if (value === "system") {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    root.classList.add(systemTheme);
    return;
  }

  root.classList.add(value);
}

export function ThemeProvider({ children, storageKey = "ui-theme", ...props }: ThemeProviderProps) {
  const storedTheme = localStorage.getItem(storageKey) ?? defaultTheme;
  setTheme(storageKey, storedTheme as Theme);

  const value = {
    theme: theme.value,
    setTheme: (value: Theme) => {
      setTheme(storageKey, value);
    }
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
