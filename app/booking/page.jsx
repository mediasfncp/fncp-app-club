"use client"
import { useState } from "react"

export default function Booking() {

  const [selected,setSelected] = useState(null)

  const slots = ["09:00","09:30","10:00"]

  async function pay(){

    await fetch("/api/stripe",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        heure:selected,
        nom:"Test",
        enfant:"Enfant",
        email:"test@test.com",
        tel:"0600000000",
        pack:"1"
      })
    })
  }

  return (
    <div style={{padding:20}}>
      <h2>Choisir un créneau</h2>

      {slots.map(s=>(
        <div key={s}
          onClick={()=>setSelected(s)}
          style={{
            padding:10,
            margin:5,
            background:"#eee",
            cursor:"pointer"
          }}>
          {s}
        </div>
      ))}

      <button onClick={pay}>Payer</button>
    </div>
  )
}
