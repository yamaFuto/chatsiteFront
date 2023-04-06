import { useState, useContext, createContext } from "react"
import React from "react"

type sentence = {
  word: string
}

const SentContext = createContext({} as {
  sent: sentence
  setSent: React.Dispatch<React.SetStateAction<sentence>>
})

type Props = {
  children: React.ReactNode
}

export const SentProvider: React.FC<Props> = ({ children }) => {
  const [sent, setSent] = useState<sentence>({ word: "a" });

  return (
    <SentContext.Provider value={{ sent, setSent }}>
      {children}
    </SentContext.Provider>
  )
};

export const useSent = () => useContext(SentContext);