"use client"
import { useEffect, useState } from "react"
import { supabase } from "../../lib/supabase"

export default function Reservations(){

 const [data,setData] = useState([])

 useEffect(()=>load(),[])

 async function load(){
  const {data} = await supabase.from("reservations").select("*")
  setData(data)
 }

 return(
  <div className="main">

   <h1>Réservations</h1>

   <table>
    <tbody>
     {data.map(r=>(
      <tr key={r.id}>
        <td>{r.nom}</td>
        <td>{r.enfant}</td>
        <td>{r.heure}</td>
      </tr>
     ))}
    </tbody>
   </table>

  </div>
 )
}
