import React, { useEffect, useState } from 'react'
import ReturnDate from './ReturnDate'
import UseEffect from './UseEffect'

function FaceDate() {
    const [SaveDate] = UseEffect('https://jsonplaceholder.typicode.com/users');
  return (
    <div>
        <br />
        <br />
        <h1>Fatch Date From API</h1>
        <table  class="table">
        <thead>
         <tr>
           <th scope="col">id</th>
           <th scope="col">Name</th>
           <th scope="col">Email</th> 
         </tr>
       </thead>
        </table>
      {SaveDate &&
        SaveDate.map((date)=> {
        
           
         return <ReturnDate name={date.name} id={date.id} email={date.email} />
        })
      }
       
    </div>
  )
}

export default FaceDate
