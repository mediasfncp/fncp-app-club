"use client"
import { useState } from "react"

export default function Booking(){

 const [selected,setSelected] = useState(null)

 const slots = [
  {time:"09:00",places:2},
  {time:"09:30",places:1},
  {time:"10:00",places:0}
 ]

 return(
  <div className="container-mobile">

   <h2>Choisir un créneau</h2>

   {slots.map(s=>(
    <div
     key={s.time}
     className="card"
     onClick={()=>setSelected(s.time)}
     style={{
      border:selected===s.time?"2px solid #00CCCC":"none"
     }}
    >
     <b>{s.time}</b> - {s.places>0 ? `${s.places} places` : "COMPLET"}
    </div>
   ))}

   <button className="btn">Payer</button>

  </div>
 )
}
