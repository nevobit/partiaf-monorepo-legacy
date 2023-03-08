import {
  Dispatch,
  useState,
  SetStateAction,
  createContext,
  useContext,
  ReactNode,
  useCallback,
  useMemo,
} from "react";
import { useColorScheme } from "react-native";

export type ThemeType = "dark" | "light";

interface ThemeProps {
  theme: ThemeType;
  updateTheme: Dispatch<SetStateAction<ThemeType>>;
}

export const ThemeContext = createContext<ThemeProps>({
  theme: "dark",
  updateTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // const colorScheme = useColorScheme();
  const [currentTheme, setCurrentTheme] = useState<ThemeType>("dark");

  const updateTheme = () => {
    let mode: ThemeType;
    mode = currentTheme === "dark" ? "light" : "dark";
    setCurrentTheme(mode);
  };
  return (
    <ThemeContext.Provider
      value={{
        theme: currentTheme,
        updateTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
