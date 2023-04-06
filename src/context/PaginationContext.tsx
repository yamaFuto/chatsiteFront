import { useState, useContext, createContext } from "react"
import React from "react"
import { DataWithPagination } from "@/types/dataWithPagination"

const PaginationContext = createContext({} as {
  pagination: DataWithPagination
  setPagination: React.Dispatch<React.SetStateAction<DataWithPagination>>
})

type Props = {
  children: React.ReactNode
}

export const PaginationProvider: React.FC<Props> = ({ children }) => {
  const [pagination, setPagination] = useState<DataWithPagination>({});

  return (
    <PaginationContext.Provider value={{ pagination, setPagination }}>
      {children}
    </PaginationContext.Provider>
  )
};

export const usePagination = () => useContext(PaginationContext);