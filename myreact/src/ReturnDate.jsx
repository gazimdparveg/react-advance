import React from 'react'

function ReturnDate(props) {
  return (
    <div>
    
 

      <table class="table">
 
  <tbody>
    <tr>
      <th >{props.id}</th>
      <td>{props.name}</td>
      <td> {props.email}</td>
     
    </tr>
 
  </tbody>
</table>



    </div>
  )
}

export default ReturnDate
