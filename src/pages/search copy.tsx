import Thread from '@/components/thread';
import { useEffect, useState, ChangeEvent } from "react";
import { useTheme } from "@/context/ThemeContext"

const URL = "http://localhost:8000/api/threads";

type threadType = {
  id: number,
  sum: number,
  theme: string,
  genre: string,
  date: string,
  created_at: string,
  updated_at: string,
}

export default function Home() {

  const { theme } = useTheme();

  const [ genre, setGenre] = useState<string>('');

  const updatedMemo = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    setGenre(e.target.value)
  }



  return (
    <>
    <select value={genre} onChange={updatedMemo} className="w-96 mt-8 ml-10 border-orange-300 border-2" name="genre" id="genre">
        <option value="">すべてのジャンルを表示</option>
        <option value="sports" >スポーツ</option>
        <option value="cooking" >料理</option>
        <option value="politics" >政治</option>
        <option value="economy" >経済</option>
        <option value="outdoor" >アウトドア</option>
        <option value="trip" >旅行</option>
        <option value="animal" >動物</option>
        <option value="game" >ゲーム</option>
        <option value="comic" >漫画</option>
        <option value="anime" >アニメ</option>
        <option value="others" >その他</option>
      </select>
      { genre ?
         theme.filter((thread: threadType) => thread.genre == genre).map((thread: threadType) => ( <Thread key="thread.id" thread={thread} />))
        :theme.map((thread: threadType) => ( <Thread key="thread.id" thread={thread} />))
      }
    </>
  )
}
