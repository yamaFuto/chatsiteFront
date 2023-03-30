import React from 'react'
import { useEffect, useState, ChangeEvent } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router';

type Props = {
  thread_id: number
}

const URL = "http://localhost:8000/api/comments"

const MakeThread: React.FC<Props> = ({ thread_id }) => {

  type MemoComment = {
    comment: string,
    thread_id: number
  }

  const [data, setData] = useState<MemoComment>({
    comment: '',
    thread_id: thread_id,
  });

  const updatedMemoForm = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({... data, [e.target.name]: e.target.value})
  }

  console.log(data);

  const router = useRouter();

  const sendComment = async () => {
    await axios.post(URL, data).then((res) => {
      setData({
        comment: '',
        thread_id: thread_id
      });
      router.reload();
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <>
      <div className="ml-20 mt-20 flex flex-col">
        <h1 className="mb-4 w-44 rounded bg-orange-200 p-1 text-3xl font-bold">コメントを書く</h1>
        <textarea placeholder="write comment" value={data.comment} onChange={updatedMemoForm} className="px-2 h-40 w-96 border-2 border-orange-300" name="comment" required></textarea>
        <button onClick={sendComment} type="submit" className="mt-8 ml-40 h-10 w-20 rounded bg-orange-600 p-1 pb-2 text-xl">push</button>
      </div>
    </>
  )
}

export default MakeThread;