import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import Com from "@/components/com"

type Props = {
  thread_id: number
}

type content = {
  thread_id: number,
  id: number,
  created_at: Date,
  goods: number,
  comment: string,
}

const URL = "http://localhost:8000/api/comments";

const Comment: React.FC<Props> = ({ thread_id }) => {

  const [ comments, setComments ] = useState<content[]>([]);

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
      <Com key={i} comment={comment} i={i} />
      ))}
    </>
  )
}

export default Comment














