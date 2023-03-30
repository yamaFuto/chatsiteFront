import Link from 'next/link';
import React from 'react';

type Thread = {
  id: number,
  theme: string,
  sum: number,
  created_at: Date,
  updated_at: Date,
}

type Props = {
  thread: Thread
}

const Thread: React.FC<Props> = ({ thread }) => {
  return (
    <>
      <dl className="bg-yellow-200 h-28 m-10 mx-48 border-4">
        <Link href={`/chat/${thread.id}`}>
        <dd className="text-3xl mt-2 mx-2 h-16">
          {thread.theme}
        </dd>
        <dt>
          <ol className="flex justify-end ">
            <li className="mx-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </li>
            <li className="mx-1 mr-4">user name</li>
            <li className="mx-4">{thread.created_at}</li>
            <li className="mx-4">{thread.sum} talks</li>
          </ol>
        </dt>
        </Link>
      </dl>
    </>
  )
}

export default Thread;


