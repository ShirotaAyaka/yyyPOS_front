
"use client";

import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  const handleCheck = async () =>{
    try{
      const res = await fetch('http://127.0.0.1:8000/check');
      const data = await res.json();
      setMessage(data.message);
    }catch(error){
      console.error('Error fetching data:', error);
    }
  };


  return (
    <div className="flex flex-col">
    <h1>Hello world</h1>
    <button className="btn btn-neutral w-48" onClick={handleCheck}>check</button>
    {message && <p>受信メッセージ: {message}</p>}

    <p className="text-2xl mt-20">YYY_POSアプリ</p>
    </div>
  );
}