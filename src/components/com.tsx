import React from 'react'
import content from '@/components/comment'
import axios from 'axios';
import { useState } from 'react'

type content = {
  thread_id: number,
  id: number,
  created_at: Date,
  goods: number,
  comment: string,
}


type Props = {
  comment: content;
  i: number;
}

const URL_INCRE = "http://localhost:8000/api/increment";

const Com: React.FC<Props> = ({ comment, i }) => {

  const [ goods, setGoods ] = useState<number>(comment.goods);
  const [ th, setTh ] = useState<number>(0);
  const [ data, setData ] = useState({
    id: comment.id
  });

  const incre = async () => {
    if (th != 1) {
      setTh(prev => prev+1);
      setGoods(prev => prev+1);
      axios.post(URL_INCRE, data).catch((e) => {
        console.log(e);
      });
    }
  }
  return (
    <>
      <div key={comment.id}>
        <ol className="flex border-2">
          <li className=" px-2 border-r-2">{i + 1}</li>
          <li className="px-2 border-r-2 flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p>comment.name</p>
          </li>
          <li className="px-2 border-r-2">{comment.created_at}</li>
          <li className="flex px-2 border-r-2">
            <div>
              {goods}
            </div>
            <button onClick={incre} className="w-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`${th ? "text-amber-700" : "text-amber-500" } w-5 h-5 text-amber-500 hover:text-amber-700`}>
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </button>
          </li>
        </ol>
        <div className="text-2xl p-2 border-2 border-y-0 h-32">
          <p>{comment.comment}</p>
        </div>
      </div>
    </>
  )
}

export default Com;
