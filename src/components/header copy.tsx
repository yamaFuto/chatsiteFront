import React from 'react'
import { useState, ChangeEvent } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTheme } from "@/context/ThemeContext"
import axios from "axios"
import { usePagination } from "@/context/PaginationContext";
import { useSent } from "@/context/SentContext"

const URL = "http://localhost:8000/api/theme"

const Header: React.FC = () => {
  const [word, setWord] = useState({ word : "" });
  const router = useRouter();
  const onClick = () => {
    router.push('/chat/makeThread');
  }

  const { theme, setTheme } = useTheme();
  const { pagination, setPagination } = usePagination();
  const { sent, setSent } = useSent();

  const updatedMemoForm = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setWord({... word, [e.target.name]: e.target.value});
    setSent({... sent, [e.target.name]: e.target.value});
  }

  const sendTheme = async () => {
    await axios.post(URL, word).then((res) => {
      setPagination(res.data);
      setTheme(res.data.data);
      console.log(res.data);
      router.push("/search")
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <>
    <div className="flex items-center bg-gray-300 py-6 flex-wrap">
      <Link href="/">
      <div className="text-5xl mx-10 mr-32 p-3 hover:bg-amber-500 bg-amber-300 rounded-lg border-r-4">CHATSITE</div>
      </Link>
      <div className="flex">
        <label htmlFor="search" className="pt-1 mr-2 font-medium">検索</label>
        <input value={word.word} onChange={updatedMemoForm} type="text" name="word" id="search" className="px-2 rounded-md h-8 w-96" />
        <button onClick={sendTheme}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="hover:bg-gray-500 rounded w-10 h-10 p-2 mx-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>
      </div>
      <div className="ml-auto flex">
      <button onClick={onClick} className="hover:bg-yellow-300 bg-yellow-100 px-2 rounded-md mr-10">make Thread</button>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 mr-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      </div>
    </div>
    </>
  )
}

export default Header
