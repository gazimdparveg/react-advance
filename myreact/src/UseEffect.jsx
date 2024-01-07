import React, { useEffect, useState } from 'react'

function UseEffect(url) {
    const [SaveDate, saveDate] = useState(null)
    useEffect(()=>{
   setTimeout(()=>{
    fetch(url)
    .then((res)=> res.json())
    .then((date)=>saveDate(date))
   },1000)
    },[])
       return [SaveDate];
}

export default UseEffect

