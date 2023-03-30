import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout'
import Comment from '@/components/comment'
import Thread from '@/components/thread';
import axios from "axios";
import { useEffect, useState } from "react";

const URL = "http://localhost:8000/api/threads";

export default function Home() {
  const [ threads, setThreads ] = useState([]);

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
      {threads.map((thread) => (
      <Thread key="thread.id" thread={thread} />
      ))}
    </>
  )
}
