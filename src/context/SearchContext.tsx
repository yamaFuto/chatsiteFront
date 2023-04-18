import { useState, useContext, createContext } from "react"
import React from "react"

type sentence = {
  word: string
}

const SearchContext = createContext({} as {
  search: sentence
  setSearch: React.Dispatch<React.SetStateAction<sentence>>
})

type Props = {
  children: React.ReactNode
}

export const SearchProvider: React.FC<Props> = ({ children }) => {
  const [search, setSearch] = useState<sentence>({ word: "a" });

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  )
};

export const useSearch = () => useContext(SearchContext);