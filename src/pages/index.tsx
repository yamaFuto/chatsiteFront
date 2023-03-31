import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout'
import Comment from '@/components/comment'
import Thread from '@/components/thread';
import axios from "axios";
import { useEffect, useState, ChangeEvent } from "react";

const URL = "http://localhost:8000/api/threads";

type threadType = {
  id: number,
  sum: number,
  genre: string,
  created_at: string,
  updated_at: string,
}

export default function Home() {
  const [ threads, setThreads ] = useState([]);

  const [ genre, setGenre] = useState('');

  const updatedMemo = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    setGenre(e.target.value)
  }

  useEffect (() => {
    try {
      const getThreads = async () => {
        const res = await axios.get(URL);
        console.log("res.data");
        setThreads(res.data);
      }
      getThreads();
      // console.log(threads);
    } catch (e) {
      return e;
    }
  }, []);
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
         threads.filter((thread : threadType) => thread.genre == genre).map((thread) => ( <Thread key="thread.id" thread={thread} />))
        :threads.map((thread) => ( <Thread key="thread.id" thread={thread} />))
      }
    </>
  )
}
