"use client"

export default function Planning(){

 const slots = [
  "09:00","09:30","10:00","10:30"
 ]

 return(
  <div className="main">

   <h1>Planning</h1>

   {slots.map(s=>(
    <div key={s} className="card">
      {s} - 2 places
    </div>
   ))}

  </div>
 )
}
