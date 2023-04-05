import { useState, useContext, createContext } from "react"
import React from "react"

export type threadType = {
  id: number,
  theme: string,
  sum: number,
  genre: string,
  date: string,
  created_at: string,
  updated_at: string,
}

const ThemeContext = createContext({} as {
  theme: threadType[]
  setTheme: React.Dispatch<React.SetStateAction<threadType[]>>
})

type Props = {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<threadType[]>([]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
};

export const useTheme = () => useContext(ThemeContext);