import React from 'react'

type Props = {
}

const makeThread: React.FC<Props> = () => {
  return (
    <>
      <form method="post">
      <h1 className="mt-10 ml-20 text-2xl font-bold">threadを立てて世界のみんなとつながろう!</h1>
        <div className="flex flex-col items-center mr-96">
          <div className="m-20">
          ・<label className="bg-amber-300 p-1 rounded m-1" htmlFor="thread" >thread名</label>
            <input type="text" name="thread" id="thread" className="border-stone-800 bg-slate-300 rounded p-1 w-96" placeholder="thread nameを記入してください" required />
          </div>
          <div className="">
            ・<label className="bg-amber-300 rounded p-1" htmlFor="genre">ジャンル</label>
            <select className="w-96 border-orange-300 border-2" name="genre" id="genre" required>
              <option value="sports" >スポーツ</option>
              <option value="cooking" >料理</option>
              <option value="politics" >政治</option>
              <option value="outdoor" >アウトドア</option>
              <option value="game" >ゲーム</option>
              <option value="trip" >旅行</option>
              <option value="others" >その他</option>
            </select>
          </div>
          <button className="hover:bg-orange-700 border-2 border-amber-300 p-2 text-xl rounded bg-orange-500 m-20">make!</button>
        </div>
      </form>
    </>
  )
}

export default makeThread;