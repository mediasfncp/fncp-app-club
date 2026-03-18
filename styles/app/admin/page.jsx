"use client"
import { useEffect, useState } from "react"
import { supabase } from "../../lib/supabase"

export default function Dashboard(){

 const [data,setData] = useState([])
 const [search,setSearch] = useState("")

 useEffect(()=>load(),[])

 async function load(){
  const {data} = await supabase.from("reservations").select("*")
  setData(data)
 }

 const total = data.length
 const revenue = data.reduce((sum,r)=>sum+(r.amount||0),0)

 const filtered = data.filter(r=>
  r.enfant?.toLowerCase().includes(search.toLowerCase()) ||
  r.nom?.toLowerCase().includes(search.toLowerCase())
 )

 return(

 <div className="container">

  {/* SIDEBAR */}
  <div className="sidebar">
    <h2>FNCP</h2>

    <p>🏠 Dashboard</p>
    <p>📅 Planning</p>
    <p>👨‍👩‍👧 Réservations</p>
    <p>⚙️ Paramètres</p>
  </div>

  {/* MAIN */}
  <div className="main">

    {/* HEADER */}
    <div className="topbar">
      <h1>Dashboard FNCP</h1>
      <button className="btn">+ Ajouter créneau</button>
    </div>

    {/* STATS */}
    <div className="stats">

      <div className="card stat">
        <p>Total réservations</p>
        <h2>{total}</h2>
      </div>

      <div className="card stat">
        <p>Revenus</p>
        <h2>{revenue} €</h2>
      </div>

      <div className="card stat">
        <p>Aujourd’hui</p>
        <h2>
          {
            data.filter(r=>r.date === new Date().toISOString().split("T")[0]).length
          }
        </h2>
      </div>

    </div>

    {/* TABLE */}
    <div className="card">

      <input
        placeholder="Rechercher enfant..."
        onChange={(e)=>setSearch(e.target.value)}
        style={{
          padding:10,
          width:"300px",
          marginBottom:15,
          borderRadius:8,
          border:"1px solid #ddd"
        }}
      />

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Heure</th>
            <th>Parent</th>
            <th>Enfant</th>
            <th>Montant</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map(r=>(
            <tr key={r.id}>
              <td>{r.date}</td>
              <td>{r.heure}</td>
              <td>{r.nom}</td>
              <td>{r.enfant}</td>
              <td>{r.amount} €</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>

  </div>

 </div>

 )
}
