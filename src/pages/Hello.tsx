import type { NextPage } from 'next'
import useSWR from 'swr'
import axios from '@/libs/axios'
import Thread from '@/components/thread'

const Hello: NextPage = () => {
    const { data, error } = useSWR('/api/hello', () =>
    axios
        .get('/api/hello')
        .then((res: any) => res.data)
    )

    return (
        <Thread />
    )
}

export default Hello