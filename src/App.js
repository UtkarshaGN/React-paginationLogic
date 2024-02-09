import React, { useEffect, useState } from 'react'
import Pages from './components/Pages';

function App() {
  const [data,setData] = useState([]);

  //getting posts from url
  useEffect(() =>{
  const paginationFun = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data =  await res.json()
  setData(data)
}
  paginationFun();
  },[])

  return (
    <>
      {
        data.length > 0 ? <Pages data = {data}/> : <p>Loading ....</p>
      }
    </>
  )
}

export default App

