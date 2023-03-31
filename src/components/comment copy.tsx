import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  thread_id: number
}

type content = {
  thread_id: number,
  id: number,
  created_at: string,
  goods: number,
  comment: string,
}

const URL = "http://localhost:8000/api/comments";
const URL_INCRE = "http://localhost:8000/api/increment";

const Comment: React.FC<Props> = ({ thread_id }) => {

  const [goods, setGoods ] = useState(0);

  const incre = () => {
    setGoods(prev => prev+1)
  }


  const [ comments, setComments ] = useState([]);

  useEffect (() => {
    try {
      const getComment = async () => {
        const res = await axios.get(URL);
        // console.log(res.data);
        setComments(res.data);
      }
      getComment();
      console.log(comments);
    } catch (e) {
      return e;
    }
  }, []);


  return (
    <>
    {comments.filter((comment : content) => comment.thread_id == thread_id).map((comment : content, i) => (
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
          <li className=" px-2 border-r-2">{goods}
            <button onClick={incre} className="w-4">
              ❤
            </button>
          </li>
        </ol>
        <div className="text-2xl p-2 border-2 border-y-0 h-32">
          <p>{comment.comment}</p>
        </div>
      </div>
      ))}
    </>
  )
}

export default Comment














