import React from 'react'
import Comment from '@/components/comment'
import MakeComment from '@/pages/chat/makeComment';


export default function Playground({ id }) {
  return (
    <>
    <Comment thread_id={id} />
    <MakeComment thread_id={id} />
    </>
  )
}


export async function getServerSideProps({ params }) {
  return {
    props: {
      id: params.thread_id,
    }
  }
}