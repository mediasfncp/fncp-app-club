"use client"
import { useEffect, useState } from "react"
import { supabase } from "../../lib/supabase"

export default function Admin(){

 const [data,setData] = useState([])

 useEffect(()=>load(),[])

 async function load(){
  const {data} = await supabase.from("reservations").select("*")
  setData(data)
 }

 return(
 <div className="container">

  <div className="sidebar">
    <h2>FNCP</h2>
    <a href="/admin">Dashboard</a>
    <a href="/admin/planning">Planning</a>
    <a href="/admin/reservations">Réservations</a>
  </div>

  <div className="main">

    <h1>Dashboard</h1>

    <div className="stats">
      <div className="card">Total : {data.length}</div>
    </div>

  </div>

 </div>
 )
}
