import React, { useEffect, useState } from 'react'
import UseEffect from './UseEffect'

function ShowImage() {
  const [Showdate] = UseEffect("https://jsonplaceholder.typicode.com/photos?id=1")   
  return (
    <div>
        <h1>Fetch image from API</h1>
      { Showdate && 
      Showdate.map((date)=>{
        return  <img key={date.id} src={date.url} alt={date.title} />
      })
     
    
      
      }
    </div>
  )
}

export default ShowImage
