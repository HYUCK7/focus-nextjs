// import react, { useState } from 'react/cjs/react.production.min'
import React, { useState } from 'react';
//import styles from '../styles/Home.module.css'

export default function Count() {
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