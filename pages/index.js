import Head from 'next/head'
import Image from 'next/image'
// import react, { useState } from 'react/cjs/react.production.min'
import React, { useState } from 'react';
//import Layout from 'antd/lib/layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <>
    <p>You Clicked {count} times</p>
    <button onClick={()=> setCount(count+1)}>+</button><br/>
    <button onClick={()=> setCount(count-1)}>-</button><br/>
    <div>{count}</div>
    </>
  )
}
