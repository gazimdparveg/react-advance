import React, { useState } from 'react'

function From() {
 const [name , suname] = useState("");
 const [age, suage]    = useState('');
 const [email,suemail] = useState('');
 const [pass,supass]   = useState('');

 const submitname = (e)=>{
      suname(e.target.value);
      
 }
 
 const submitage = (a)=>{
    suage(a.target.value);
    
 }
 const submitemail = (e)=>{
    suemail(e.target.value);
   
 }
 const submitpass = (e)=>{
    supass(e.target.value);
 }
 const submitdate=(e)=>{
 var d1=   document.getElementById('p1');
 var d2=     document.getElementById('p2');
 var d3=    document.getElementById('p3');
 var d4=     document.getElementById('p4');
 d1.textContent=name;
 d2.textContent=age;
 d3.textContent=email;
 d4.textContent=pass;
 e.preventDefault();
   
 }
  return (

    <div>
         <div className='container bg'>
      <form onChange={submitdate}>
       <p id="p1"></p>
       <p id="p2"></p>
       <p id="p3"></p>
       <p id="p4"></p>
  <div classNameName="mb-3">
    <label for="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" value={name} onChange={submitname} aria-describedby="emailHelp"/> 
  </div>
  <div className="mb-3">
    <label for="age" className="form-label">Age</label>
    <input type="text" className="form-control" value={age} onChange={submitage} id="age"/>
  </div>
  <div classNameName="mb-3">
    <label for="email" className="form-label">Email address</label>
    <input type="email" className="form-control" value={email} onChange={submitemail} id="email" aria-describedby="emailHelp"/> 
  </div>
  <div className="mb-3">
    <label for="pass" className="form-label">Password</label>
    <input type="text" className="form-control" value={pass} onChange={submitpass} id="pass"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
    </div>
  )
}

export default From
