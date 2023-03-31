import React from 'react'
import { useEffect, useState, ChangeEvent } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router';

type Props = {
}

const URL = "http://localhost:8000/api/threads"

const MakeThread: React.FC<Props> = () => {
  type MemoThread = {
    theme: string,
    genre: string
  }

  const [data, setData] = useState<MemoThread>({
    theme: '',
    genre: '',
  });

  const updatedMemoForm = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement >
  ) => {
    setData({... data, [e.target.name]: e.target.value})
  }

  const router = useRouter();

  const sendThread = async () => {
    await axios.post(URL, data).then((res) => {
      setData({
        theme: '',
        genre: ''
      });
      router.reload();
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <>
      <h1 className="mt-10 ml-20 text-2xl font-bold">threadを立てて世界のみんなとつながろう!</h1>
        <div className="flex flex-col items-center mr-96">
          <div className="m-20">
          ・<label className="bg-amber-300 p-1 rounded m-1" htmlFor="theme" >thread名</label>
            <input type="text" name="theme" id="theme" value={data.theme} onChange={updatedMemoForm} className="border-stone-800 bg-slate-300 rounded p-1 w-96" placeholder="thread nameを記入してください" required/>
          </div>
          <div className="">
            ・<label className="bg-amber-300 rounded p-1" htmlFor="genre">ジャンル</label>
            <select className="w-96 border-orange-300 border-2" name="genre" id="genre" value={data.genre} onChange={updatedMemoForm} required>
              <option value="">ジャンルを選択してください</option>
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
          </div>
          <button onClick={sendThread} className="hover:bg-orange-700 border-2 border-amber-300 p-2 text-xl rounded bg-orange-500 m-20">make!</button>
        </div>
    </>
  )
}

export default MakeThread;